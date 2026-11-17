import type { VercelRequest, VercelResponse } from '@vercel/node';

type SupabaseUser = { app_metadata?: Record<string, unknown> };

async function requireAdmin(authorization: string | undefined): Promise<void> {
  if (!authorization?.startsWith('Bearer ')) throw new Error('Authentication required.');
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const publishableKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!supabaseUrl || !publishableKey) throw new Error('Server authentication is not configured.');
  const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: { apikey: publishableKey, Authorization: authorization },
  });
  if (!response.ok) throw new Error('Your session is invalid or has expired.');
  const user = (await response.json()) as SupabaseUser;
  if (user.app_metadata?.role !== 'admin') throw new Error('Administrator access is required.');
}

function isManagedBlobUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      /^[a-z0-9-]+\.public\.blob\.vercel-storage\.com$/i.test(url.hostname) &&
      /^\/dac\/(branding|properties)\//.test(url.pathname);
  } catch { return false; }
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }
  try {
    await requireAdmin(request.headers.authorization);
    const urls = request.body?.urls;
    if (!Array.isArray(urls) || urls.length > 200 || !urls.every(isManagedBlobUrl)) {
      return response.status(400).json({ error: 'A valid list of managed DAC media URLs is required.' });
    }
    const missing: string[] = [];
    await Promise.all(urls.map(async (url: string) => {
      try {
        const result = await fetch(url, { method: 'HEAD' });
        if (result.status === 404 || result.status === 410) missing.push(url);
      } catch {
        // A transient network error is not treated as proof that an asset was deleted.
      }
    }));
    return response.status(200).json({ missing });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Media reconciliation failed.';
    const status = /administrator|authentication|session|access/i.test(message) ? 401 : 500;
    return response.status(status).json({ error: message });
  }
}
