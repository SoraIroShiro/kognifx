# Kognifx — Phase 2 Batch A: First 5 Indonesian Commercial Landing Pages

## Patch ID
`phase-2-batch-a-commercial-pages`

## Goal

Implement the first five high-priority Indonesian commercial SEO landing pages identified in the approved keyword research, while preserving Phase 1 performance, bilingual architecture, and anti-cannibalization rules.

This is a production implementation batch.

Create:

1. `/id/solusi/software-custom`
2. `/id/solusi/ai-automation`
3. `/id/solusi/erp-custom`
4. `/id/solusi/iot`
5. `/id/solusi/integrasi-sistem`

Also update `/id/solusi` so these five capabilities link to their real detail pages.

Do not create English mirrors yet.
Do not create articles yet.
Do not create city pages.
Do not deploy.

---

# Core SEO Principle

The goal is NOT to place hundreds of keyword variants into each page.

The approved keyword universe contains ~531+ seed phrases grouped into 118 canonical intents.

Each new page must own one dominant commercial intent and naturally cover closely related variants.

Avoid:
- keyword stuffing
- duplicate pages for phrase variants
- doorway pages
- repeated boilerplate across all five pages
- unnatural exact-match repetition
- `<meta name="keywords">`

---

# Approved Keyword Ownership

## 1. `/id/solusi/software-custom`

### Primary intent
Commercial / transactional

### Primary keyword concept
`jasa pembuatan software custom`

### Supporting concepts
Use naturally where relevant:

- jasa software custom
- software custom Indonesia
- software custom perusahaan
- pengembangan software custom
- jasa pengembangan software
- software development Indonesia
- custom software development Indonesia
- jasa aplikasi custom
- aplikasi custom perusahaan
- sistem custom perusahaan
- jasa pembuatan sistem perusahaan
- aplikasi web custom
- digitalisasi proses bisnis
- software house Indonesia

### Must NOT own
- ERP-specific depth
- AI Automation-specific depth
- IoT-specific depth
- API/System Integration-specific depth

Those belong to sibling pages.

---

## 2. `/id/solusi/ai-automation`

### Primary intent
Commercial / solution-aware

### Primary keyword concept
`jasa AI automation`

### Supporting concepts

- AI automation Indonesia
- AI automation untuk bisnis
- automation bisnis
- otomasi bisnis
- otomatisasi proses bisnis
- business process automation Indonesia
- workflow automation
- jasa workflow automation
- AI agent untuk bisnis
- jasa AI agent
- AI agent Indonesia
- agentic AI Indonesia
- AI assistant bisnis
- intelligent automation
- AI workflow automation
- document intelligence
- decision support
- AI knowledge systems
- n8n automation
- jasa n8n
- n8n untuk bisnis
- n8n integration
- n8n AI agent
- LLM integration
- RAG untuk perusahaan

### Architecture rule
AI Agent, Agentic AI, and n8n remain SUB-INTENTS of this page for now.

Do NOT create:
- `/id/solusi/ai-agent`
- `/id/solusi/n8n`
- `/id/solusi/agentic-ai`

until future GSC/search-intent evidence supports a split.

---

## 3. `/id/solusi/erp-custom`

### Primary intent
Commercial / transactional

### Primary keyword concept
`jasa pembuatan ERP custom`

### Supporting concepts

- jasa ERP Indonesia
- ERP custom Indonesia
- software ERP custom
- sistem ERP custom
- sistem ERP perusahaan
- pengembangan ERP custom
- ERP untuk perusahaan
- enterprise resource planning Indonesia
- enterprise software
- software perusahaan
- sistem operasional perusahaan
- sistem internal perusahaan
- ERP berbasis web
- ERP multi cabang
- ERP terintegrasi
- ERP modular

Relevant module terms may appear naturally:

- Accounting
- Procurement
- Sales
- Purchasing
- Inventory
- Finance
- CRM
- HR
- SCM
- OMS
- PIM
- Workflow

