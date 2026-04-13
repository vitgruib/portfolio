# Portfolio

A personal developer portfolio built with [Next.js](https://nextjs.org/) (App Router), TypeScript, and Tailwind CSS—ready to push to GitHub and deploy on [Vercel](https://vercel.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) 20.x or newer (includes `npm`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Projects:** Edit [`src/data/projects.ts`](src/data/projects.ts) (titles, descriptions, stack tags, GitHub and demo URLs). Replace placeholder images in [`public/projects/`](public/projects/) with your own screenshots (PNG/JPEG/WebP work well with `next/image`).
- **Copy:** Update the home, projects, and about pages under [`src/app/`](src/app/).
- **Contact / social:** Adjust links in [`src/components/SiteFooter.tsx`](src/components/SiteFooter.tsx) and the about page.

## Production metadata

For correct Open Graph URLs when sharing your site, set the public site URL:

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://your-app.vercel.app`).

On Vercel, add the same variable under **Project → Settings → Environment Variables** for **Production** (and Preview if you want previews to use a stable preview URL).

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab / Bitbucket).
2. In Vercel, choose **Add New… → Project** and import the repo.
3. Framework preset **Next.js** should be detected automatically.
4. Add `NEXT_PUBLIC_SITE_URL` if you use a custom domain or want exact OG URLs.
5. Deploy. Every push to the connected branch can trigger a new production or preview deployment.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint |
