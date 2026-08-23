# Kognifx — Post-Deploy Accessibility Polish

## Patch ID
`phase-1-accessibility-polish`

## Goal

Fix the single production Lighthouse accessibility issue:

> Links rely on color to be distinguishable.

Current verified production Lighthouse:

- Performance: 97
- Accessibility: 96
- Best Practices: 100
- SEO: 100
- FCP: 0.5 s
- LCP: 0.6 s
- TBT: 0 ms
- CLS: 0
- Speed Index: 1.7 s

This is a micro-patch. Do not change layout, SEO architecture, Spline behavior, or page structure.

---

## Scope

Audit the exact failing links reported by Lighthouse on the homepage.

The failing link classes appear similar to:

`a.text-foreground.underline-offset-4.hover:underline...`

inside muted paragraph text.

### Required fix

Links embedded in body copy must have a non-color visual affordance in their default state.

Preferred solution:

- persistent underline, or
- another equally clear non-color cue

Do not rely only on:

- text color
- hover underline
- focus-only styling

Keep the existing visual language subtle.

Do not globally underline navigation, buttons, cards, or CTA buttons unless they are part of the actual failing audit.

---

## Guardrails

Do not modify:

- Spline files
- canonical
- hreflang
- metadata
- structured data
- sitemap
- robots
- route structure
- contact behavior
- language routing

Do not install packages.

Do not redesign sections.

Homepage performance must not materially regress from:

- 14.7 kB page size
- 115 kB First Load JS

---

## Validation

Run:

```bash
npm run lint
npm run build
```

Then report:

1. exact failing elements found
2. files changed
3. exact accessibility fix
4. whether styling scope is local or global
5. homepage bundle before/after
6. lint result
7. build/typecheck result
8. any remaining accessibility risks

STOP after this patch.

Do not deploy.
