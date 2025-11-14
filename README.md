# ARious Landing Page

Immersive marketing site for the ARious December 2025 launch. Built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and animated using **Framer Motion**. Content and sitemap were derived from the strategy + wireframe PDFs in this repo.

## Tech stack

- Vite + React 19 + TypeScript
- Tailwind CSS (custom theme + gradients)
- Framer Motion primitives (`FadeInOnScroll`, `StaggerContainer`, etc.)
- Central `src/data/content.ts` file for editable copy/metrics

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to preview the site. Edits in `src/` hot-reload automatically.

### Available scripts

| Command         | Description                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Start Vite dev server                  |
| `npm run build` | Type-check + production build to `dist` |
| `npm run preview` | Preview the built site locally       |
| `npm run lint`  | Run ESLint across the project          |

## Content architecture

All textual content, stats, FAQs, and CTAs live in `src/data/content.ts`. Update this file (instead of scattering copy through components) to keep the dual parent/school messaging consistent.

Sections live under `src/components/sections/**` and are composed inside `src/pages/Landing.tsx`. Shared UI (header/footer, buttons, motion primitives) lives in `src/components`.

## Deploying to Vercel

1. Install the Vercel CLI if you haven’t already:
   ```bash
   npm install -g vercel
   ```
2. From the project root, run `vercel` once to link or create the project (build command `npm run build`, output `dist`).
3. Deploy previews with `vercel` and production with `vercel --prod`.

The build artifacts in `dist/` are ready for any static host as well.
