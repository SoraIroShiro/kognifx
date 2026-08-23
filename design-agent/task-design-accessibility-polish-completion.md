# Kognifx — Accessibility Polish Completion

## Patch ID
`phase-1-accessibility-polish-completion`

## Goal

Finish the same non-color link affordance fix across the remaining mounted bilingual/contact content before production deployment.

The previous patch fixed two homepage English inline links and identified equivalent remaining risks:

- `/id` homepage inline links in `components/landing/indonesian-homepage-content.tsx`
- contact email inline link styling in `components/marketing/marketing-page-shell.tsx` (or the actual mounted component if the implementation differs)

Do not broaden scope beyond these equivalent accessibility issues.

---

## Scope

### 1. Indonesian homepage `/id`

Audit inline links inside body copy that are visually distinguished from surrounding text only by color and hover-only underline.

For each equivalent failing pattern:
- make the link distinguishable in its default state with a persistent underline or equally clear non-color affordance
- keep styling subtle and consistent with the English homepage fix

Do not globally change all links.

### 2. Contact pages

Audit the mounted email/contact text link pattern used by:
- `/contact`
- `/id/kontak`

If the link currently relies only on color in default state, add the same persistent non-color affordance.

Do not restyle CTA buttons or navigation.

### 3. Existing English homepage fix

Preserve the already-approved local fix in:
`components/landing/homepage-seo-sections.tsx`

Do not revert or redesign it.

---

## Guardrails

Do not modify:
- Spline files
- routing
- canonical
- hreflang
- metadata
- structured data
- sitemap
- robots
- contact handoff behavior
- WhatsApp/email destinations
- navigation architecture

Do not add packages.

Do not perform unrelated cleanup.

Do not attempt to solve `<html lang="en">` on Indonesian routes in this patch.

---

## Validation

Run:

```bash
npm run lint
npm run build
```

Report:
1. exact remaining elements found
2. files changed
3. exact styling change
4. whether each fix is local or global
5. homepage bundle size + First Load JS
6. `/id` bundle size + First Load JS
7. `/contact` and `/id/kontak` bundle values
8. lint result
9. build/typecheck result
10. whether any mounted color-only inline links of this same pattern remain
11. any unexpected route/build-count difference compared with the previous build

Then STOP.

Do not deploy.
