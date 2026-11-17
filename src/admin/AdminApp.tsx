import React, { useEffect, useMemo, useState } from 'react';
import { LogOut, UploadCloud, Copy, Check, Image as ImageIcon, ShieldCheck, RefreshCw, Trash2 } from 'lucide-react';
import type { User } from '@supabase/supabase-js';
import { upload } from '@vercel/blob/client';
import { supabase } from '../lib/supabase';
import PropertiesAdmin from './PropertiesAdmin';

type AssetFolder = 'logo' | 'hero' | 'services' | 'projects' | 'team' | 'company';
type MediaItem = {
  id: string;
  title: string;
  folder: AssetFolder;
  blob_url: string;
  pathname: string;
  mime_type: string;
  size_bytes: number;
  alt_text: string | null;
  caption: string | null;
  is_active: boolean;
  created_at: string;
  placement_key: string | null;
};

const basePlacements = [
  { value: 'header_logo', label: 'Header logo' },
  { value: 'footer_logo', label: 'Footer logo' },
  { value: 'homepage_hero', label: 'Homepage hero' },
  { value: 'about_image', label: 'About section image' },
];
type ServicePlacement = { slug: string; title: string; display_order: number; is_active: boolean };
const APPROVED_SERVICE_SLUGS = [
  'estate-agency-brokerage',
  'property-valuation',
  'property-facility-management',
  'facility-management',
  'investment-jv-consultancy',
  'real-estate-consultancy',
] as const;
const folders: { value: AssetFolder; label: string; description: string }[] = [
  { value: 'logo', label: 'Logo & brand marks', description: 'Approved company logos and identity files' },
  { value: 'hero', label: 'Hero imagery', description: 'Homepage banners and lead imagery' },
  { value: 'services', label: 'Services', description: 'Images used in service sections' },
  { value: 'projects', label: 'Projects', description: 'Completed projects and portfolio imagery' },
  { value: 'team', label: 'Team', description: 'Approved leadership and team photographs' },
  { value: 'company', label: 'Company', description: 'Office, activities and general company imagery' },
];

function readableTitle(pathname: string) {
  const filename = pathname.split('/').pop() || 'Website image';
  return filename.replace(/^[0-9a-f-]{36}-/i, '').replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
}

