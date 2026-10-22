# Besong Oscar: Developer Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Framer Motion and CSS Modules.
Live site: https://my-portfolio-eight-gold-47.vercel.app

## Pages
- `/` Home: hero, about, skills, featured project, resume, contact
- `/about` Skills, education and work experience
- `/projects` Filterable project grid (data lives in `lib/projects.ts`)
- `/contact` Contact form and FAQ

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Configuration
| Item | Where |
| --- | --- |
| Site URL, contact details, socials | `lib/siteConfig.ts` |
| Projects (single source of truth) | `lib/projects.ts` |
| Social-share preview image | `app/opengraph-image.tsx` (generated at build time) |
| Contact form email delivery | `app/api/contact/route.ts` |

### Contact form environment variables
Set these in Vercel (Settings > Environment Variables) or in `.env.local`:
```
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=you@example.com   # optional
```
Without `RESEND_API_KEY` the form returns an error instead of silently dropping messages.
