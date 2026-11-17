import React, { useEffect, useMemo, useState } from 'react';
import { LogOut, UploadCloud, Copy, Check, Image as ImageIcon, ShieldCheck } from 'lucide-react';
import { upload } from '@vercel/blob/client';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type AssetFolder = 'logo' | 'hero' | 'services' | 'projects' | 'team' | 'company';

const folders: { value: AssetFolder; label: string; description: string }[] = [
  { value: 'logo', label: 'Logo & brand marks', description: 'Approved company logos and identity files' },
  { value: 'hero', label: 'Hero imagery', description: 'Homepage banners and lead imagery' },
  { value: 'services', label: 'Services', description: 'Images used in service sections' },
  { value: 'projects', label: 'Projects', description: 'Completed projects and portfolio imagery' },
  { value: 'team', label: 'Team', description: 'Approved leadership and team photographs' },
  { value: 'company', label: 'Company', description: 'Office, activities and general company imagery' },
];

export default function AdminApp() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [folder, setFolder] = useState<AssetFolder>('company');
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [uploaded, setUploaded] = useState<{ url: string; pathname: string; size: number }[]>([]);
  const [copiedUrl, setCopiedUrl] = useState('');

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

    const results: { url: string; pathname: string; size: number }[] = [];
    try {
      for (const file of files) {
        const safeName = file.name.normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(-100);
        const pathname = `dac/branding/${folder}/${crypto.randomUUID()}-${safeName || 'image'}`;
        const blob = await upload(pathname, file, {
          access: 'public',
          handleUploadUrl: '/api/blob/upload',
          headers: { Authorization: `Bearer ${token}` },
        });
        results.push({ url: blob.url, pathname: blob.pathname, size: file.size });
      }
      setUploaded((current) => [...results, ...current]);
      setFiles([]);
      setNotice(`${results.length} image${results.length === 1 ? '' : 's'} uploaded successfully.`);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Upload failed. Please try again.');
    } finally {
      setBusy(false);
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
    setUploaded([]);
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
          {error && <p role="alert" className="rounded-lg bg-red-50 text-red-700 text-sm p-3">{error}</p>}
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
          <div>
            <h2 className="font-bold text-[#252223]">Recently uploaded</h2>
            <p className="text-xs text-[#626061] mt-1">Public image URLs are ready to use in the website and content records.</p>
          </div>
          {uploaded.length === 0 ? <p className="text-sm text-[#777] py-5">No images uploaded in this session yet.</p> : (
            <div className="grid sm:grid-cols-2 gap-4">
              {uploaded.map((item) => (
                <article key={item.url} className="rounded-xl border border-[#E5E9E1] overflow-hidden">
                  <img src={item.url} alt="" className="w-full h-40 object-cover bg-[#F5F8F2]" />
                  <div className="p-3 space-y-2">
                    <p className="text-[11px] text-[#626061] break-all">{item.pathname}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-[#777]">{(item.size / 1024 / 1024).toFixed(2)} MB</span>
                      <button onClick={() => copyUrl(item.url)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07A757]">{copiedUrl === item.url ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}{copiedUrl === item.url ? 'Copied' : 'Copy URL'}</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
