# Kognifx — Direct WhatsApp Consultation CTA

## Patch ID
`direct-whatsapp-consultation-cta`

## Commit Title
`feat(conversion): route primary consultation CTA to WhatsApp`

## Goal

Create two clear consultation paths across Kognifx:

1. **Primary path:** consultation CTA goes directly to WhatsApp.
2. **Secondary path:** existing Contact/Kontak page remains available for users who prefer the form or contact details.

Do not remove the contact page or existing contact form.

---

## Existing Contact Channel

Use the existing single source of truth in:

`lib/contact-channels.ts`

WhatsApp number:
`6285927351745`

Do not hardcode the number repeatedly if a shared constant/helper already exists.

---

## Primary CTA Behavior

Find the primary consultation CTA(s) currently used across the website, including labels such as:

- Start Consulting
- Start a Consultation
- Konsultasi
- Mulai Konsultasi
- Konsultasikan kebutuhan Anda
- equivalent primary consultation CTAs

The **main/primary consultation action** should open WhatsApp directly.

Use:

`https://wa.me/6285927351745?text=<encoded message>`

### Indonesian prefilled message

`Halo Kognifx, saya ingin konsultasi terkait kebutuhan software atau teknologi untuk bisnis saya.`

### English prefilled message

`Hi Kognifx, I'd like to discuss a software or technology solution for my business.`

Use `encodeURIComponent`.

Open WhatsApp in a new tab/window where appropriate and use safe link attributes:

`target="_blank"`
`rel="noopener noreferrer"`

---

## Secondary Path

Keep:

- `/contact`
- `/id/kontak`

Keep navigation items:

- Contact
- Kontak

Keep the existing form and email fallback.

Do not redirect Contact/Kontak pages to WhatsApp.

The intent is:

Primary CTA
→ WhatsApp directly

Secondary navigation/contact option
→ Contact page/form

---

## CTA Hierarchy

Where a section currently has one strong CTA to `/contact` or `/id/kontak`, change only the **primary consultation CTA** to WhatsApp when the wording clearly represents starting a consultation.

Do not blindly convert every contact-related link.

Examples:

### English
Primary:
`Start Consulting` → WhatsApp

Secondary:
`Contact` / `Contact Us` → `/contact`

### Indonesian
Primary:
`Mulai Konsultasi` / `Konsultasikan Kebutuhan Anda` → WhatsApp

Secondary:
`Kontak` → `/id/kontak`

---

## Centralization

Prefer adding/reusing a helper in `lib/contact-channels.ts`, for example conceptually:

- `getWhatsAppUrl(message)`
- localized consultation message constants

Avoid duplicate raw `wa.me` strings across components.

Do not over-engineer.

---

## Future Google Ads Tracking Readiness

Do **not** install Google Ads or GTM in this patch.

Make the primary WhatsApp CTA easy to identify later for conversion tracking.

If clean within the existing component architecture, add a stable non-visual identifier:

`data-conversion="whatsapp-consultation"`

to the primary consultation links.

Do not add fake tracking calls or analytics dependencies yet.

---

## SEO / Performance Guardrails

Do not change:

- page metadata
- canonical
- hreflang
- structured data
- sitemap
- article content
- solution content
- Spline
- homepage 3D loading architecture

Do not install packages.

No material homepage bundle regression.

---

## Accessibility

Ensure:

- links remain keyboard accessible
- visible focus remains intact
- descriptive accessible name
- external WhatsApp behavior is not hidden behind JavaScript-only navigation
- no `href="#"`

Prefer normal external links over button click handlers when possible.

---

## Validation

Run:

```bash
npm run lint
npm run build
```

Verify:

1. English primary consultation CTA opens WhatsApp with English prefilled message.
2. Indonesian primary consultation CTA opens WhatsApp with Indonesian prefilled message.
3. Contact/Kontak nav still goes to the existing contact pages.
4. Existing contact form still works.
5. Email fallback still works.
6. No dead contact links.
7. No duplicated/hardcoded WhatsApp number where shared contact config can be used.
8. Primary WhatsApp CTA includes stable conversion identifier if implemented.
9. Homepage bundle remains stable.
10. No SEO metadata/schema/sitemap regressions.

---

## Required Cursor Report

1. Batch completed
2. Files changed
3. Primary CTA locations updated
4. English CTA behavior
5. Indonesian CTA behavior
6. Contact/Kontak secondary path verification
7. Contact form verification
8. WhatsApp URL/helper implementation
9. Conversion-tracking readiness
10. Accessibility checks
11. SEO files confirmed untouched
12. Homepage bundle before/after
13. Lint result
14. Build/typecheck result
15. Remaining blockers before deploy

Then STOP.

Do not deploy.
Wait for explicit approval.
