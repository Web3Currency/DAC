import React, { useEffect, useState } from 'react';
import { Upload, Eye, EyeOff, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { upload } from '@vercel/blob/client';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type PropertyRecord = {
  id: string;
  title: string;
  listing_type: 'sale' | 'letting';
  category: string;
  listing_status: string;
  location: string | null;
  price_label: string | null;
  is_published: boolean;
  created_at: string;
};

const categories = ['Residential', 'Commercial', 'Industrial', 'Development', 'Land'];

function slugify(value: string) {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function PropertiesAdmin({ user }: { user: User }) {
  const [properties, setProperties] = useState<PropertyRecord[]>([]);
  const [title, setTitle] = useState('');
  const [listingType, setListingType] = useState<'sale' | 'letting'>('sale');
  const [category, setCategory] = useState('Residential');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Lagos');
  const [price, setPrice] = useState('');
  const [priceLabel, setPriceLabel] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [area, setArea] = useState('');
  const [areaUnit, setAreaUnit] = useState('sqm');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [parking, setParking] = useState('');
  const [tenure, setTenure] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function refresh() {
    const { data, error: queryError } = await supabase.from('properties')
      .select('id,title,listing_type,category,listing_status,location,price_label,is_published,created_at')
      .order('created_at', { ascending: false });
    if (queryError) setError('Could not load property records: ' + queryError.message);
    else setProperties((data || []) as PropertyRecord[]);
  }

  useEffect(() => { void refresh(); }, []);

  async function createProperty(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setMessage('');
    if (photos.length < 4) {
      setError('Please select at least four property photographs before saving this listing.');
      return;
    }
    if (photos.length > 12) {
      setError('A property can have a maximum of 12 photographs.');
      return;
    }
    setBusy(true);
    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;
    if (!token) {
      setError('Your session has expired. Sign in again.');
      setBusy(false);
      return;
    }

    const propertyId = crypto.randomUUID();
    const baseSlug = slugify(title);
    const slug = baseSlug + '-' + propertyId.slice(0, 8);
    const { error: insertError } = await supabase.from('properties').insert({
      id: propertyId,
      slug,
      title,
      listing_type: listingType,
      category,
      listing_status: 'available',
      location,
      city: city || null,
      state: state || null,
      country: 'Nigeria',
      price_amount: price ? Number(price) : null,
      price_currency: 'NGN',
      price_label: priceLabel || null,
      summary: summary || null,
      description: description || null,
      area_value: area ? Number(area) : null,
      area_unit: areaUnit,
      bedrooms: bedrooms ? Number(bedrooms) : null,
      bathrooms: bathrooms ? Number(bathrooms) : null,
      parking_spaces: parking ? Number(parking) : null,
      title_tenure: tenure || null,
      is_featured: false,
      is_published: false,
    });
    if (insertError) {
      setError('Could not create property: ' + insertError.message);
      setBusy(false);
      return;
    }

    try {
      const imageRows = [];
      for (let index = 0; index < photos.length; index += 1) {
        const file = photos[index];
        const safeName = file.name.normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').slice(-90);
        const pathname = 'dac/properties/' + propertyId + '/' + crypto.randomUUID() + '-' + (safeName || 'property-image');
        const blob = await upload(pathname, file, {
          access: 'public',
          handleUploadUrl: '/api/blob/upload',
          headers: { Authorization: 'Bearer ' + token },
        });
        imageRows.push({
          property_id: propertyId,
          image_url: blob.url,
          storage_path: blob.pathname,
          alt_text: title + ' — photograph ' + (index + 1),
          display_order: index,
          is_cover: index === 0,
        });
      }
      const { error: imageError } = await supabase.from('property_images').insert(imageRows);
      if (imageError) throw new Error('Property saved as draft, but its photographs could not be linked: ' + imageError.message);
      setMessage('Property saved as an unpublished draft with ' + photos.length + ' photographs. Review it below and publish when the details are verified.');
      setTitle(''); setLocation(''); setCity(''); setPrice(''); setPriceLabel('');
      setSummary(''); setDescription(''); setArea(''); setBedrooms(''); setBathrooms('');
      setParking(''); setTenure(''); setPhotos([]);
      await refresh();
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Photo upload failed. The property remains an unpublished draft.');
      await refresh();
    } finally {
      setBusy(false);
    }
  }

  async function togglePublish(item: PropertyRecord) {
    if (!item.is_published) {
      const { count, error: countError } = await supabase.from('property_images')
        .select('id', { count: 'exact', head: true }).eq('property_id', item.id);
      if (countError || (count || 0) < 4) {
        setError('This listing needs at least four saved photographs before it can be published.');
        return;
      }
    }
    const { error: updateError } = await supabase.from('properties')
      .update({ is_published: !item.is_published, published_at: !item.is_published ? new Date().toISOString() : null })
      .eq('id', item.id);
    if (updateError) setError('Could not update publication status: ' + updateError.message);
    else {
      setMessage(item.is_published ? 'Listing taken offline.' : 'Listing published on the public website.');
      await refresh();
    }
  }

  return (
    <section className="rounded-2xl bg-white border border-[#E5E9E1] p-5 sm:p-7 space-y-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#F5F8F2] text-[#07A757] grid place-items-center"><ImageIcon className="w-5 h-5" /></div>
        <div><h2 className="font-bold text-[#252223]">Property listings</h2><p className="text-xs text-[#626061] mt-1">Create listings with a photo gallery. New records remain unpublished until reviewed.</p></div>
      </div>
      {error && <p role="alert" className="rounded-lg bg-red-50 text-red-700 text-sm p-3 break-words">{error}</p>}
      {message && <p role="status" className="rounded-lg bg-emerald-50 text-emerald-800 text-sm p-3">{message}</p>}
      <form onSubmit={createProperty} className="grid sm:grid-cols-2 gap-4">
        <label className="sm:col-span-2 text-xs font-semibold text-[#252223]">Property title<input required value={title} onChange={e => setTitle(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Listing type<select value={listingType} onChange={e => setListingType(e.target.value as 'sale' | 'letting')} className="mt-1 w-full rounded-lg border border-[#D9DED5] bg-white px-3 py-2.5 text-sm font-normal"><option value="sale">For sale</option><option value="letting">For letting</option></select></label>
        <label className="text-xs font-semibold text-[#252223]">Category<select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] bg-white px-3 py-2.5 text-sm font-normal">{categories.map(item => <option key={item}>{item}</option>)}</select></label>
        <label className="sm:col-span-2 text-xs font-semibold text-[#252223]">Property location / address<input required value={location} onChange={e => setLocation(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">City<input value={city} onChange={e => setCity(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">State<input value={state} onChange={e => setState(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Price (NGN)<input type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Price display override<input value={priceLabel} onChange={e => setPriceLabel(e.target.value)} placeholder="e.g. ₦250m or ₦5m per annum" className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="sm:col-span-2 text-xs font-semibold text-[#252223]">Short summary<textarea value={summary} onChange={e => setSummary(e.target.value)} rows={2} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="sm:col-span-2 text-xs font-semibold text-[#252223]">Full description<textarea required value={description} onChange={e => setDescription(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Area<input type="number" min="0" value={area} onChange={e => setArea(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Area unit<select value={areaUnit} onChange={e => setAreaUnit(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] bg-white px-3 py-2.5 text-sm font-normal"><option>sqm</option><option>sqft</option><option>acre</option><option>hectare</option></select></label>
        <label className="text-xs font-semibold text-[#252223]">Bedrooms<input type="number" min="0" value={bedrooms} onChange={e => setBedrooms(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Bathrooms<input type="number" min="0" value={bathrooms} onChange={e => setBathrooms(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Parking spaces<input type="number" min="0" value={parking} onChange={e => setParking(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="text-xs font-semibold text-[#252223]">Title / tenure<input value={tenure} onChange={e => setTenure(e.target.value)} className="mt-1 w-full rounded-lg border border-[#D9DED5] px-3 py-2.5 text-sm font-normal" /></label>
        <label className="sm:col-span-2 block rounded-xl border-2 border-dashed border-[#C9D4C1] bg-[#FAFCF8] p-5 text-center cursor-pointer">
          <Upload className="w-6 h-6 text-[#07A757] mx-auto mb-2" />
          <span className="block text-sm font-semibold text-[#252223]">Select property photographs</span>
          <span className="block text-xs text-[#777] mt-1">Minimum 4, maximum 12. First photograph becomes the cover image.</span>
          <input type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple className="sr-only" onChange={e => setPhotos(Array.from(e.target.files || []))} />
        </label>
        {photos.length > 0 && <p className="sm:col-span-2 text-xs text-[#626061]">{photos.length} photograph(s) selected: {photos.map(file => file.name).join(', ')}</p>}
        <div className="sm:col-span-2"><button disabled={busy} className="rounded-lg bg-[#8ABE4B] px-5 py-3 text-sm font-bold text-[#252223] hover:bg-[#07A757] hover:text-white disabled:opacity-50">{busy ? 'Saving property and uploading photos…' : 'Save property as draft'}</button></div>
      </form>
      <div className="border-t border-[#E5E9E1] pt-5 space-y-3">
        <div className="flex items-center justify-between"><h3 className="font-bold text-[#252223]">Saved properties</h3><button onClick={() => void refresh()} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07A757]"><RefreshCw className="w-3.5 h-3.5" /> Refresh</button></div>
        {properties.length === 0 ? <p className="text-sm text-[#777]">No property records yet.</p> : properties.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-[#E5E9E1] p-3">
            <div><p className="text-sm font-semibold text-[#252223]">{item.title}</p><p className="text-xs text-[#626061]">{item.listing_type === 'sale' ? 'For sale' : 'For letting'} · {item.category} · {item.location || 'Location pending'}</p><p className="text-[10px] text-[#777] mt-1">{item.is_published ? 'Published' : 'Draft / unpublished'}</p></div>
            <button onClick={() => void togglePublish(item)} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#D9DED5] px-3 py-2 text-xs font-semibold text-[#252223]">{item.is_published ? <><EyeOff className="w-3.5 h-3.5" /> Take offline</> : <><Eye className="w-3.5 h-3.5" /> Publish listing</>}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
