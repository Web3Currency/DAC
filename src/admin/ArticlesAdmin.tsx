import React, { useEffect, useState } from 'react';
import { Pencil, Plus, RefreshCw, Save, Trash2, Upload } from 'lucide-react';
import { upload } from '@vercel/blob/client';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type Article = {
  id: string; title: string; slug: string; excerpt: string | null; content: string;
  category: string; cover_image_url: string | null; cover_image_alt: string | null;
  status: 'draft' | 'published' | 'archived'; published_at: string | null;
  created_at: string; updated_at: string;
};
const empty = { title: '', slug: '', excerpt: '', content: '', category: 'Expert Perspectives', cover_image_url: '', cover_image_alt: '', status: 'draft' as const };
const slugify = (value: string) => value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export default function ArticlesAdmin({ user }: { user: User }) {
  const [items, setItems] = useState<Article[]>([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  async function refresh() {
    const { data, error } = await supabase.from('articles').select('*').order('updated_at', { ascending: false });
    if (error) setError('Could not load articles: ' + error.message);
    else setItems((data || []) as Article[]);
  }
  useEffect(() => { void refresh(); }, []);

  function edit(item: Article) {
    setEditingId(item.id);
    setCover(null);
    setForm({ title: item.title, slug: item.slug, excerpt: item.excerpt || '', content: item.content, category: item.category, cover_image_url: item.cover_image_url || '', cover_image_alt: item.cover_image_alt || '', status: item.status });
    setError(''); setNotice('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function reset() { setEditingId(null); setCover(null); setForm(empty); }

  async function save(event: React.FormEvent) {
    event.preventDefault(); setBusy(true); setError(''); setNotice('');
    try {
      let coverUrl = form.cover_image_url.trim();
      if (cover) {
        const session = (await supabase.auth.getSession()).data.session;
        if (!session) throw new Error('Your session has expired. Sign in again.');
        const safe = cover.name.normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').slice(-90) || 'article-cover';
        const blob = await upload('dac/articles/' + crypto.randomUUID() + '-' + safe, cover, {
          access: 'public', handleUploadUrl: '/api/blob/upload',
          headers: { Authorization: 'Bearer ' + session.access_token },
        });
        coverUrl = blob.url;
      }
      const slug = slugify(form.slug || form.title);
      if (!slug) throw new Error('Please enter an article title.');
      const payload = {
        title: form.title.trim(), slug, excerpt: form.excerpt.trim() || null,
        content: form.content, category: form.category.trim() || 'Expert Perspectives',
        cover_image_url: coverUrl || null, cover_image_alt: form.cover_image_alt.trim() || null,
        status: form.status, published_at: form.status === 'published' ? new Date().toISOString() : null,
        created_by: user.id,
      };
      if (editingId) {
        const { created_by, ...updatePayload } = payload;
        const { error } = await supabase.from('articles').update(updatePayload).eq('id', editingId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('articles').insert(payload);
        if (error) throw error;
      }
      await refresh(); reset(); setNotice('Article saved successfully.');
    } catch (err) { setError(err instanceof Error ? err.message : 'Could not save article.'); }
    finally { setBusy(false); }
  }

  async function remove(item: Article) {
    if (!window.confirm('Delete "' + item.title + '" from the article library?')) return;
    const { error } = await supabase.from('articles').delete().eq('id', item.id);
    if (error) setError('Could not delete article: ' + error.message);
    else { setItems(current => current.filter(row => row.id !== item.id)); setNotice('Article deleted.'); }
  }

  return <section className="rounded-2xl bg-white border border-[#E5E9E1] p-5 sm:p-7 space-y-5">
    <div className="flex items-center justify-between gap-3"><div><h2 className="font-bold text-[#252223]">Articles &amp; Blog</h2><p className="text-xs text-[#626061] mt-1">Create, edit, draft and publish website articles.</p></div><button onClick={() => void refresh()} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07A757]"><RefreshCw className="w-3.5 h-3.5"/> Refresh</button></div>
    {error && <p role="alert" className="rounded-lg bg-red-50 text-red-700 text-sm p-3">{error}</p>}
    {notice && <p role="status" className="rounded-lg bg-emerald-50 text-emerald-800 text-sm p-3">{notice}</p>}
    <form onSubmit={save} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-[#E5E9E1] pb-6">
      <label className="text-xs font-semibold text-[#252223]">Article title<input required value={form.title} onChange={e => setForm({...form,title:e.target.value,slug: editingId ? form.slug : slugify(e.target.value)})} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="text-xs font-semibold text-[#252223]">URL slug<input required value={form.slug} onChange={e => setForm({...form,slug:slugify(e.target.value)})} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="text-xs font-semibold text-[#252223]">Category<input value={form.category} onChange={e => setForm({...form,category:e.target.value})} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="text-xs font-semibold text-[#252223]">Publication status<select value={form.status} onChange={e => setForm({...form,status:e.target.value as typeof form.status})} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></label>
      <label className="sm:col-span-2 text-xs font-semibold text-[#252223]">Short summary<textarea rows={2} value={form.excerpt} onChange={e => setForm({...form,excerpt:e.target.value})} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="sm:col-span-2 text-xs font-semibold text-[#252223]">Full article content<textarea required rows={12} value={form.content} onChange={e => setForm({...form,content:e.target.value})} placeholder="Write the complete article here…" className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="text-xs font-semibold text-[#252223]">Cover image alt text<input value={form.cover_image_alt} onChange={e => setForm({...form,cover_image_alt:e.target.value})} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="text-xs font-semibold text-[#252223]">Cover image URL (optional)<input value={form.cover_image_url} onChange={e => setForm({...form,cover_image_url:e.target.value})} placeholder="https://…" className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal"/></label>
      <label className="sm:col-span-2 block rounded-xl border-2 border-dashed border-[#C9D4C1] bg-[#FAFCF8] p-5 text-center cursor-pointer"><Upload className="w-6 h-6 text-[#07A757] mx-auto mb-2"/><span className="block text-sm font-semibold text-[#252223]">Upload article cover image</span><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="sr-only" onChange={e => setCover(e.target.files?.[0] || null)}/><span className="block text-xs text-[#777] mt-1">{cover?.name || 'JPEG, PNG, WebP or AVIF · max 10 MB'}</span></label>
      <div className="sm:col-span-2 flex flex-wrap gap-2"><button disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-[#8ABE4B] px-5 py-3 text-sm font-bold text-[#252223] disabled:opacity-50"><Save className="w-4 h-4"/>{busy ? 'Saving…' : editingId ? 'Save changes' : 'Save article'}</button>{editingId && <button type="button" onClick={reset} className="rounded-lg border border-[#D9DED5] px-4 py-3 text-sm">Cancel editing</button>}</div>
    </form>
    <div className="space-y-3"><div className="flex items-center justify-between"><h3 className="font-bold text-[#252223]">Saved articles ({items.length})</h3><button onClick={() => {reset();window.scrollTo({top:0,behavior:'smooth'});}} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07A757]"><Plus className="w-4 h-4"/> New article</button></div>
      {items.map(item => <article key={item.id} className="flex flex-col sm:flex-row gap-3 rounded-xl border border-[#E5E9E1] p-3">{item.cover_image_url && <img src={item.cover_image_url} alt={item.cover_image_alt || ''} className="h-20 w-full sm:w-28 rounded-lg object-cover"/>}<div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#252223]">{item.title}</p><p className="text-xs text-[#626061] mt-1">/insights/{item.slug} · {item.status}</p></div><div className="flex gap-2"><button onClick={() => edit(item)} className="inline-flex items-center gap-1 rounded-lg border border-[#D9DED5] px-3 py-2 text-xs"><Pencil className="w-3.5 h-3.5"/> Edit</button><button onClick={() => void remove(item)} className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-2 text-xs text-red-700"><Trash2 className="w-3.5 h-3.5"/> Delete</button></div></article>)}
    </div>
  </section>;
}