### Cannibalization rule
Do not turn module names into separate pages in this batch.

WMS/Inventory depth belongs to a future sibling page.

---

## 4. `/id/solusi/iot`

### Primary intent
Commercial

### Primary keyword concept
`jasa IoT Indonesia`

### Supporting concepts

- jasa pembuatan sistem IoT
- IoT development Indonesia
- solusi IoT perusahaan
- IoT untuk bisnis
- IoT untuk industri
- Industrial IoT / IIoT
- integrasi IoT
- IoT monitoring system
- IoT dashboard
- remote monitoring IoT
- sensor monitoring
- device integration
- device management
- telemetry system
- connected systems
- IoT automation
- IoT data platform

### Claim guardrail
Do not claim Kognifx manufactures proprietary hardware, sensors, gateways, or devices unless repository/business facts prove it.

It is safe to describe:
- software-side IoT systems
- device/system integration
- telemetry/data ingestion
- dashboards
- monitoring
- automation
- API/backend integration
- custom software around connected devices

---

## 5. `/id/solusi/integrasi-sistem`

### Primary intent
Commercial / technical

### Primary keyword concept
`jasa integrasi sistem`

### Supporting concepts

- system integration Indonesia
- integrasi sistem perusahaan
- integrasi aplikasi perusahaan
- integrasi software
- jasa integrasi API
- API integration Indonesia
- API integration service
- custom API development
- jasa pembuatan API
- middleware development
- data integration
- integrasi data
- system-to-system integration
- system-to-system automation
- legacy system integration
- ERP integration
- CRM integration
- third-party API integration

### Cannibalization rule
This page owns connecting existing systems, APIs, and data flows.

Do not let it become a generic custom software page.

---

# Shared Page Architecture

Each page must be a meaningful, standalone Server Component wherever possible.

Use the existing Kognifx visual system and existing lightweight marketing page patterns.

Each page should contain:

1. Breadcrumb/navigation context
2. One H1
3. Clear introductory positioning
4. Problem/use-case section
5. Capability/solution section
6. How Kognifx approaches the work
7. AI/automation relevance where genuinely applicable
8. Integration/technical considerations where relevant
9. Related solutions
10. CTA to `/id/kontak`

Do not force the exact same H2 wording on all pages.
Each page must feel written specifically for its topic.

Do not use arbitrary word-count targets.
Content should be substantive enough to help a buyer understand:
- what the service solves
- when it is appropriate
- what can be built
- how Kognifx approaches it
- what related capabilities exist
- what to do next

---

# PAGE 1 — Software Custom

## URL
`/id/solusi/software-custom`

## Recommended metadata

### Title
`Jasa Pembuatan Software Custom untuk Bisnis | Kognifx`

### Description
`Kognifx membangun software custom, aplikasi web, sistem internal, portal, dashboard, dan platform bisnis sesuai proses kerja dan kebutuhan operasional perusahaan.`

## H1
`Jasa Pembuatan Software Custom untuk Bisnis`

## Required topic coverage

Use natural sections around concepts such as:

- Software yang mengikuti proses bisnis, bukan memaksa bisnis mengikuti template
- Kapan software custom lebih tepat dibanding software siap pakai
- Jenis sistem yang dapat dibangun
- Web application / internal platform / portal / dashboard / SaaS / operational systems
- Integrasi dengan sistem yang sudah ada
- AI dan automation sebagai capability tambahan jika relevan
- Dari kebutuhan sederhana sampai sistem kompleks
- Proses problem-first Kognifx

## Related solution links

Naturally link to:
- `/id/solusi/ai-automation`
- `/id/solusi/erp-custom`
- `/id/solusi/integrasi-sistem`

CTA:
`Konsultasikan Kebutuhan Software Anda` → `/id/kontak`

---

# PAGE 2 — AI Automation

## URL
`/id/solusi/ai-automation`

## Recommended metadata

