# Demola Adetola & Co. Website

Production website for **Demola Adetola & Co.**, Chartered Estate Surveyors and Valuers.

Canonical website: <https://demolaadetola.ng>

## Technology

- React 19 and TypeScript
- Vite 8
- Tailwind CSS 4
- Supabase (authentication and content/data services)
- Vercel Functions and Vercel Blob (server-side media API routes and media storage)

The frontend is a Vite single-page application. The `api/` directory contains serverless API routes designed for Vercel. Deploying those API routes requires a host that supports the Vercel Functions runtime or a compatible adaptation.

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- A Supabase project with the required tables, policies, and authentication configured
- Vercel Blob storage if the admin media upload and deletion features are required

## Local development

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

4. Set the environment variables described below.
5. Start the development server:

   ```bash
   npm run dev
   ```

## Environment variables

| Variable | Where it is used | Required |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | Browser Supabase client | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Browser Supabase client | Yes |
| `BLOB_READ_WRITE_TOKEN` | Server-side Vercel Blob API routes | For admin media upload/delete |

Only public Supabase project URL and publishable key belong in `VITE_*` variables. Never put service-role keys, private API keys, or the Blob read/write token in browser-exposed variables.

## Available commands

- `npm run dev` — start local development.
- `npm run lint` — run the TypeScript check (`tsc --noEmit`).
- `npm run build` — run the TypeScript check and create the production build.
- `npm run preview` — preview the built Vite application locally.
- `npm run clean` — remove the generated `dist/` directory.

## Deployment

### Vercel

1. Import this repository into the intended Vercel account.
2. Configure the environment variables for the target environment.
3. Set the framework preset to **Vite** (or allow Vercel to detect it).
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy the project manually when the release is approved.
7. Attach `demolaadetola.ng` and configure the DNS records requested by Vercel.

The repository's `vercel.json` disables Git-triggered deployments. Keep this setting if deployments must remain manual.

### Other hosting providers

The public frontend can be built on any static host that can serve the contents of `dist/` and rewrite application routes to `/index.html`.

The API routes in `api/` are Vercel serverless functions. On a different host, port or adapt these endpoints to that host's serverless/runtime conventions. The Vercel Blob integration also requires Vercel Blob credentials and runtime support.

For static hosting, configure SPA fallback rewrites for these application routes: `/about`, `/services`, `/properties`, `/contact`, `/insights`, and nested `/insights/*`.

## SEO and public assets

- Canonical domain: `https://demolaadetola.ng`
- Crawler directives: `public/robots.txt`
- Sitemap: `public/sitemap.xml`
- SVG favicon: `public/favicon.svg`

Add the approved brand favicon assets to `public/` using these filenames when available:

- `favicon.ico`
- `favicon.svg` (replace the temporary DAC placeholder)
- `apple-touch-icon.png`

The HTML already references these paths. Keep the sitemap updated when public indexable routes are added or removed. Dynamic CMS articles should be added to the sitemap from the published article records as part of the content publishing workflow.

## Repository structure

- `src/components/` — reusable website sections and UI components.
- `src/pages/` — page-level content and route views.
- `src/admin/` — protected administration interface.
- `src/data/` — company content and static data.
- `src/lib/` — shared client integrations and hooks.
- `api/` — Vercel serverless API routes.
- `public/` — public static files, crawler files, and favicon assets.
- `docs/` — operational and administrator documentation.

## Important operational notes

- Supabase schema, row-level security policies, storage/content configuration, and admin-role assignment are managed in the Supabase project; this repository does not provision them automatically.
- Do not commit real credentials or local environment files.
- Review the Supabase policies before launch. Browser publishable keys are intended to be public only when the underlying database policies correctly restrict access.
- The contact form email delivery integration is not yet connected. The current contact form must not be represented as a live email submission workflow until the Resend/Supabase integration is configured and tested.
- The production domain and sitemap use HTTPS.
- The site currently uses a client-rendered React/Vite architecture. Search engines can process JavaScript, but route-specific server-rendered HTML or prerendering would improve initial crawler visibility and social link previews for individual routes.

## Quality checks

Run before every release:

```bash
npm ci
npm run lint
npm run build
```

Then test the public routes, admin authentication, property filters, media upload/delete flows, contact form, and mobile navigation in the target hosting environment.
