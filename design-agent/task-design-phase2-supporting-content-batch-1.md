# Kognifx — Phase 2 Supporting Content Batch 1

## Patch ID
`phase-2-supporting-content-batch-1`

## Commit Title
`feat(seo): add first Indonesian insight content cluster`

## Goal

Build the first supporting-content cluster for Kognifx so Google receives deeper topical context around the five highest-priority commercial solution pages already live:

- `/id/solusi/software-custom`
- `/id/solusi/ai-automation`
- `/id/solusi/erp-custom`
- `/id/solusi/integrasi-sistem`
- `/id/solusi/iot`

Create:

1. one Indonesian Insight hub
2. ten Indonesian supporting articles
3. bidirectional internal links between articles and relevant commercial pages
4. article structured data
5. sitemap entries
6. Indonesian navigation link to Insight

This is a production implementation batch.

Do not create English article mirrors yet.
Do not create city pages.
Do not deploy.

---

# Core SEO Principle

The articles must build **topical authority**, not compete with commercial landing pages.

Commercial pages own transactional intent such as:

- jasa pembuatan software custom
- jasa AI automation
- jasa pembuatan ERP custom
- jasa integrasi sistem
- jasa IoT Indonesia

Articles should own informational/comparison intent such as:

- apa itu software custom
- software custom vs software siap pakai
- apa itu AI automation
- AI agent vs automation biasa
- apa itu n8n
- apa itu ERP
- ERP custom vs ERP siap pakai
- apa itu system integration
- manfaat integrasi API
- apa itu IoT untuk bisnis

Each article must naturally link to its commercial parent.

Do not rewrite article H1s into sales-page H1s.

Do not add `<meta name="keywords">`.

---

# New Route Architecture

Create:

`/id/insight`

Articles:

1. `/id/insight/apa-itu-software-custom`
2. `/id/insight/software-custom-vs-software-siap-pakai`
3. `/id/insight/apa-itu-ai-automation`
4. `/id/insight/ai-agent-vs-automation-biasa`
5. `/id/insight/apa-itu-n8n-untuk-bisnis`
6. `/id/insight/apa-itu-erp`
7. `/id/insight/erp-custom-vs-erp-siap-pakai`
8. `/id/insight/apa-itu-system-integration`
9. `/id/insight/manfaat-integrasi-api`
10. `/id/insight/apa-itu-iot-untuk-bisnis`

Expected marketing SEO URLs after this patch:

- existing 18 URLs
- + 1 insight hub
- + 10 articles

Total expected:
**29 marketing SEO URLs**

---

# Insight Hub

## URL
`/id/insight`

## Purpose

Serve as the Indonesian informational-content hub.

It should:

- explain that Kognifx publishes practical material about software, AI, automation, enterprise systems, integration, and IoT
- list all ten articles
- group articles by topic where useful
- use crawlable normal links
- avoid becoming a second `/id/solusi` sales hub

## Metadata

### Title
`Insight Software, AI & Automation untuk Bisnis | Kognifx`

### Description
`Pelajari software custom, AI automation, ERP, integrasi sistem, API, IoT, dan teknologi bisnis melalui insight praktis dari Kognifx.`

## H1
`Insight Software, AI & Teknologi Bisnis`

## Suggested topic groups

- Software Custom
- AI & Automation
- ERP & Enterprise Systems
- Integrasi Sistem & API
- IoT

## CTA

A light commercial CTA is allowed near the bottom:

`Punya kebutuhan yang lebih spesifik? Lihat Solusi Kognifx` → `/id/solusi`

Do not turn every article card into a sales pitch.

---

# Article Architecture

Each article should be a Server Component where possible.

Use a shared lightweight article shell if useful, but article content must remain specific.

Recommended article structure:

1. breadcrumb
2. article label/category
3. H1
4. concise opening answer
5. semantic H2/H3 sections
6. examples/use cases
7. limitations/trade-offs where relevant
8. related article links
9. contextual commercial CTA
10. optional “Baca juga” section

Do not use fake publish history.

If a publication date is needed for schema or UI, use the actual implementation/deploy date only if the repository has a reliable source of truth. Otherwise omit visible date rather than inventing one.

Do not create author biographies or credentials that do not exist.

---

# Breadcrumbs

For every article:

`Beranda → Insight → [Current Article]`

Links:

- Beranda → `/id`
- Insight → `/id/insight`

Use semantic:

`<nav aria-label="Breadcrumb">`

Current article is plain text.

For the hub:

`Beranda → Insight`

---

# ARTICLE 1 — Apa Itu Software Custom?

## URL
`/id/insight/apa-itu-software-custom`

## Search intent
Informational / TOFU-MOFU

## Primary keyword concept
`apa itu software custom`

## Supporting concepts

- software custom adalah
- custom software
- aplikasi custom
- sistem custom perusahaan
- pengembangan software custom
- software sesuai kebutuhan bisnis
- software siap pakai vs custom conceptually

## Metadata

### Title
`Apa Itu Software Custom? Pengertian, Manfaat & Contohnya | Kognifx`

### Description
`Pelajari apa itu software custom, kapan bisnis membutuhkannya, manfaat, contoh penggunaan, serta perbedaannya dengan software siap pakai.`

## H1
`Apa Itu Software Custom?`

## Required sections

- Definisi software custom
- Mengapa bisnis menggunakan software custom
- Contoh software custom
- Kapan software custom cocok digunakan
- Kelebihan dan trade-off
- Tahapan umum pengembangan
- Hubungan software custom dengan integrasi, AI, dan automation
- Kapan software siap pakai justru lebih masuk akal

## Commercial parent link

Contextually link to:
`/id/solusi/software-custom`

Suggested anchor:
`jasa pembuatan software custom`

Do not overuse exact anchor.

---

# ARTICLE 2 — Software Custom vs Software Siap Pakai

## URL
`/id/insight/software-custom-vs-software-siap-pakai`

## Search intent
Comparison / MOFU

## Primary keyword concept
`software custom vs software siap pakai`

## Supporting concepts

- custom software vs off the shelf
- build vs buy software
- software custom atau SaaS
- kapan memilih software custom
- kelebihan software custom
- kekurangan software custom

## Metadata

### Title
`Software Custom vs Software Siap Pakai: Mana yang Tepat? | Kognifx`

### Description
`Bandingkan software custom dan software siap pakai dari sisi kebutuhan, fleksibilitas, integrasi, biaya, waktu, dan kompleksitas operasional.`

## H1
`Software Custom vs Software Siap Pakai`

## Required sections

- Perbedaan dasar
- Kapan software siap pakai unggul
- Kapan custom lebih masuk akal
- Fleksibilitas proses bisnis
- Integrasi
- biaya total vs biaya awal (do not invent prices)
- waktu implementasi
- kontrol dan evolusi sistem
- decision framework sederhana

## Commercial parent

`/id/solusi/software-custom`

---

# ARTICLE 3 — Apa Itu AI Automation?

## URL
`/id/insight/apa-itu-ai-automation`

## Search intent
Informational / MOFU

## Primary keyword concept
`apa itu AI automation`

## Supporting concepts

- AI automation adalah
- AI untuk otomatisasi bisnis
- intelligent automation
- workflow automation
- otomatisasi proses bisnis
- AI workflow
- business process automation

## Metadata

### Title
`Apa Itu AI Automation? Cara Kerja & Contoh untuk Bisnis | Kognifx`

### Description
`Pahami AI automation, cara kerjanya, contoh proses bisnis yang dapat diotomatisasi, serta perbedaannya dengan automation biasa.`

## H1
`Apa Itu AI Automation?`

## Required sections

- Definisi
- Automation biasa vs AI automation
- Komponen umum
- Contoh workflow bisnis
- AI assistant dan AI agent
- Human-in-the-loop
- Integrasi data/API
- Risiko dan batasan
- kapan AI automation masuk akal

## Commercial parent

`/id/solusi/ai-automation`

Suggested anchors should vary:
- `AI automation untuk bisnis`
- `solusi AI & automation`

---

# ARTICLE 4 — AI Agent vs Automation Biasa

## URL
`/id/insight/ai-agent-vs-automation-biasa`

## Search intent
Comparison / MOFU

## Primary keyword concept
`AI agent vs automation`

## Supporting concepts

- AI agent vs chatbot
- AI agent vs workflow automation
- agentic AI
- automation rule based
- AI assistant vs AI agent
- autonomous workflow

## Metadata

### Title
`AI Agent vs Automation Biasa: Apa Bedanya? | Kognifx`

### Description
`Pelajari perbedaan AI agent dan automation biasa, cara kerja, tingkat fleksibilitas, risiko, serta kapan masing-masing pendekatan lebih tepat.`

## H1
`AI Agent vs Automation Biasa`

## Required sections

- Automation rule-based
- Apa yang dimaksud AI agent
- Perbedaan cara mengambil keputusan
- Data/context/tool use
- Deterministic vs probabilistic behavior
- Human approval
- Kapan workflow biasa lebih tepat
- Kapan AI agent memberi nilai
- Hybrid architecture

Do not describe AI agents as fully autonomous magic.

## Commercial parent

`/id/solusi/ai-automation`

---

# ARTICLE 5 — Apa Itu n8n untuk Bisnis?

## URL
`/id/insight/apa-itu-n8n-untuk-bisnis`

## Search intent
Informational / solution-aware

## Primary keyword concept
`apa itu n8n`

## Supporting concepts

- n8n untuk bisnis
- n8n automation Indonesia
- workflow n8n
- n8n integration
- n8n self hosted
- n8n AI agent
- otomasi bisnis dengan n8n
- n8n API integration

## Metadata

### Title
`Apa Itu n8n? Manfaat Workflow Automation untuk Bisnis | Kognifx`

### Description
`Kenali n8n, platform workflow automation untuk menghubungkan aplikasi, API, data, dan AI dalam proses bisnis yang lebih otomatis.`

## H1
`Apa Itu n8n dan Bagaimana Digunakan untuk Bisnis?`

## Required sections

- What n8n is
- Workflow/node concept
- API/app integration
- Self-hosted concept at a high level
- Business automation examples
- AI workflow / agent orchestration
- When n8n is suitable
- When custom software/integration may still be required
- security/credentials considerations at a high level

Important:
n8n is third-party technology.
Do not imply ownership or partnership.

## Commercial parent

`/id/solusi/ai-automation`

Also contextually link:
`/id/solusi/integrasi-sistem`

---

# ARTICLE 6 — Apa Itu ERP?

## URL
`/id/insight/apa-itu-erp`

## Search intent
Informational

## Primary keyword concept
`apa itu ERP`

## Supporting concepts

- ERP adalah
- enterprise resource planning
- fungsi ERP
- manfaat ERP untuk perusahaan
- modul ERP perusahaan
- sistem ERP
- ERP untuk bisnis

## Metadata

### Title
`Apa Itu ERP? Fungsi, Modul & Manfaat untuk Perusahaan | Kognifx`

### Description
`Pelajari pengertian ERP, fungsi, modul umum, manfaat, dan kapan perusahaan membutuhkan sistem ERP untuk menghubungkan proses operasional.`

## H1
`Apa Itu ERP?`

## Required sections

- Pengertian ERP
- Masalah yang diselesaikan ERP
- Modul umum
- Data terpusat
- Workflow antar departemen
- Reporting/dashboard
- ERP vs aplikasi terpisah
- kapan bisnis butuh ERP
- custom vs packaged introduction

## Commercial parent

`/id/solusi/erp-custom`

---

# ARTICLE 7 — ERP Custom vs ERP Siap Pakai

## URL
`/id/insight/erp-custom-vs-erp-siap-pakai`

## Search intent
Comparison / BOFU-supporting

## Primary keyword concept
`ERP custom vs ERP siap pakai`

## Supporting concepts

- ERP custom vs ERP jadi
- ERP custom vs off the shelf
- ERP custom atau SaaS
- kapan butuh ERP custom
- software ERP custom
- ERP sesuai proses bisnis

## Metadata

### Title
`ERP Custom vs ERP Siap Pakai: Mana yang Cocok? | Kognifx`

### Description
`Bandingkan ERP custom dan ERP siap pakai berdasarkan workflow bisnis, integrasi, fleksibilitas, implementasi, dan kebutuhan jangka panjang.`

## H1
`ERP Custom vs ERP Siap Pakai`

## Required sections

- Basic difference
- standardized vs unique processes
- modules/workflow flexibility
- integration
- implementation effort
- ownership/control considerations
- maintenance implications
- when packaged ERP is enough
- when custom is justified
- decision checklist

Do not attack named competitors.

## Commercial parent

`/id/solusi/erp-custom`

---

# ARTICLE 8 — Apa Itu System Integration?

## URL
`/id/insight/apa-itu-system-integration`

## Search intent
Informational / MOFU

## Primary keyword concept
`apa itu system integration`

## Supporting concepts

- system integration adalah
- integrasi sistem perusahaan
- integrasi aplikasi
- data integration
- software integration
- system to system integration
- middleware

## Metadata

### Title
`Apa Itu System Integration? Manfaat Integrasi Sistem Bisnis | Kognifx`

### Description
`Pelajari system integration, cara menghubungkan aplikasi dan data, manfaat integrasi sistem, serta contoh penggunaan API dan middleware.`

## H1
`Apa Itu System Integration?`

## Required sections

- Definition
- why disconnected systems cause problems
- common integration patterns
- API
- middleware
- data sync
- event/webhook concepts at a high level
- legacy integration
- monitoring/error handling
- integration vs rebuild

## Commercial parent

`/id/solusi/integrasi-sistem`

---

# ARTICLE 9 — Manfaat Integrasi API

## URL
`/id/insight/manfaat-integrasi-api`

## Search intent
Informational / problem-aware

## Primary keyword concept
`manfaat integrasi API`

## Supporting concepts

- integrasi API
- API integration
- manfaat API untuk bisnis
- sinkronisasi data
- integrasi aplikasi
- otomatisasi antar sistem
- third party API integration

## Metadata

### Title
`Manfaat Integrasi API untuk Menghubungkan Sistem Bisnis | Kognifx`

### Description
`Pelajari manfaat integrasi API untuk sinkronisasi data, otomatisasi workflow, koneksi aplikasi, dan pengurangan proses manual antar sistem.`

## H1
`Manfaat Integrasi API untuk Bisnis`

## Required sections

- What API integration means
- eliminate duplicate manual entry
- sync data
- automate processes
- connect SaaS/internal systems
- third-party services
- reliability/error handling
- security/auth concepts at a high level
- when custom API/middleware is needed

## Commercial parent

`/id/solusi/integrasi-sistem`

Secondary contextual link:
`/id/solusi/ai-automation`

---

# ARTICLE 10 — Apa Itu IoT untuk Bisnis?

## URL
`/id/insight/apa-itu-iot-untuk-bisnis`

## Search intent
Informational / MOFU

## Primary keyword concept
`apa itu IoT`

## Supporting concepts

- IoT untuk bisnis
- IoT untuk industri
- Internet of Things Indonesia
- IoT monitoring
- telemetry
- connected devices
- sensor monitoring
- IoT dashboard
- industrial IoT

## Metadata

### Title
`Apa Itu IoT? Contoh dan Manfaat untuk Bisnis & Industri | Kognifx`

### Description
`Pelajari apa itu IoT, cara perangkat mengirim data ke sistem, contoh monitoring dan automation, serta manfaat IoT untuk bisnis dan industri.`

## H1
`Apa Itu IoT?`

## Required sections

- Definition
- device/sensor/gateway/network/software concept
- telemetry/data collection
- dashboards
- monitoring/alerts
- automation
- industrial/business examples
- security/reliability considerations
- IoT integration with software/ERP
- when IoT is useful

Do not claim proprietary hardware.

## Commercial parent

`/id/solusi/iot`

Secondary:
`/id/solusi/integrasi-sistem`

---

# Anti-Cannibalization Rules

## Informational vs Commercial

Articles must explain.
Commercial pages must sell/offer the service.

Examples:

`/id/insight/apa-itu-ai-automation`
owns:
`apa itu AI automation`

`/id/solusi/ai-automation`
owns:
`jasa AI automation`

Do not change the article title to:
`Jasa AI Automation...`

Do not rewrite commercial page H1 to:
`Apa Itu AI Automation?`

Apply this distinction across every cluster.

---

# Internal Linking Strategy

## Article → Commercial

Every article must have at least one contextually relevant link to its commercial parent.

Do not place ten repeated exact-match CTAs.

Use varied, natural anchors.

## Commercial → Supporting Article

Update these five commercial pages with a lightweight “Insight terkait” or equivalent section:

- software-custom
- ai-automation
- erp-custom
- integrasi-sistem
- iot

Each commercial page should link to its relevant articles.

Recommended:

### Software Custom
- Apa Itu Software Custom?
- Software Custom vs Software Siap Pakai

### AI Automation
- Apa Itu AI Automation?
- AI Agent vs Automation Biasa
- Apa Itu n8n untuk Bisnis?

### ERP
- Apa Itu ERP?
- ERP Custom vs ERP Siap Pakai

### Integrasi Sistem
- Apa Itu System Integration?
- Manfaat Integrasi API

### IoT
- Apa Itu IoT?

Do not turn this into a large universal article grid.

## Article → Article

Add 2–4 genuinely relevant “Baca juga” links where useful.

Examples:
- AI Automation ↔ AI Agent ↔ n8n
- System Integration ↔ API
- ERP ↔ ERP comparison
- Software Custom ↔ comparison

Avoid excessive cross-linking.

---

# Navigation

Now that `/id/insight` exists:

Update Indonesian primary navigation to include:

`Insight` → `/id/insight`

English navigation remains unchanged because no English Insights page exists yet.

Do not create a dead English Insight link.

Language switching for unpaired articles:
- do not fabricate English equivalents
- preserve existing fallback behavior unless a safe no-equivalent behavior already exists
- do not overhaul the language switcher in this patch

---

# Route Registry

Create or extend a lightweight source of truth such as:

`lib/indonesian-insight-routes.ts`

It should contain route metadata useful for:

- hub article listings
- internal links
- sitemap
- future article audits

Recommended fields:

- path
- title
- short description
- category
- commercialParent
- relatedArticlePaths

Do not put entire long article bodies in the route registry.

Do not create duplicate path lists elsewhere if avoidable.

---

# Metadata & Canonical

Each article and hub must self-canonicalize.

Canonical examples:

`https://www.kognifx.com/id/insight`

`https://www.kognifx.com/id/insight/apa-itu-software-custom`

etc.

No English mirrors exist.

Therefore:
- no fake `en` hreflang
- no fake x-default
- do not map articles to `/solutions` or `/`
- preserve existing paired Phase 1 metadata
- preserve unpaired Indonesian solution metadata behavior

Known root `<html lang="en">` limitation remains out of scope.

---

# Structured Data

## Hub

Use:
- CollectionPage or WebPage

## Articles

Use conservative article schema:

- Article or BlogPosting
- WebPage if already part of the shared graph architecture

Safe properties:

- `@type`
- `@id`
- `url`
- `headline`
- `description`
- `inLanguage: id-ID`
- `publisher` → existing Organization `@id`
- `mainEntityOfPage` where appropriate

Do not fabricate:
- author identity
- datePublished
- dateModified
- image
- review
- rating
- word count
- reading time
- citation count

If valid dates are available from a real repository source, they may be used.
Otherwise omit them.

No FAQPage schema.

---

# Sitemap

Add:

- `/id/insight`
- all 10 article URLs

Use the route registry as source where practical.

Expected marketing SEO URL count:
**29**

