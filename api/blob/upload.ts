import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

type SupabaseUser = {
  id: string;
  email?: string;
  app_metadata?: Record<string, unknown>;
};

async function requireAdmin(authorization: string | undefined): Promise<SupabaseUser> {
  if (!authorization?.startsWith('Bearer ')) {
    throw new Error('Authentication required.');
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const publishableKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publishableKey) {
    throw new Error('Server authentication is not configured.');
  }

  const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      apikey: publishableKey,
      Authorization: authorization,
    },
  });

  if (!response.ok) {
    throw new Error('Your session is invalid or has expired.');
  }

  const user = (await response.json()) as SupabaseUser;
  if (user.app_metadata?.role !== 'admin') {
    throw new Error('Administrator access is required.');
  }

  return user;
}

function isAllowedPath(pathname: string): boolean {
  if (!pathname || pathname.includes('..') || pathname.includes('\\') || pathname.startsWith('/')) {
    return false;
  }

  if (/^dac\/branding\/(logo|hero|services|projects|team|company|credentials|articles|office)\/[a-zA-Z0-9._-]+$/.test(pathname)) {
    return true;
  }

  if (/^dac\/articles\/[a-zA-Z0-9._-]+$/.test(pathname)) {\n    return true;\n  }\n\n  return /^dac\/properties\/[0-9a-f-]{36}\/[a-zA-Z0-9._-]+$/i.test(pathname);
}

export default async function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const body = request.body as HandleUploadBody;
    const authorization = request.headers.authorization as string | undefined;

    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        await requireAdmin(authorization);

        if (!isAllowedPath(pathname)) {
          throw new Error('This upload location is not permitted.');
        }

        return {
          allowedContentTypes: [
            'image/jpeg',
            'image/png',
            'image/webp',
            'image/avif',
          ],
          maximumSizeInBytes: 10 * 1024 * 1024,
          addRandomSuffix: true,
          cacheControlMaxAge: 60 * 60 * 24 * 30,
        };
      },
      onUploadCompleted: async () => {
        // The admin client records the returned public URL in the relevant content record.
      },
    });

    return response.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload authorization failed.';
    const status = /administrator|authentication|session|access/i.test(message) ? 401 : 400;
    return response.status(status).json({ error: message });
  }
}
