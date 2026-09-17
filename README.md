# Complete Wellness Addiction Center — Homepage Concept

A modern, homepage-only redesign **concept** for [Complete Wellness Addiction Center](https://www.completew.com/recovery), a substance-use recovery provider in Baltimore, Maryland. This is an independent design demonstration — it is **not** connected to or deployed on the live website.

## Design direction

Calm, cinematic and editorial — full-viewport photographic hero, oversized serif headings, generous negative space, numbered program sections and subtle scroll reveals. Palette of deep forest green, charcoal, muted olive, warm ivory and a restrained clay accent, drawn from the organization's own brand mark.

- **Headings:** Cormorant Garamond · **Body:** Manrope
- Authentic imagery only — the Baltimore Inner Harbor hero and the brand logo/mark are pulled from `completew.com`. No fabricated staff, patients, facilities, credentials or clinical claims.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (subtle, `prefers-reduced-motion` aware)
- Lucide React icons

All business information lives in a single config file: [`src/siteConfig.ts`](src/siteConfig.ts).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Accessibility & responsiveness

- Semantic landmarks, skip link, keyboard navigation and visible focus states
- WCAG 2.2 AA color contrast
- Fluid type, no horizontal overflow, tested layout at 320 / 768 / 1024 / 1440 px
- Motion respects `prefers-reduced-motion`

## Verified recovery-division contact

Complete Wellness Addiction Center · 309 Cathedral Street, Suite 200, Baltimore, MD 21201
Phone: 443-961-3050 · Fax: 443-957-9485 · Recovery@CompleteW.com
Monday–Friday, 9:00 AM–5:00 PM · Referrals accepted 24/7

---

> Concept work for demonstration purposes. Imagery and copy are adapted from the organization's existing public materials.
