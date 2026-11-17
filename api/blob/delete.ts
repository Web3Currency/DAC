import { del } from '@vercel/blob';

type SupabaseUser = {
  id: string;
  email?: string;
  app_metadata?: Record<string, unknown>;
};

async function requireAdmin(authorization: string | undefined): Promise<SupabaseUser> {
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
  return user;
}

function isManagedBlobUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      /^[a-z0-9-]+\.public\.blob\.vercel-storage\.com$/i.test(url.hostname) &&
      /^\/dac\/(branding|properties)\//.test(url.pathname);
  } catch {
    return false;
  }
}

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }
  try {
    await requireAdmin(request.headers.authorization as string | undefined);
    const url = request.body?.url;
    if (!isManagedBlobUrl(url)) {
      return response.status(400).json({ error: 'This media URL is not a managed DAC Blob asset.' });
    }
    const head = await fetch(url, { method: 'HEAD' });
    if (head.status !== 404 && head.status !== 410) {
      await del(url);
    }
    return response.status(200).json({ success: true, alreadyMissing: head.status === 404 || head.status === 410 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Media deletion failed.';
    const status = /administrator|authentication|session|access/i.test(message) ? 401 : 500;
    return response.status(status).json({ error: message });
  }
}
