# Portfolio

A personal developer portfolio built with [Next.js](https://nextjs.org/) (App Router), TypeScript, and Tailwind CSS—ready to push to GitHub and deploy on [Vercel](https://vercel.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) 20.x or newer (includes `npm`)
- [Git](https://git-scm.com/) (this repo is initialized on branch `main` with an initial commit)

## Connect to GitHub

Create an empty repository on GitHub (no README/license if you already have this project locally), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Use your real URL (HTTPS or SSH). After the first push, connect the repo in Vercel as described below.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Projects:** Edit [`src/data/projects.ts`](src/data/projects.ts) (titles, descriptions, stack tags, GitHub and demo URLs). Replace placeholder images in [`public/projects/`](public/projects/) with your own screenshots (PNG/JPEG/WebP work well with `next/image`).
- **Copy:** Update the home, tools, and funsies pages under [`src/app/`](src/app/).
- **Contact / social:** Adjust links in [`src/components/SiteFooter.tsx`](src/components/SiteFooter.tsx) (and your intro on the home page).

## Production metadata (site URL)

**You do not need any environment variable on Vercel** for the default `*.vercel.app` URL. Vercel injects `VERCEL_URL` automatically; the app builds absolute Open Graph / `metadataBase` URLs from it (see [`src/lib/site-url.ts`](src/lib/site-url.ts)).

**Optional:** Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (local) or in Vercel **Environment Variables** if you use a **custom domain** and want shared previews and social cards to use that domain instead of the `vercel.app` host.

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In Vercel, choose **Add New… → Project** and import the repo.
3. Framework preset **Next.js** should be detected automatically.
4. Deploy—no env vars required for a standard setup.
5. Every push to the connected branch can trigger a new production or preview deployment.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint |
