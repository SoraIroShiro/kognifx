# Kognifx — Phase 2 Supporting Content Batch 2

## Patch ID
`phase-2-supporting-content-batch-2`

## Commit Title
`feat(seo): add second Indonesian insight content cluster`

## Goal

Extend the Indonesian Insight architecture with 10 supporting articles for the second commercial solution cluster:

- `/id/solusi/crm`
- `/id/solusi/hris`
- `/id/solusi/wms-inventory`
- `/id/solusi/ecommerce-marketplace`
- `/id/solusi/saas-platform`

This batch must deepen topical authority without competing with the commercial pages.

Create 10 articles, update `/id/insight`, update related-insight sections on the 5 commercial parent pages, extend the existing insight route registry, and update sitemap through the registry.

Do not create English mirrors.
Do not create city pages.
Do not create new commercial landing pages.
Do not deploy.

---

# Core SEO Principle

Commercial pages own transactional intent.

Examples:

- `/id/solusi/crm` → `jasa pembuatan CRM`
- `/id/solusi/hris` → `jasa pembuatan HRIS`
- `/id/solusi/wms-inventory` → `jasa pembuatan WMS`
- `/id/solusi/ecommerce-marketplace` → `jasa pembuatan e-commerce`
- `/id/solusi/saas-platform` → `jasa pembuatan SaaS`

Articles own informational, comparison, and problem-aware intent.

Do not let article H1s become sales-page H1s.

Do not add `<meta name="keywords">`.
Do not insert hidden keyword blocks.
Do not create near-duplicate articles for phrasing variants.

---

# Route Architecture

Add these 10 article routes:

1. `/id/insight/apa-itu-crm`
2. `/id/insight/crm-custom-vs-crm-siap-pakai`
3. `/id/insight/apa-itu-hris-dan-hrms`
4. `/id/insight/hris-vs-hrms`
5. `/id/insight/apa-itu-wms`
6. `/id/insight/wms-vs-inventory-management-system`
7. `/id/insight/ecommerce-custom-vs-platform-siap-pakai`
8. `/id/insight/apa-itu-marketplace-multi-vendor`
9. `/id/insight/apa-itu-saas`
10. `/id/insight/saas-custom-vs-platform-siap-pakai`

Current marketing SEO URL count: **29**

Expected after this batch:
**39 marketing SEO URLs**

---

# Existing Architecture to Reuse

Reuse and extend:

- `lib/indonesian-insight-routes.ts`
- `components/marketing/insight-breadcrumb.tsx`
- `components/marketing/insight-article-page.tsx`
- `/id/insight`
- existing Article/WebPage structured-data utilities
- existing unpaired Indonesian metadata helper
- existing sitemap registry flow

Do not create a second insight registry.

Do not duplicate route metadata maps unnecessarily.

---

# ARTICLE 1 — Apa Itu CRM?

## URL
`/id/insight/apa-itu-crm`

## Search intent
Informational / MOFU

## Primary keyword concept
`apa itu CRM`

## Supporting concepts

- CRM adalah
- fungsi CRM
- customer relationship management
- CRM untuk bisnis
- CRM untuk perusahaan
- lead management
- sales pipeline
- customer data
- follow-up pelanggan
- CRM automation

## Metadata

### Title
`Apa Itu CRM? Fungsi, Manfaat & Contohnya untuk Bisnis | Kognifx`

### Description
`Pelajari apa itu CRM, fungsi utamanya, manfaat untuk sales dan customer management, serta kapan bisnis membutuhkan sistem CRM.`

## H1
`Apa Itu CRM?`

## Required sections

- Pengertian CRM
- Masalah bisnis yang biasa diselesaikan CRM
- Leads dan sales pipeline
- Data pelanggan dan riwayat interaksi
- Follow-up dan aktivitas sales
- Dashboard dan reporting
- CRM automation
- Integrasi CRM dengan sistem lain
- Kapan bisnis mulai membutuhkan CRM

## Commercial parent
`/id/solusi/crm`

---

# ARTICLE 2 — CRM Custom vs CRM Siap Pakai

## URL
`/id/insight/crm-custom-vs-crm-siap-pakai`

## Search intent
Comparison / MOFU-BOFU supporting

## Primary keyword concept
`CRM custom vs CRM siap pakai`

