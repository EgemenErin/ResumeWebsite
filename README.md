# Egemen Erin — Data Analyst Portfolio

Interactive portfolio site for **Egemen Erin**, a data analyst based in Poznan, Poland. Built with Next.js and GSAP scroll animations.

## Live site

Deploy from this repo or run locally — see [Setup](#setup) below.

## Features

- Hero section with animated typography and portrait
- Horizontal scroll project showcase (Muscledia, QGIS Deepness, Emerging Trends)
- Personal telemetry dashboard with live counters
- Skills, certifications, and contact sections
- SEO: metadata, Open Graph, JSON-LD, sitemap, and robots.txt
- Reduced-motion support via `prefers-reduced-motion`

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [GSAP](https://gsap.com/) + ScrollTrigger
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Cormorant Garamond & Manrope

## Setup

```bash
git clone https://github.com/EgemenErin/ResumeWebsite.git
cd ResumeWebsite
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL for canonical links, OG tags, and sitemap |

Example:

```env
NEXT_PUBLIC_SITE_URL=https://www.egemenerin.com
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/              # Layout, page, globals, SEO routes
├── components/       # PortfolioExperience, StructuredData
├── data/             # Projects, skills, credentials
└── lib/              # Site config and metadata helpers
public/images/        # Portrait, project screenshots, logos
```

## Deploy

Works on [Vercel](https://vercel.com), Netlify, or any Node.js host that supports Next.js.

1. Connect this repository
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain
3. Build command: `npm run build`

## Contact

- **Email:** egemeneriin@protonmail.com
- **GitHub:** [@EgemenErin](https://github.com/EgemenErin)