### Title
`Jasa AI Automation & AI Agent untuk Bisnis | Kognifx`

### Description
`Kognifx membantu bisnis mengotomatisasi workflow dengan AI, AI agent, n8n, integrasi data, document intelligence, dan sistem automation yang terhubung.`

## H1
`Jasa AI Automation untuk Bisnis`

## Required topic coverage

Natural sections should explain:

- What business automation problems this solves
- Repetitive/manual workflows
- AI Agent and Agentic AI as sub-capabilities
- Workflow automation
- n8n as one orchestration/integration tool, not as Kognifx-owned technology
- AI assistants
- document processing / document intelligence
- knowledge retrieval / RAG where appropriate
- decision support
- system/API integrations
- human review / approval when appropriate
- examples of processes that may be automated

Do not claim:
- fully autonomous guaranteed outcomes
- proprietary foundation models
- replacement of all human decision-making
- guaranteed cost savings percentages

## Related solution links

- `/id/solusi/software-custom`
- `/id/solusi/integrasi-sistem`
- `/id/solusi/erp-custom`

CTA:
`Diskusikan Peluang Automation` → `/id/kontak`

---

# PAGE 3 — ERP Custom

## URL
`/id/solusi/erp-custom`

## Recommended metadata

### Title
`Jasa Pembuatan ERP Custom untuk Perusahaan | Kognifx`

### Description
`Kognifx merancang ERP custom untuk menghubungkan proses operasional, penjualan, procurement, inventory, finance, dan workflow perusahaan dalam satu sistem.`

## H1
`Jasa Pembuatan ERP Custom untuk Perusahaan`

## Required topic coverage

Natural sections:

- Why ERP custom may be needed
- Disconnected spreadsheets / siloed workflows / manual handoffs
- Modular ERP architecture
- Modules that may be included depending on need
- Integration with existing tools/systems
- Multi-branch / role / approval workflow concepts where applicable
- Reporting and dashboards
- AI/automation opportunities within ERP where useful
- Custom ERP vs forcing every workflow into a generic template
- Implementation should start from actual business process mapping

Avoid claims that every listed module is already a packaged Kognifx product.

## Related solution links

- `/id/solusi/software-custom`
- `/id/solusi/ai-automation`
- `/id/solusi/integrasi-sistem`

CTA:
`Konsultasikan Sistem ERP Anda` → `/id/kontak`

---

# PAGE 4 — IoT

## URL
`/id/solusi/iot`

## Recommended metadata

### Title
`Jasa Pengembangan IoT untuk Bisnis & Industri | Kognifx`

### Description
`Kognifx membangun sistem IoT untuk integrasi perangkat, telemetry, monitoring, dashboard, automation, dan koneksi data antara perangkat dengan software bisnis.`

## H1
`Jasa Pengembangan Sistem IoT`

## Required topic coverage

Natural sections:

- Connecting physical devices with software/data workflows
- Device integration
- Telemetry/data ingestion
- Real-time or near-real-time monitoring when architecture supports it
- Dashboards
- Alerts / automation
- API/backend integration
- IoT data platform concepts
- Industrial/business use cases without inventing client history
- Security/reliability considerations at a high level
- Integration with ERP/custom software where useful

Do not fabricate hardware products or completed industry deployments.

## Related solution links

- `/id/solusi/integrasi-sistem`
- `/id/solusi/software-custom`
- `/id/solusi/ai-automation`

CTA:
`Diskusikan Kebutuhan IoT Anda` → `/id/kontak`

---

# PAGE 5 — Integrasi Sistem

## URL
`/id/solusi/integrasi-sistem`

## Recommended metadata

### Title
`Jasa Integrasi Sistem & API untuk Perusahaan | Kognifx`

### Description
`Kognifx membantu menghubungkan aplikasi, API, data, ERP, CRM, dan sistem lama agar informasi serta workflow dapat berjalan lebih terintegrasi dan otomatis.`