## Supporting concepts

- CRM custom vs CRM SaaS
- CRM custom atau siap pakai
- software CRM custom
- sistem CRM perusahaan
- kapan butuh CRM custom
- CRM sesuai workflow bisnis
- build vs buy CRM

## Metadata

### Title
`CRM Custom vs CRM Siap Pakai: Mana yang Lebih Cocok? | Kognifx`

### Description
`Bandingkan CRM custom dan CRM siap pakai dari sisi workflow sales, fleksibilitas, integrasi, implementasi, dan kebutuhan bisnis.`

## H1
`CRM Custom vs CRM Siap Pakai`

## Required sections

- Perbedaan dasar
- Kapan CRM siap pakai cukup
- Kapan custom menjadi relevan
- Fleksibilitas pipeline dan workflow
- Integrasi
- Data dan kontrol
- Implementasi dan maintenance
- Faktor keputusan sederhana

Do not attack named CRM vendors.

## Commercial parent
`/id/solusi/crm`

---

# ARTICLE 3 — Apa Itu HRIS dan HRMS?

## URL
`/id/insight/apa-itu-hris-dan-hrms`

## Search intent
Informational

## Primary keyword concept
`apa itu HRIS`

## Supporting concepts

- HRIS adalah
- HRMS adalah
- sistem HR perusahaan
- software HR
- employee management system
- absensi
- payroll
- leave management
- employee records
- performance management
- HR automation

## Metadata

### Title
`Apa Itu HRIS dan HRMS? Fungsi untuk Pengelolaan HR | Kognifx`

### Description
`Pelajari pengertian HRIS dan HRMS, fungsi utama, modul umum, serta bagaimana sistem HR membantu pengelolaan data dan workflow karyawan.`

## H1
`Apa Itu HRIS dan HRMS?`

## Required sections

- Definisi HRIS
- Definisi HRMS
- Data karyawan
- Absensi dan cuti
- Payroll sebagai salah satu modul
- Approval workflow
- Performance management
- Reporting HR
- Integrasi
- Kapan perusahaan membutuhkan sistem HR terpusat

Do not claim compliance guarantees.

## Commercial parent
`/id/solusi/hris`

---

# ARTICLE 4 — HRIS vs HRMS

## URL
`/id/insight/hris-vs-hrms`

## Search intent
Comparison

## Primary keyword concept
`HRIS vs HRMS`

## Supporting concepts

- perbedaan HRIS dan HRMS
- HRIS atau HRMS
- HR system
- HR software
- HCM concept at a high level
- employee lifecycle software

## Metadata

### Title
`HRIS vs HRMS: Apa Perbedaannya dan Mana yang Dibutuhkan? | Kognifx`

### Description
`Pahami perbedaan HRIS dan HRMS, cakupan fungsi, jenis workflow, serta cara menentukan sistem HR yang sesuai kebutuhan perusahaan.`

## H1
`HRIS vs HRMS`

## Required sections

- Terminology overlap
- Fokus HRIS
- Fokus HRMS
- Modul yang sering tumpang tindih
- Payroll/attendance/performance examples
- Mengapa nama produk bukan satu-satunya faktor
- Mulai dari kebutuhan workflow
- Kapan custom system relevan

Do not present terminology differences as universal law; explain that vendor usage varies.

## Commercial parent
`/id/solusi/hris`

---

# ARTICLE 5 — Apa Itu WMS?

## URL
`/id/insight/apa-itu-wms`

## Search intent
Informational / MOFU

## Primary keyword concept
`apa itu WMS`

## Supporting concepts

- WMS adalah
- warehouse management system
- fungsi WMS
- sistem gudang
- software gudang
- stok gudang
- stock opname
- picking
- receiving
- dispatch
- multi warehouse

## Metadata

### Title
`Apa Itu WMS? Fungsi Warehouse Management System | Kognifx`

### Description
`Pelajari apa itu WMS, fungsi utama warehouse management system, alur stok dan gudang, serta kapan bisnis membutuhkan sistem WMS.`

## H1
`Apa Itu WMS?`

## Required sections

- Definisi WMS
- Receiving
- Penyimpanan dan lokasi stok
- Pergerakan barang
- Picking/packing/dispatch concepts
- Stock opname
- Multi-warehouse
- Barcode/QR concept
- Dashboard dan integrasi
- Kapan WMS dibutuhkan