export default function AdminApp() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [folder, setFolder] = useState<AssetFolder>('company');
  const [files, setFiles] = useState<File[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [servicePlacements, setServicePlacements] = useState<ServicePlacement[]>([]);
  const [busy, setBusy] = useState(false);
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [copiedUrl, setCopiedUrl] = useState('');
  const [deletingId, setDeletingId] = useState('');

  useEffect(() => {
    let alive = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!alive) return;
      const session = data.session;
      if (!session) {
        setUser(null);
        setChecking(false);
        return;
      }
      const { data: userData } = await supabase.auth.getUser();
      if (!alive) return;
      if (userData.user?.app_metadata?.role === 'admin') {
        setUser(userData.user);
      } else {
        await supabase.auth.signOut();
        setError('This account has not been granted DAC administrator access.');
      }
      setChecking(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!alive) return;
      setUser(session?.user ?? null);
    });

    return () => {
      alive = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const selectedFolder = useMemo(
    () => folders.find((item) => item.value === folder)!,
    [folder],
  );

  async function loadMedia() {
    setLoadingMedia(true);
    const [{ data, error: queryError }, { data: services, error: serviceError }] = await Promise.all([
      supabase.from('site_media')
        .select('id,title,folder,blob_url,pathname,mime_type,size_bytes,alt_text,caption,is_active,created_at,placement_key')
        .order('created_at', { ascending: false }),
      supabase.from('service_catalog')
        .select('slug,title,display_order,is_active')
        .eq('is_active', true)
        .order('display_order', { ascending: true }),
    ]);
    if (queryError) {
      setError(`Could not load the media library: ${queryError.message}`);
    } else {
      let currentMedia = (data || []) as MediaItem[];
      const session = (await supabase.auth.getSession()).data.session;
      if (session && currentMedia.length > 0) {
        try {
          const reconcileResponse = await fetch('/api/blob/reconcile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session.access_token}`,
            },
            body: JSON.stringify({ urls: currentMedia.map((item) => item.blob_url) }),
          });
          if (reconcileResponse.ok) {
            const result = await reconcileResponse.json() as { missing?: string[] };
            const missingUrls = result.missing || [];
            if (missingUrls.length > 0) {
              const { error: cleanupError } = await supabase.from('site_media').delete().in('blob_url', missingUrls);
              if (!cleanupError) {
                currentMedia = currentMedia.filter((item) => !missingUrls.includes(item.blob_url));
                setNotice(`${missingUrls.length} unavailable media record${missingUrls.length === 1 ? '' : 's'} removed from the library.`);
              } else {
                setError(`Some unavailable media records could not be cleaned up: ${cleanupError.message}`);
              }
            }
          }
        } catch {
          // Preserve the library if the availability check fails; manual refresh can retry.
        }
      }
      setMedia(currentMedia);
    }
    if (serviceError) {
      setServicePlacements([]);
      setError(`Could not load the active service list. Service image assignments are disabled until the catalog is available: ${serviceError.message}`);
    } else {
      const approved = new Set<string>(APPROVED_SERVICE_SLUGS);
      const activeServices = ((services || []) as ServicePlacement[])
        .filter((service) => approved.has(service.slug))
        .sort((a, b) => a.display_order - b.display_order);
      setServicePlacements(activeServices);
      if (activeServices.length !== APPROVED_SERVICE_SLUGS.length) {
        setError(`Service catalogue mismatch: expected 6 approved services, but found ${activeServices.length}. Please refresh or check the database catalogue before assigning service images.`);
      }
    }
    setLoadingMedia(false);
  }

  useEffect(() => {
    if (user) void loadMedia();
  }, [user]);

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setNotice('');
    setBusy(true);
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError || !data.user) {
      setError(authError?.message || 'Unable to sign in.');
      setBusy(false);
      return;
    }
    if (data.user.app_metadata?.role !== 'admin') {
      await supabase.auth.signOut();
      setError('This account is not authorized as a DAC administrator.');
      setBusy(false);
      return;
    }
    setUser(data.user);
    setPassword('');
    setBusy(false);
  }

  async function handleUpload(event: React.FormEvent) {
    event.preventDefault();
    if (!user || files.length === 0) return;
    setBusy(true);
    setError('');
    setNotice('');
    const sessionResult = await supabase.auth.getSession();
    const token = sessionResult.data.session?.access_token;
    if (!token) {
      setError('Your session has expired. Sign in again.');
      setBusy(false);
      return;
    }

    let savedCount = 0;
    try {
      for (const file of files) {
        const safeName = file.name.normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(-100);
        const pathname = `dac/branding/${folder}/${crypto.randomUUID()}-${safeName || 'image'}`;
        const blob = await upload(pathname, file, {
          access: 'public',
          handleUploadUrl: '/api/blob/upload',
          headers: { Authorization: `Bearer ${token}` },
        });
        const { error: insertError } = await supabase.from('site_media').insert({
          title: readableTitle(blob.pathname),
          folder,
          blob_url: blob.url,
          pathname: blob.pathname,
          mime_type: file.type,
          size_bytes: file.size,
          created_by: user.id,
        });
        if (insertError) {
          throw new Error(`The image uploaded, but its media record could not be saved: ${insertError.message}. The image URL is ${blob.url}`);
        }
        savedCount += 1;
      }
      setFiles([]);
      await loadMedia();
      setNotice(`${savedCount} image${savedCount === 1 ? '' : 's'} uploaded and saved to the media library.`);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Upload failed. Please try again.');
      await loadMedia();
    } finally {
      setBusy(false);
    }
  }

  async function assignPlacement(item: MediaItem, placement: string) {
    setError('');
    setNotice('');
    if (placement) {
      const { error: clearError } = await supabase.from('site_media').update({ placement_key: null }).eq('placement_key', placement).neq('id', item.id);
      if (clearError) { setError('Could not replace the existing placement: ' + clearError.message); return; }
    }
    const { error: updateError } = await supabase.from('site_media').update({ placement_key: placement || null }).eq('id', item.id);
    if (updateError) { setError('Could not assign image: ' + updateError.message); return; }
    await loadMedia();
    const label = [...basePlacements, ...servicePlacements.map((service) => ({ value: 'service_' + service.slug, label: 'Service: ' + service.title }))].find((p) => p.value === placement)?.label || placement;
    setNotice(placement ? 'Image assigned to ' + label + '.' : 'Image placement cleared.');
  }

  async function deleteMedia(item: MediaItem) {
    const confirmed = window.confirm(`Delete "${item.title}" permanently from Vercel Blob and the media library? This cannot be undone.`);
    if (!confirmed) return;
    setDeletingId(item.id);
    setError('');
    setNotice('');
    try {
      const session = (await supabase.auth.getSession()).data.session;
      if (!session) throw new Error('Your session has expired. Sign in again.');
      const response = await fetch('/api/blob/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ url: item.blob_url }),
      });
      const result = await response.json().catch(() => ({})) as { error?: string; alreadyMissing?: boolean };
      if (!response.ok) throw new Error(result.error || 'Could not delete the media file from storage.');
      const { error: rowError } = await supabase.from('site_media').delete().eq('id', item.id);
      if (rowError) {
        throw new Error(`The storage file was deleted, but its library record could not be removed: ${rowError.message}. Refresh the library to reconcile it.`);
      }
      setMedia((current) => current.filter((entry) => entry.id !== item.id));
      setNotice(result.alreadyMissing
        ? 'The file was already missing from Vercel Blob; its stale media record has been removed.'
        : 'Media file and library record deleted successfully.');
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'Media deletion failed.');
      await loadMedia();
    } finally {
      setDeletingId('');
    }
  }

  async function copyUrl(url: string) {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    window.setTimeout(() => setCopiedUrl(''), 1800);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setMedia([]);
  }

  if (checking) {
    return <main className="min-h-screen grid place-items-center bg-[#F5F8F2] text-sm text-[#626061]">Checking administrator session…</main>;
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#F5F8F2] px-4 py-12 flex items-center justify-center">
        <form onSubmit={signIn} className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#E5E9E1] p-7 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#F5F8F2] text-[#07A757] grid place-items-center"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#07A757]">DAC Website</p>
              <h1 className="text-xl font-bold text-[#252223]">Administrator sign in</h1>
            </div>
          </div>
          <p className="text-sm text-[#626061] leading-relaxed">Sign in with an authorized DAC administrator account to manage website media.</p>
          {error && <p role="alert" className="rounded-lg bg-red-50 text-red-700 text-sm p-3">{error}</p>}
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-[#252223]">Email address</span>
            <input required type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-lg border border-[#D9DED5] px-3 py-3 text-sm outline-none focus:border-[#07A757]" />
          </label>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-[#252223]">Password</span>
            <input required type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-lg border border-[#D9DED5] px-3 py-3 text-sm outline-none focus:border-[#07A757]" />
          </label>
          <button disabled={busy} className="w-full rounded-lg bg-[#8ABE4B] px-4 py-3 text-sm font-bold text-[#252223] hover:bg-[#07A757] hover:text-white disabled:opacity-60">{busy ? 'Signing in…' : 'Sign in securely'}</button>
          <p className="text-[11px] text-[#777] text-center">Administrator accounts are provisioned separately. Public registration is disabled.</p>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F8F2]">
      <header className="bg-white border-b border-[#E5E9E1]">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#07A757]">DAC Website</p>
            <h1 className="text-lg font-bold text-[#252223]">Media administration</h1>
          </div>
          <button onClick={signOut} className="inline-flex items-center gap-2 text-xs font-semibold text-[#626061] hover:text-[#252223]"><LogOut className="w-4 h-4" /> Sign out</button>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        <section className="rounded-2xl bg-white border border-[#E5E9E1] p-5 sm:p-7 space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5F8F2] text-[#07A757] grid place-items-center"><UploadCloud className="w-5 h-5" /></div>
            <div>
              <h2 className="font-bold text-[#252223]">Upload approved website images</h2>
              <p className="text-xs text-[#626061] mt-1">JPEG, PNG, WebP or AVIF · maximum 10 MB per image</p>
            </div>
          </div>
          {error && <p role="alert" className="rounded-lg bg-red-50 text-red-700 text-sm p-3 break-words">{error}</p>}
          {notice && <p role="status" className="rounded-lg bg-emerald-50 text-emerald-800 text-sm p-3">{notice}</p>}
          <form onSubmit={handleUpload} className="space-y-4">
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-[#252223]">Asset folder</span>
              <select value={folder} onChange={(event) => setFolder(event.target.value as AssetFolder)} className="w-full rounded-lg border border-[#D9DED5] bg-white px-3 py-3 text-sm">
                {folders.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
              </select>
              <span className="text-[11px] text-[#777]">{selectedFolder.description}</span>
            </label>
            <label className="block rounded-xl border-2 border-dashed border-[#C9D4C1] bg-[#FAFCF8] p-6 text-center cursor-pointer hover:border-[#8ABE4B]">
              <ImageIcon className="w-8 h-8 text-[#07A757] mx-auto mb-2" />
              <span className="block text-sm font-semibold text-[#252223]">Choose image files</span>
              <span className="block text-xs text-[#777] mt-1">You can select multiple images</span>
              <input type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple className="sr-only" onChange={(event) => setFiles(Array.from(event.target.files || []))} />
            </label>
            {files.length > 0 && <div className="text-xs text-[#626061] space-y-1">{files.map((file) => <p key={file.name}>{file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB</p>)}</div>}
            <button disabled={busy || files.length === 0} className="w-full sm:w-auto rounded-lg bg-[#8ABE4B] px-5 py-3 text-sm font-bold text-[#252223] hover:bg-[#07A757] hover:text-white disabled:opacity-50">{busy ? 'Uploading…' : `Upload ${files.length || ''} image${files.length === 1 ? '' : 's'}`}</button>
          </form>
        </section>

        <section className="rounded-2xl bg-white border border-[#E5E9E1] p-5 sm:p-7 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-bold text-[#252223]">Media library</h2>
              <p className="text-xs text-[#626061] mt-1">Saved records remain available after signing out or refreshing the page.</p>
            </div>
            <button onClick={() => void loadMedia()} disabled={loadingMedia} aria-label="Refresh media library" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07A757] disabled:opacity-50"><RefreshCw className={`w-3.5 h-3.5 ${loadingMedia ? 'animate-spin' : ''}`} /> Refresh</button>
          </div>
          {loadingMedia && media.length === 0 ? <p className="text-sm text-[#777] py-5">Loading media library…</p> : media.length === 0 ? <p className="text-sm text-[#777] py-5">No media records yet. Uploaded images will appear here.</p> : (
            <div className="grid sm:grid-cols-2 gap-4">
              {media.map((item) => (
                <article key={item.id} className="rounded-xl border border-[#E5E9E1] overflow-hidden">
                  <img src={item.blob_url} alt={item.alt_text || item.title} className="w-full h-40 object-cover bg-[#F5F8F2]" loading="lazy" />
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-[#252223] capitalize truncate">{item.title}</p>
                      <span className="shrink-0 rounded-full bg-[#F5F8F2] px-2 py-1 text-[10px] text-[#626061] capitalize">{item.folder}</span>
                    </div>
                    <p className="text-[11px] text-[#626061] break-all">{item.pathname}</p>
                    <label className="block space-y-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626061]">Website placement</span>
                      <span className="block text-[10px] text-[#07A757]">6 approved services · legacy service placements hidden</span>
                      <select value={item.placement_key || ""} onChange={(event) => void assignPlacement(item, event.target.value)} className="w-full rounded-lg border border-[#D9DED5] bg-white px-2.5 py-2 text-xs">
                        <option value="">Not assigned</option>
                        {basePlacements.map((placement) => <option key={placement.value} value={placement.value}>{placement.label}</option>)}
                        {servicePlacements.map((service) => <option key={service.slug} value={'service_' + service.slug}>Service: {service.title}</option>)}
                      </select>
                    </label>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-[#777]">{(item.size_bytes / 1024 / 1024).toFixed(2)} MB</span>
                      <div className="flex items-center gap-3">
                        <button onClick={() => void copyUrl(item.blob_url)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07A757]">{copiedUrl === item.blob_url ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}{copiedUrl === item.blob_url ? 'Copied' : 'Copy URL'}</button>
                        <button
                          onClick={() => void deleteMedia(item)}
                          disabled={busy || deletingId === item.id}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 disabled:opacity-50"
                          aria-label={`Delete ${item.title}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />{deletingId === item.id ? 'Deleting…' : 'Delete'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
        <PropertiesAdmin user={user} />
      </div>
    </main>
  );
}
