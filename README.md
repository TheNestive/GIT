# Nova Atelier

Premium, production-ready corporate website starter built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ESLint

## Local Commands

```bash
npm install
npm run dev
npm run build
npm run start
```

## Production / Hostinger Commands

Use Node.js 20+ on the server.

```bash
npm install
npm run build
npm run start -- --hostname 0.0.0.0 --port 3000
```

If your Hostinger setup injects a port value, use:

```bash
npm run start -- --hostname 0.0.0.0 --port $PORT
```

## Folder Structure

```text
app/
  about/
  api/contact/
  contact/
  legal/
  services/
  globals.css
  icon.svg
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  layout/
  sections/
  ui/
content/
  site.ts
lib/
  utils.ts
```

## Notes

- The contact form posts to a lightweight local API route at `app/api/contact/route.ts`.
- No environment variables are required for the starter. `.env.example` is included as a placeholder for future integrations.
- Typography uses local premium-leaning font stacks so builds stay self-contained without external font downloads.

## Verified

The project was checked with:

```bash
npm install
npm run lint
npm run build
npm run dev
npm run start
```

- `npm run lint` passed.
- `npm run build` passed.
- `npm run dev` booted successfully and served `GET / 200`.
- `npm run start` booted successfully and returned HTTP `200` on the built app.
