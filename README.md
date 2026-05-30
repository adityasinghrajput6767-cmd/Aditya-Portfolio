# Aditya Singh — Portfolio

Growth Marketing & GTM portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack
- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + inline styles
- **Fonts**: Instrument Serif + Geist (Google Fonts)
- **Deploy**: Vercel (zero-config) or any static host

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build   # outputs to /out
```

### Deploy to Vercel (recommended — free, instant)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Next.js — click Deploy
4. Done. Live in ~60 seconds.

### Deploy to Netlify
1. Push to GitHub
2. New site → Import from Git
3. Build command: `next build`  
4. Publish directory: `out`
5. Deploy

### Deploy to GitHub Pages
1. Push to GitHub
2. Settings → Pages → GitHub Actions
3. Use the `nextjs.yml` workflow template

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout, metadata, fonts
    page.tsx        # Home page — imports all sections
    globals.css     # Tailwind + font import + keyframes
  components/
    Nav.tsx         # Fixed navigation bar
    Hero.tsx        # Full-height hero section
    StatsStrip.tsx  # Dark metrics band
    Experience.tsx  # Accordion experience section
    Projects.tsx    # Project grid + modal trigger
    Modal.tsx       # Case study modal
    Skills.tsx      # Skill pills grid
    Contact.tsx     # Contact links + availability
    Footer.tsx      # Simple footer
  data/
    content.ts      # ALL copy, metrics, case studies — edit here
```

## Updating Content

Everything is in `src/data/content.ts`. To update:
- **Stats**: edit `STATS` array
- **Experience bullets**: edit `EXPERIENCE` array
- **Project case studies**: edit `PROJECTS` array
- **Skills**: edit `SKILLS` array
- **Contact info**: edit `CONTACT` object