Do not claim proprietary scanner/barcode hardware.

## Commercial parent
`/id/solusi/wms-inventory`

---

# ARTICLE 6 — WMS vs Inventory Management System

## URL
`/id/insight/wms-vs-inventory-management-system`

## Search intent
Comparison / MOFU

## Primary keyword concept
`WMS vs inventory management system`

## Supporting concepts

- WMS vs inventory
- perbedaan WMS dan inventory system
- software gudang vs inventory
- warehouse system
- stock management system
- kapan butuh WMS

## Metadata

### Title
`WMS vs Inventory Management System: Apa Bedanya? | Kognifx`

### Description
`Bandingkan WMS dan inventory management system dari sisi stok, lokasi gudang, pergerakan barang, workflow, dan tingkat kompleksitas operasional.`

## H1
`WMS vs Inventory Management System`

## Required sections

- Fokus inventory management
- Fokus WMS
- Perbedaan detail lokasi/workflow gudang
- Stock quantity vs operational movement
- Multi-warehouse
- Barcode/QR
- Integrasi ERP/POS/procurement
- Kapan inventory sederhana cukup
- Kapan WMS lebih tepat

## Commercial parent
`/id/solusi/wms-inventory`

Secondary contextual link:
`/id/solusi/erp-custom`

---

# ARTICLE 7 — E-Commerce Custom vs Platform Siap Pakai

## URL
`/id/insight/ecommerce-custom-vs-platform-siap-pakai`

## Search intent
Comparison / MOFU-BOFU supporting

## Primary keyword concept
`e-commerce custom vs platform siap pakai`

## Supporting concepts

- ecommerce custom vs template
- toko online custom
- ecommerce platform
- custom ecommerce
- e-commerce B2B
- e-commerce B2C
- ecommerce integration
- build vs buy ecommerce

## Metadata

### Title
`E-Commerce Custom vs Platform Siap Pakai: Pilih Mana? | Kognifx`

### Description
`Bandingkan e-commerce custom dan platform siap pakai berdasarkan workflow, integrasi, B2B/B2C, fleksibilitas, dan kebutuhan bisnis.`

## H1
`E-Commerce Custom vs Platform Siap Pakai`

## Required sections

- Perbedaan dasar
- Kapan platform siap pakai cukup
- Kapan custom diperlukan
- B2B/B2C workflow
- Catalog/order workflow
- Integrasi inventory/ERP
- Payment/shipping integration as examples only
- Custom roles/processes
- Maintenance and evolution
- Decision framework

Do not claim payment-provider partnerships.

## Commercial parent
`/id/solusi/ecommerce-marketplace`

---

# ARTICLE 8 — Apa Itu Marketplace Multi-Vendor?

## URL
`/id/insight/apa-itu-marketplace-multi-vendor`

## Search intent
Informational / MOFU

## Primary keyword concept
`apa itu marketplace multi vendor`

## Supporting concepts

- multi vendor marketplace
- marketplace adalah
- platform marketplace
- seller marketplace
- vendor management
- marketplace custom
- order management
- commission workflow concept
- B2B marketplace
- B2C marketplace

## Metadata

### Title
`Apa Itu Marketplace Multi-Vendor? Cara Kerja & Komponennya | Kognifx`

### Description
`Pelajari cara kerja marketplace multi-vendor, peran seller dan admin, katalog, order, workflow transaksi, serta kebutuhan integrasi platform.`

## H1
`Apa Itu Marketplace Multi-Vendor?`

## Required sections

- Definisi
- Perbedaan toko online vs marketplace
- Peran seller/vendor/admin/customer
- Product/catalog management
- Order workflow
- Commission/settlement as a conceptual workflow only
- Moderation/approval
- Integrasi inventory/payment/shipping as examples
- Kapan custom marketplace diperlukan

Do not invent payment/settlement certifications.

## Commercial parent
`/id/solusi/ecommerce-marketplace`

---

# ARTICLE 9 — Apa Itu SaaS?

## URL
`/id/insight/apa-itu-saas`

## Search intent
Informational

## Primary keyword concept
`apa itu SaaS`

## Supporting concepts

