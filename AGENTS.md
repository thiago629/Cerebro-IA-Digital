# LUXORA — Base44 Dev Environment

## Stack
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
The dev server runs on port 3000 with live reload enabled.

## Architecture
- `app/layout.tsx` — root layout with Inter + Space Grotesk fonts
- `app/page.tsx` — single-page landing importing all sections
- `components/` — one file per section (Header, Hero, Problem, etc.)
- `components/ui.tsx` — shared primitives (AnimatedSection, Container, Button, SectionLabel)

## Key details
- All components use `'use client'` because Framer Motion requires client-side rendering.
- `next.config.mjs` sets `allowedDevOrigins` from `BASE44_PUBLIC_HOST_SUFFIX` for the preview origin.
- The dev server binds `0.0.0.0` via the `next dev -H 0.0.0.0` script.
- No external services or databases required — it's a static marketing site.
- The contact form is frontend-only (shows a success message, no backend).
