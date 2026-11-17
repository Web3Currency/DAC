import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export type SiteMediaMap = Record<string, string>;

export function useSiteMedia() {
  const [media, setMedia] = useState<SiteMediaMap>({});
  useEffect(() => {
    let active = true;
    supabase
      .from('site_media')
      .select('placement_key,blob_url')
      .eq('is_active', true)
      .not('placement_key', 'is', null)
      .then(({ data, error }) => {
        if (!active || error || !data) return;
        const next: SiteMediaMap = {};
        for (const item of data) {
          if (item.placement_key && item.blob_url) next[item.placement_key] = item.blob_url;
        }
        setMedia(next);
      });
    return () => { active = false; };
  }, []);
  return media;
}