## H1
`Jasa Integrasi Sistem & API`

## Required topic coverage

Natural sections:

- Why disconnected systems create operational friction
- Application-to-application integration
- API integration
- custom API / middleware where necessary
- data synchronization
- legacy system integration
- ERP / CRM / third-party integration
- workflow automation across systems
- monitoring/error-handling concepts
- deciding between integration vs rebuilding software

Do not claim integrations with specific vendors unless they are presented as examples/capabilities rather than verified partnerships.

## Related solution links

- `/id/solusi/software-custom`
- `/id/solusi/ai-automation`
- `/id/solusi/erp-custom`
- `/id/solusi/iot`

CTA:
`Konsultasikan Integrasi Sistem Anda` → `/id/kontak`

---

# `/id/solusi` Hub Update

Update the existing Indonesian Solutions hub.

Requirements:

- The five relevant capability entries must now link to the new detail pages.
- Do not turn every listed technology/product into a link.
- Keep the hub useful as a taxonomy/overview page.
- Avoid keyword repetition purely to create anchors.

Use natural anchors, for example:

- `Software Custom`
- `AI & Automation`
- `ERP Custom`
- `IoT`
- `Integrasi Sistem`

Ensure these links are visible and crawlable normal links.

Do not remove the existing CTA to `/id/kontak`.

---

# Breadcrumbs

Each new detail page should expose a simple visible breadcrumb:

`Beranda → Solusi → [Current Page]`

Use real links:

- `Beranda` → `/id`
- `Solusi` → `/id/solusi`

Current page is non-linked text.

Use semantic navigation such as:
`<nav aria-label="Breadcrumb">`

Keep it lightweight.

---

# Internal Linking Rules

## Parent-child

Every new detail page:
- links back to `/id/solusi`
- links to `/id/kontak`

The hub:
- links to all five new children

## Sibling links

Use a small related-solutions section.
Only link where context is relevant.

Avoid repeating five identical links on every page if not useful.

## English routes

Do not create fake English equivalents.

Do not point these Indonesian detail pages to unrelated English pages as hreflang equivalents.

---

# Canonical / International SEO

Each new page must have a SELF canonical:

- `https://www.kognifx.com/id/solusi/software-custom`
- `https://www.kognifx.com/id/solusi/ai-automation`
- `https://www.kognifx.com/id/solusi/erp-custom`
- `https://www.kognifx.com/id/solusi/iot`
- `https://www.kognifx.com/id/solusi/integrasi-sistem`

Because true English equivalents do not exist yet:

- do NOT fabricate `en` hreflang pairs
- do NOT map them to `/solutions`
- do NOT map all children to one English hub
- do NOT create misleading x-default alternates

Use the existing metadata architecture safely.
If the current helper assumes every page has a language pair, extend it carefully so unpaired localized routes can self-canonicalize without fake hreflang.

Do not break Phase 1 route-pair behavior.

Known global `<html lang="en">` limitation remains out of scope.

---

# Structured Data

Use existing JSON-LD utilities if appropriate.

For each new page, a conservative structure may include:

- WebPage
- Service

The Service may reference the existing Organization `@id` as provider.

Safe properties include:
- `@type`
- `@id`
- `name`
- `description`
- `url`
- `provider` reference

Do NOT fabricate:
- rating
- review
- offer price
- price range
- address
- phone
- awards
- customers
- service area claims
- certifications
- package tiers

Do not add FAQPage schema.

If Service structured data would require awkward or duplicate architecture, prefer a simple WebPage rather than schema-spam.

---

# Sitemap

Update `app/sitemap.ts` to include the five new public URLs.

Do not invent:
- priority
- changeFrequency
- fake lastModified

Keep all Phase 1 URLs.

Expected public marketing SEO URLs after this batch:

