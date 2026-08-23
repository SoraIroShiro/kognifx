# Kognifx — Pre-Deploy Contact Wiring Micro-Patch

## Patch ID
`phase-1-contact-wiring`

## Goal

Make the existing Contact pages production-usable without adding a backend.

Use the real temporary contact channels provided by the owner:

- Email: `panparci.id@gmail.com`
- WhatsApp display number: `+62 859-2735-1745`
- WhatsApp normalized number for links: `6285927351745`

This patch must keep the current Phase 1 SEO, bilingual routing, Spline architecture, and performance behavior intact.

---

## Execution Contract

This patch is intentionally small and should be executed as **one batch**.

Cursor must:

1. Read this file completely before editing.
2. Implement only the scope below.
3. Run lint and build.
4. Report results.
5. STOP.
6. Do not deploy.

Do not start unrelated cleanup or refactors.

---

# BATCH 1 — Contact Conversion Wiring

## 1. Replace disabled contact submission with real WhatsApp handoff

Current contact form exists on:

- `/contact`
- `/id/kontak`

Current shared form component:

- `components/contact/contact-inquiry-form.tsx`

Keep the existing form fields:

- Name / Nama
- Company / Organization / Perusahaan / Organisasi
- Email
- WhatsApp
- Problem / Need
- Project type

Do not introduce a backend.

After valid user input, the primary submit action should create a WhatsApp message and open:

`https://wa.me/6285927351745`

with URL-encoded text generated from the submitted fields.

### English message format

```text
Hello Kognifx,

Name: {name}
Company / Organization: {company}
Email: {email}
WhatsApp: {whatsapp}
Project Type: {projectType}

What I am trying to solve:
{problem}

I would like to discuss this requirement with Kognifx.
```

### Indonesian message format

```text
Halo Kognifx,

Nama: {name}
Perusahaan / Organisasi: {company}
Email: {email}
WhatsApp: {whatsapp}
Jenis Proyek: {projectType}

Masalah atau kebutuhan yang ingin saya selesaikan:
{problem}

Saya ingin berkonsultasi mengenai kebutuhan ini dengan Kognifx.
```

Requirements:

- Use `encodeURIComponent()` or equivalent safe URL encoding.
- Do not manually concatenate an unsafe raw query string.
- Do not send any request to Kognifx servers.
- Do not store form data.
- Do not log personal form values to console.
- Do not show a fake "message sent" state.
- The UI may say that the user will continue the conversation in WhatsApp.
- Opening WhatsApp is the actual submission action.
- Use a normal user-triggered navigation/open so popup blockers do not prevent it.
- If `window.open()` is used, it must happen directly from the user submission flow and use safe target features.
- Prefer a simple redirect/new tab behavior over additional dependencies.

---

## 2. Form validation

Keep validation lightweight.

Required fields:

- Name
- Email
- Problem / Need

Optional:

- Company / Organization
- WhatsApp
- Project Type

Email must use appropriate browser/client validation.

Do not add a validation library.

If the current implementation already has sensible validation, reuse it.

The primary CTA must no longer be disabled merely because there is no backend.

### English submit label

`Continue via WhatsApp`

### Indonesian submit label

`Lanjutkan via WhatsApp`

Provide small explanatory copy near the action:

English:
`Your inquiry will be prepared as a WhatsApp message. You can review it before sending.`

Indonesian:
`Data konsultasi akan disiapkan sebagai pesan WhatsApp. Anda dapat memeriksanya sebelum mengirim.`

Do not imply the message has already been delivered.

---

## 3. Add direct email fallback

Add a secondary contact action on both contact pages using:

`mailto:panparci.id@gmail.com`

English label:
`Email Kognifx`

Indonesian label:
`Email Kognifx`

It must be a real accessible anchor.

Do not implement email sending inside the application.

Do not expose a fake contact form email workflow.

---

## 4. Contact page copy

Remove the current "online submission is not available yet" notice because a real contact handoff now exists.

Replace it with concise copy explaining the handoff.

Do not add exaggerated claims.