Keep all existing URLs.

Do not invent priority/changeFrequency/lastModified.

---

# Content Quality

Articles should be genuinely useful.

Do not create thin 300-word pages just to have URLs.

Do not chase arbitrary word counts either.

Each article should:
- answer the primary question early
- define concepts clearly
- explain trade-offs
- include realistic generic examples
- avoid fake client stories
- avoid unsupported statistics
- avoid invented pricing
- avoid “Kognifx is the best”
- use natural Indonesian

Technical English terminology may remain where industry-standard.

Examples:
- workflow
- API
- middleware
- AI agent
- ERP
- telemetry
- multi-tenant

---

# Trust / Claim Guardrails

Do not fabricate:

- research studies
- statistics
- market-size figures
- customer outcomes
- client names
- implementation counts
- certifications
- partnerships
- vendor endorsements
- author credentials
- years of experience

If a factual claim would require an external source and the repository has no source, keep the explanation general and conceptual.

Do not add external citations just for decoration.

A later editorial/research patch may add sourced references.

---

# Performance Guardrails

Do not touch:

- Spline
- Particles
- homepage heavy-load architecture
- 3D activation

Do not install packages.

Insight pages should be predominantly Server Components.

Avoid:
- client article rendering
- carousels
- large images
- video
- syntax-highlighting packages
- table-of-contents JS unless truly necessary
- animation libraries

Use semantic HTML and existing CSS/design system.

Homepage bundle must not materially regress.

---

# Accessibility

Verify:

- one H1 per page
- logical H2/H3 structure
- semantic article element where appropriate
- breadcrumb keyboard accessible
- visible focus
- inline links use non-color affordance
- no `href="#"`
- nav Insight link accessible
- no horizontal overflow
- lists/tables semantic if used

---

# Validation

Run:

```bash
npm run lint
npm run build
```

Verify:

- `/id/insight`
- all 10 article routes
- five linked commercial parents
- `/id/solusi`
- `/`
- `/id`

For the hub and every article verify:

- route builds
- meaningful SSR HTML
- unique title
- unique description
- one H1
- self canonical
- no fake hreflang
- correct structured data
- no FAQPage
- no meta keywords
- no noindex
- no dead links

Verify:

- Indonesian navigation contains Insight
- English navigation does not link to nonexistent English insights
- each article links to commercial parent
- each of five commercial parents links back to relevant article(s)
- sitemap contains 29 marketing SEO URLs
- homepage bundle unchanged or explain variance

---

# Recommended Implementation Batch

Execute this as ONE batch.

Cursor may create:
- hub
- ten article pages
- shared article components
- route registry
- commercial-page related-insight links
- navigation link
- metadata/schema/sitemap wiring

If implementation reveals a major architecture issue requiring:
- root routing changes
- Spline changes
- dependency installation
- fake language alternates
- CMS introduction

STOP and report rather than improvising.

Do not deploy.

---

# Required Cursor Report

1. Batch completed
2. Files created
3. Files changed
4. Final route tree
5. Insight route registry design
6. `/id/insight` hub structure
7. Article 1 structure
8. Article 2 structure
9. Article 3 structure
10. Article 4 structure
11. Article 5 structure
12. Article 6 structure
13. Article 7 structure
14. Article 8 structure
15. Article 9 structure
16. Article 10 structure
17. Article keyword ownership table
18. Informational vs commercial cannibalization audit
19. Article → commercial internal-link matrix
20. Commercial → article internal-link matrix
21. Article → article linking strategy
22. Navigation change
23. Metadata table
24. Canonical table
25. hreflang outcome
26. Structured-data table
27. Sitemap result and final URL count
28. Server vs Client boundaries
29. Bundle sizes for hub + ten articles
30. Homepage bundle before/after
31. Lint result
32. Build/typecheck result
33. Accessibility observations
34. Unsupported claims/statistics removed
35. SEO/performance risks
36. Remaining blockers before deploy
37. Recommended Supporting Content Batch 2

Then STOP.

Do not deploy.
Wait for explicit approval.