- SaaS adalah
- software as a service
- SaaS untuk bisnis
- SaaS platform
- subscription software
- multi tenant SaaS
- cloud software concept
- SaaS business model

## Metadata

### Title
`Apa Itu SaaS? Cara Kerja Software as a Service | Kognifx`

### Description
`Pelajari apa itu SaaS, cara kerja software as a service, konsep subscription dan multi-tenant, serta kapan model SaaS cocok digunakan.`

## H1
`Apa Itu SaaS?`

## Required sections

- Definisi SaaS
- Bagaimana SaaS digunakan
- Subscription model concept
- Multi-tenant vs single-tenant concept
- Roles and accounts
- Admin/control panel
- Integrations/API
- Benefits and trade-offs
- When SaaS model is appropriate
- SaaS as product vs internal software

Do not make cloud/vendor guarantees.

## Commercial parent
`/id/solusi/saas-platform`

---

# ARTICLE 10 — SaaS Custom vs Platform Siap Pakai

## URL
`/id/insight/saas-custom-vs-platform-siap-pakai`

## Search intent
Comparison / MOFU-BOFU supporting

## Primary keyword concept
`SaaS custom vs platform siap pakai`

## Supporting concepts

- custom SaaS development
- SaaS custom
- white label SaaS
- multi tenant custom
- SaaS builder concept
- build vs buy SaaS platform
- custom platform vs ready made

## Metadata

### Title
`SaaS Custom vs Platform Siap Pakai: Kapan Perlu Custom? | Kognifx`

### Description
`Bandingkan SaaS custom dan platform siap pakai berdasarkan model bisnis, multi-tenant, integrasi, workflow, kontrol produk, dan kebutuhan jangka panjang.`

## H1
`SaaS Custom vs Platform Siap Pakai`

## Required sections

- Difference between building a SaaS product and using ready-made software
- Business model fit
- Multi-tenant requirements
- Roles/permissions
- Subscription workflow
- Integration
- Product control
- Maintenance/evolution
- When a ready platform is enough
- When custom development is justified

Do not promise scale/uptime/revenue outcomes.

## Commercial parent
`/id/solusi/saas-platform`

---

# Insight Hub Update

Update `/id/insight`.

Keep the existing first 10 articles.

Add the 10 new articles under logical categories.

Recommended expanded categories:

- Software Custom
- AI & Automation
- ERP & Enterprise Systems
- CRM & Customer Systems
- HR Systems
- Warehouse & Inventory
- Commerce & Marketplace
- SaaS & Platforms
- Integrasi Sistem & API
- IoT

Do not make the hub excessively repetitive.

Use crawlable normal links.

---

# Commercial → Article Linking

Update these five commercial pages with lightweight `Insight terkait` links.

## CRM
- Apa Itu CRM?
- CRM Custom vs CRM Siap Pakai

## HRIS
- Apa Itu HRIS dan HRMS?
- HRIS vs HRMS

## WMS / Inventory
- Apa Itu WMS?
- WMS vs Inventory Management System

## E-Commerce / Marketplace
- E-Commerce Custom vs Platform Siap Pakai
- Apa Itu Marketplace Multi-Vendor?

## SaaS
- Apa Itu SaaS?
- SaaS Custom vs Platform Siap Pakai

Do not change their commercial H1s or primary keyword ownership.

---

# Article → Commercial Linking

Every article must link naturally to its owning commercial parent.

Use varied anchors.

Avoid repeating the exact commercial keyword multiple times.

---

# Article → Article Linking

Use 2–3 related links per article.

Natural pairings:

- CRM definition ↔ CRM comparison
- HRIS/HRMS definition ↔ HRIS vs HRMS
- WMS definition ↔ WMS vs Inventory
- E-Commerce comparison ↔ Marketplace Multi-Vendor
- SaaS definition ↔ SaaS comparison

Cross-cluster links are allowed only when useful.

Examples:
- CRM → AI Automation
- WMS → ERP
- Ecommerce → WMS
- SaaS → Software Custom / Integration

Avoid full-mesh linking.

---

# Route Registry

Extend `lib/indonesian-insight-routes.ts`.

Do not create another registry.

Keep:

- path
- title
- h1
- description
- shortDescription
- category
- commercialParent
- relatedArticlePaths

If category type currently uses a fixed union, extend it cleanly.

Do not store full article body content in the registry.

---

# Metadata & Canonical

Every new article must use existing unpaired Indonesian metadata behavior.

Self canonical only.

No fake English alternates.
No fake x-default.

Preserve existing Phase 1 paired hreflang architecture.

Known root `<html lang="en">` limitation remains out of scope.

---

# Structured Data

Reuse existing Article/WebPage graph implementation.

Each new article:

- WebPage
- Article

Safe fields:
- url
- headline
- description
- inLanguage
- publisher Organization reference
- mainEntityOfPage

Do not fabricate:
- author
- publication date
- modification date
- image
- reviews
- statistics
- reading time

No FAQPage.

---

# Sitemap

The existing sitemap uses the insight registry.

Extend the registry so all new article paths are included automatically.

Expected marketing SEO URL count:

Current: 29
New articles: +10

Final:
**39 marketing SEO URLs**

Do not invent priority/changeFrequency/lastModified.

---

# Navigation

Indonesian `Insight` navigation already exists.

Do not add another nav item.
Do not add English Insight yet.

Language switcher behavior for unpaired articles remains unchanged in this batch.

---

# Content Quality Guardrails

Do not create thin articles.

Do not use arbitrary word-count stuffing.

Each article should:

- answer the query early
- explain terminology clearly
- discuss trade-offs
- include practical generic examples
- avoid fake statistics
- avoid invented pricing
- avoid fake client stories
- avoid unsupported vendor claims
- use natural Indonesian
- use English technical terms where standard

Do not repeat promotional Kognifx copy in every section.

A commercial CTA near the end is enough.

---

# Trust Guardrails

Do not fabricate:

- customer examples
- certifications
- awards
- studies
- survey data
- percentages
- ROI
- legal compliance claims
- payment/security certifications
- partner relationships
- author credentials

Keep factual explanations conceptual when no cited source exists.

---

# Performance Guardrails

Do not touch:

- Spline
- Particles
- homepage heavy-load architecture
- user-activated 3D

Do not install packages.

Use Server Components.

Avoid:
- client-rendered article bodies
- animation libraries
- large images
- video
- carousels
- syntax highlighting packages
- heavy TOC JS

Homepage bundle must not materially regress.

---

# Accessibility

Verify:

- one H1 per article
- semantic `<article>`
- sensible H2/H3 hierarchy
- breadcrumb nav
- inline links visibly distinguishable without color alone
- focus states
- no `href="#"`
- no horizontal overflow
- semantic lists/tables if used

---

# Validation

Run:

```bash
npm run lint
npm run build
```

Verify:

- all 10 new article routes
- `/id/insight`
- the five commercial parent pages
- `/`
- `/id`
- sitemap

For every article verify:

- unique title
- unique description
- one H1
- self canonical
- no fake hreflang
- meaningful SSR content
- commercial parent link
- related article links
- Article structured data
- no FAQPage
- no meta keywords
- no noindex
- no dead links

Verify:

- hub now lists 20 articles
- five commercial parents have related-insight sections
- sitemap contains 39 marketing SEO URLs
- homepage bundle remains stable

---

# Required Cursor Report

1. Batch completed
2. Files created
3. Files changed
4. Final route tree
5. Insight registry changes
6. Insight hub changes
7. CRM article 1 structure
8. CRM article 2 structure
9. HRIS article 1 structure
10. HRIS article 2 structure
11. WMS article 1 structure
12. WMS article 2 structure
13. Ecommerce article 1 structure
14. Marketplace article structure
15. SaaS article 1 structure
16. SaaS article 2 structure
17. Keyword ownership table
18. Informational vs commercial cannibalization audit
19. Article → commercial link matrix
20. Commercial → article link matrix
21. Article → article link strategy
22. Metadata table
23. Canonical table
24. hreflang outcome
25. Structured-data table
26. Sitemap result / final URL count
27. Server vs Client boundaries
28. Bundle sizes for new articles
29. Homepage bundle before/after
30. Lint result
31. Build/typecheck result
32. Accessibility observations
33. Unsupported claims/statistics avoided
34. SEO/performance risks
35. Remaining blockers before deploy
36. Recommended next SEO patch

Then STOP.

Do not deploy.
Wait for explicit approval.