1. `/`
2. `/about`
3. `/solutions`
4. `/contact`
5. `/id`
6. `/id/tentang`
7. `/id/solusi`
8. `/id/kontak`
9. `/id/solusi/software-custom`
10. `/id/solusi/ai-automation`
11. `/id/solusi/erp-custom`
12. `/id/solusi/iot`
13. `/id/solusi/integrasi-sistem`

---

# Performance Guardrails

Do not modify:

- Spline architecture
- Spline activation
- homepage heavy-loading behavior
- particles
- hero rendering
- existing performance scheduling

Do not install packages.

New solution pages should be predominantly Server Components.

Avoid:
- carousels
- canvas
- 3D
- autoplay video
- heavy client animation
- unnecessary client state
- large images

Reuse existing lightweight layout/design primitives.

The homepage bundle should not materially regress.

---

# Content Quality Guardrails

Do not fabricate:
- client names
- portfolio results
- implementation counts
- team size
- years in business
- awards
- certifications
- partnerships
- ROI percentages
- delivery guarantees
- uptime guarantees
- proprietary products that do not exist

Do not claim Kognifx is:
- “best”
- “#1”
- “leading”
- “most trusted”
unless factual evidence exists.

Use problem-first, useful language.

Do not mechanically repeat:
`Kognifx adalah...`
in every section.

Do not make all five pages copies with nouns swapped.

---

# Keyword Usage Rules

For every page:

- Primary keyword concept should appear naturally in:
  - title
  - H1
  - early explanatory copy
- Related terms may appear naturally across relevant sections.
- Exact-match repetition is not a goal.
- Synonyms and contextual terms are preferred over repetition.
- Do not add visible keyword lists solely for SEO.
- Do not add hidden keyword text.
- Do not add meta keywords.

The page should read naturally to a potential client.

---

# Accessibility

Verify:

- one H1
- semantic H2/H3 hierarchy
- visible focus
- breadcrumbs keyboard accessible
- links distinguishable without relying only on color
- CTA accessible
- no `href="#"`
- no horizontal overflow
- no inaccessible hidden interactive elements

---

# Batch Execution

This is ONE implementation batch.

Cursor may implement all five pages and the related hub/sitemap/metadata/schema wiring before stopping.

If a serious architectural conflict is discovered that would require:
- redesigning Phase 1 metadata architecture
- changing root routing
- changing Spline
- adding a dependency
- fabricating language alternates

STOP and report instead of improvising.

Do not deploy.

---

# Validation

Run:

```bash
npm run lint
npm run build
```

Verify all five new routes build.

Inspect generated HTML/metadata where practical.

For every new page verify:

- HTTP/static route generated
- one H1
- unique title
- unique description
- self canonical
- no fake hreflang
- meaningful SSR content
- parent breadcrumb
- parent hub link
- contact CTA
- related solution links
- appropriate structured data if implemented
- no FAQPage
- no keyword meta
- no noindex
- no dead links

Verify `/id/solusi` links to all five.

Verify sitemap includes all 13 marketing URLs.

Check homepage build size against the current production-oriented baseline.

---

# Required Cursor Report

1. Batch completed
2. Files created
3. Files changed
4. Final route tree
5. `/id/solusi` hub changes
6. Software Custom page structure
7. AI Automation page structure
8. ERP Custom page structure
9. IoT page structure
10. System Integration page structure
11. Primary keyword ownership table
12. Secondary semantic coverage by page
13. Cannibalization checks
14. Internal-link matrix
15. Breadcrumb implementation
16. Metadata table
17. Canonical table
18. hreflang outcome for unpaired pages
19. Structured-data table
20. Sitemap result
21. Server vs Client Component boundaries
22. Bundle sizes for all five new routes
23. Homepage bundle before/after
24. Lint result
25. Build/typecheck result
26. Accessibility observations
27. SEO/performance risks
28. Any unsupported/fabricated claims removed during implementation
29. Remaining blockers before deploy
30. Recommended next SEO batch after these five pages

Then STOP.

Do not deploy.
Wait for explicit approval.