Do not change page H1s or existing approved metadata unless required to remove outdated "disabled submission" wording.

---

## 5. Footer contact cleanup

Audit the mounted `SiteFooter`.

If there is an existing customer-service/contact link with `href="#"`, replace it with the correct localized contact route if localization is already available there, or `/contact` if the footer does not currently know locale.

Do not invent social profile URLs.

If mounted social icons are still `href="#"` placeholders, do one of these safe options:

- hide/remove those placeholder links until real URLs exist, OR
- render them as non-interactive decorative items only if there is a strong visual reason to keep them.

Do **not** leave clickable `href="#"` social links in production.

Do not redesign the footer.

---

## 6. Structured data

Do **not** add temporary contact details to Organization JSON-LD in this patch.

Reason:
the owner stated these contact channels are real but may be cleaned up/replaced later.

Keep current structured data unchanged unless compilation requires otherwise.

A later business-identity patch can promote permanent contact data into Organization schema.

---

## 7. SEO guardrails

Do not modify:

- canonical URLs
- hreflang
- x-default
- sitemap
- robots
- route structure
- page titles
- page descriptions
- current structured-data types
- language route map

unless strictly required by compilation.

---

## 8. Performance guardrails

Do not modify:

- `components/landing/spline-frame.tsx`
- `components/landing/spline-viewer.tsx`
- `lib/spline-activation.tsx`
- `lib/spline-scheduling.ts`

Do not:

- add npm packages
- add analytics
- add external SDKs
- add WhatsApp SDKs
- add form libraries
- add CAPTCHA in this patch
- add backend/API routes
- add Server Actions
- add database code

The contact form may remain a small Client Component.

Homepage bundle should not materially change from:

- `/` page size: ~14.7 kB
- `/` First Load JS: ~115 kB

---

## 9. Accessibility requirements

Verify:

- every form control has a visible or accessible label
- required fields are communicated
- validation errors are understandable
- submit button works with keyboard
- email fallback link is keyboard focusable
- visible focus states remain
- WhatsApp action has an accessible name
- no interactive element uses `href="#"`
- no fake disabled action remains
- no focus trap
- no inaccessible hidden interactive elements

---

## 10. Security / privacy requirements

The contact flow must be client-side handoff only.

Do not:

- persist inquiry content
- put form values into application logs
- send form values to analytics
- send them to a third-party endpoint other than WhatsApp by explicit user action
- expose secrets
- create environment variables for these public contact values unless the existing architecture already has a public configuration pattern

The WhatsApp number and public email are intentionally public contact details.

---

# Validation

Run:

```bash
npm run lint
npm run build
```

Verify:

- `/contact`
- `/id/kontak`
- `/`
- `/id`

Check both contact flows manually at source/code level:

### English

Valid form
→ Continue via WhatsApp
→ generated destination starts with:
`https://wa.me/6285927351745?text=`
→ message content is correctly URL encoded.

### Indonesian

Valid form
→ Lanjutkan via WhatsApp
→ same normalized destination
→ Indonesian message template.

Also verify:

- `mailto:panparci.id@gmail.com` exists on both contact pages
- no fake success toast
- no disabled submission notice
- no contact API route added
- no new dependency
- no `href="#"` in mounted contact/footer UI
- homepage Spline behavior untouched
- homepage bundle does not materially regress

---

# Required Cursor Report

Report:

1. Batch completed
2. Files changed
3. Files created
4. Contact form behavior before vs after
5. English WhatsApp template
6. Indonesian WhatsApp template
7. Validation behavior
8. Email fallback implementation
9. Footer placeholder cleanup
10. Any remaining `href="#"` and whether mounted/unmounted
11. Server vs Client boundaries
12. SEO files touched
13. Spline files touched
14. Bundle sizes for `/`, `/contact`, `/id/kontak`
15. Homepage bundle comparison
16. Lint result
17. Build/typecheck result
18. Accessibility observations
19. Security/privacy observations
20. Remaining blockers before production

Then STOP.

Do not deploy.
