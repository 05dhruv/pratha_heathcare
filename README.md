# Pritha Health Care website (Next.js + PostgreSQL)

Single-folder Next.js 14 (App Router, plain JSX) + Prisma + PostgreSQL + Tailwind + Framer Motion.
Frontend, API routes and admin panel all live in this one project.

## Quick start

```bash
npm install
cp .env.example .env         # then edit DATABASE_URL, ADMIN_PASSWORD, AUTH_SECRET
docker compose up -d         # optional: local PostgreSQL (or use your own / Neon / Supabase)
npx prisma db push           # creates tables
npm run db:seed              # sample slides, stats, posts
npm run dev                  # http://localhost:3000
```

Admin panel: http://localhost:3000/admin (password = `ADMIN_PASSWORD`).

## What is included

| Public pages | Route |
|---|---|
| Home (slider, programmes, counters, endeavors, news, blessings, donate banner) | `/` |
| About, Impact, Honors, Notifications | `/about` `/impact` `/honors-and-awards` `/notifications` |
| Services (data in `lib/site.js`) | `/eyecare` `/disability-care` `/sambal-special-school` `/outreach-services` `/physio-care` `/screening-center` `/pratha-healthcare-eye-institute` |
| News/blog, image + video gallery | `/blog` `/blog/[id]` `/image-gallery` `/video-gallery` |
| Contact, Donate, legal pages | `/contact-us` `/donate` `/privacy` `/terms` `/refund-policy` |

Admin (`/admin`): dashboard + editable milestone counters, posts, home slider, gallery (images / YouTube), notifications, contact messages, donations, subscribers.

## Customising

- Org name, contact, nav, service pages, awards, objectives: `lib/site.js`
- Images: put files in `public/images/` and reference them as `/images/name.jpg` (in `lib/site.js` or from the admin forms). Empty image fields show a placeholder block.
- Colours / fonts: `tailwind.config.js`, `app/layout.jsx`
- Legal pages: replace the placeholder text with the organisation's real policies.

## Payments

`/api/donate` currently records a PENDING pledge. To accept online payments, create a gateway order in that route
(Razorpay / PayU / Cashfree), save its id in `gatewayRef`, return `{ paymentUrl }`, and mark the donation `PAID` from the gateway webhook.

## Deploy

Vercel or any Node host + managed PostgreSQL. Set the env vars from `.env.example`, run `npx prisma db push` once against the production DB, then `npm run build && npm start`.
