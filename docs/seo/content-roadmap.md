# Kognifx Content Roadmap

**Patch ID:** `phase-2-expanded-keyword-universe`  
**Companion:** `keyword-universe.md`, `keyword-map.md`  
**Metrics:** search volume / CPC / KD / traffic = **UNKNOWN** until GSC/Planner validation  
**Status:** Research only — no production routes or copy injection in this patch

---

## 1. First 5 commercial landing pages (P0)

Ship ID first (SERP language + market fit). Each page: one H1 commercial intent, problem narrative, capabilities, process, FAQ, CTA to `/id/kontak`, links to hub + sibling solutions + supporting articles.

| # | URL | Primary intent | Must include (sections, not URLs) | Internal links |
|---|---|---|---|---|
| 1 | `/id/solusi/software-custom` | jasa pembuatan software custom / software house indonesia | custom apps, portals, dashboards, geo Indonesia/Jabodetabek mention | → ai-automation, erp-custom, website-custom, artikel software house |
| 2 | `/id/solusi/ai-automation` | jasa AI automation / otomasi proses bisnis | AI agent, agentic AI, assistants, document intelligence, **n8n** | → software-custom, integrasi-sistem, artikel AI/n8n |
| 3 | `/id/solusi/erp-custom` | jasa pembuatan ERP custom | modules overview, multi-cabang, manufacturing/distributor flavors as H2 | → wms-inventory, crm, hris, artikel ERP |
| 4 | `/id/solusi/iot` | jasa IoT Indonesia | monitoring, sensors, industrial IoT, device integration | → integrasi-sistem, ai-automation, artikel IoT |
| 5 | `/id/solusi/integrasi-sistem` | jasa integrasi sistem / API | ERP/CRM sync, middleware, data integration, WhatsApp API | → ai-automation (n8n), erp-custom, artikel API |

**Hub update (when implementing):** `/id/solusi` category cards become links into these children (implementation batch later — not this research patch).

---

## 2. Next 5 commercial landing pages (P1)

| # | URL | Primary intent | Notes |
|---|---|---|---|
| 6 | `/id/solusi/crm` | jasa pembuatan CRM | Sales pipeline, WhatsApp CRM, automation |
| 7 | `/id/solusi/hris` | jasa pembuatan HRIS/HRMS | Payroll/absensi as sections |
| 8 | `/id/solusi/wms-inventory` | WMS / inventory custom | Logistik adjacency; link from ERP |
| 9 | `/id/solusi/ecommerce-marketplace` | e-commerce / marketplace | B2B/B2C; light booking/ticketing |
| 10 | `/id/solusi/saas-platform` | jasa pembuatan SaaS | Multi-tenant, subscription, membership |

**P2 follow-ons:** `/id/solusi/website-custom`, `/id/solusi/workflow-bpm`, optional `/id/solusi/pos`.

---

## 3. First 20 supporting articles (informational / TOFU–MOFU)

Recommended base path scheme (decide at implementation): `/id/artikel/[slug]` or `/id/panduan/[slug]`.  
Each article links to ≥1 commercial page + `/id/kontak`.

| # | Topic | Supports | Priority |
|---|---|---|---|
| 1 | Apa itu software house | software-custom | P1 |
| 2 | Apa itu software custom | software-custom | P1 |
| 3 | Cara memilih software house | software-custom | P1 |
| 4 | Tahapan / proses pembuatan software custom | software-custom | P1 |
| 5 | Apa itu AI automation | ai-automation | P1 |
| 6 | Contoh AI automation untuk bisnis | ai-automation | P1 |
| 7 | Apa itu AI agent & cara kerjanya | ai-automation | P1 |
| 8 | Contoh AI agent untuk bisnis | ai-automation | P1 |
| 9 | Apa itu n8n & kapan dipakai | ai-automation | P1 |
| 10 | Apa itu ERP & manfaat untuk perusahaan | erp-custom | P1 |
| 11 | Kapan perusahaan membutuhkan ERP | erp-custom | P1 |
| 12 | Modul ERP yang umum dibutuhkan | erp-custom | P1 |
| 13 | Apa itu system integration | integrasi-sistem | P1 |
| 14 | Apa itu API integration & manfaatnya | integrasi-sistem | P1 |
| 15 | Apa itu IoT & contoh untuk industri | iot | P1 |
| 16 | Apa itu workflow automation | ai-automation / workflow-bpm | P2 |
| 17 | Apa itu CRM & fungsi untuk perusahaan | crm | P2 |
| 18 | Apa itu HRIS (dan bedanya dengan HRMS) | hris | P2 |
| 19 | Apa itu WMS & manfaat gudang | wms-inventory | P2 |
| 20 | Apa itu SaaS & multi-tenant | saas-platform | P2 |

---

## 4. First 5 comparison articles

| # | Topic | Supports |
|---|---|---|
| 1 | Software custom vs software jadi (build vs buy) | software-custom |
| 2 | ERP custom vs ERP jadi / Odoo / ERPNext (and when SAP is overkill) | erp-custom |
| 3 | n8n vs Zapier / Make untuk bisnis Indonesia | ai-automation |
| 4 | AI agent vs chatbot vs automation | ai-automation |
| 5 | CRM custom vs CRM siap pakai | crm |

---

## 5. First 10 problem-based articles

| # | Topic | Primary commercial target |
|---|---|---|
| 1 | Sistem masih manual: mulai dari mana | software-custom / ai-automation |
| 2 | Cara digitalisasi proses bisnis tanpa membeli tool yang salah | software-custom |
| 3 | Mengurangi kerja manual & pekerjaan repetitif | ai-automation |
| 4 | Mengganti Excel dengan sistem operasional | software-custom / erp-custom |
| 5 | Data perusahaan tersebar: menyatukan sumber data | integrasi-sistem |
| 6 | Sistem perusahaan tidak terintegrasi | integrasi-sistem |
| 7 | Otomasi laporan & input data | ai-automation / n8n |
| 8 | Sistem approval yang lambat | workflow-bpm |
| 9 | Operasional multi-cabang tanpa sistem terpusat | erp-custom |
| 10 | Butuh dashboard manajemen yang benar-benar dipakai | software-custom |

---

## 6. Internal-link relationships (summary)

1. **Hub → children:** `/id/solusi` links to all live solution detail pages.  
2. **Children → hub + siblings:** every detail page links back to hub and 2–3 related siblings.  
3. **Articles → commercial:** every article ends with contextual CTA to owning solution + contact.  
4. **Commercial → articles:** “Pelajari lebih lanjut” blocks (3–5 related articles).  
5. **Brand pages → hub:** `/id` and `/id/tentang` link to `/id/solusi`, not keyword dumps.  
6. **All commercial → `/id/kontak`:** single transactional conversion URL.  
7. **EN parallel:** `/` ↔ `/solutions` ↔ `/contact`; add EN children only after ID templates stabilize.  
8. **No orphan pages:** every new URL must have ≥2 inbound internal links at publish.

---

## 7. Subcluster analyses

### 7.1 AI / n8n / agentic AI

- **Single commercial owner:** `/id/solusi/ai-automation`.  
- **SERP-validated language:** AI Automation Indonesia, AI Agent Indonesia, BPA, n8n otomasi.  
- **Structure:** H1 around AI automation / otomasi bisnis; H2s for AI agent, n8n, document intelligence, assistants.  
- **Split trigger (later):** GSC shows distinct queries + engagement for “jasa n8n” or “jasa AI agent” that underperform as sections.  
- **Do not** launch three near-duplicate pages day one.

### 7.2 ERP / enterprise

- **Owner:** `/id/solusi/erp-custom`.  
- **SERP language:** jasa pembuatan ERP custom, software ERP & logistik adjacency.  
- **Keep on-page:** multi-cabang, modular, manufacturing/distributor as sections.  
- **Separate later:** WMS/inventory already planned as sibling (logistics depth). Accounting/procurement stay ERP sections initially.

### 7.3 Web / commerce / platform

- **Owners:** `website-custom` (P2), `ecommerce-marketplace` (P1), `saas-platform` (P1).  
- **Risk:** overlapping “pembuatan website” vs “ecommerce” — separate H1 intents clearly.  
- **Platform leftovers** (LMS, community, fintech): hub mentions + articles until demand proven.

### 7.4 IoT / integration

- **Owners:** `iot` and `integrasi-sistem` (both P0 First 5).  
- **Boundary:** IoT = devices/sensors/telemetry; Integration = systems/APIs/data/middleware (may include device data pipelines as overlap section with cross-links).  
- **SERP language:** Integrasi Sistem & API validated; IoT is semantic/strong capability fit.

### 7.5 Geographic

- Prefer **Indonesia + Jabodetabek** mentions on P0 pages.  
- Jakarta/Tangerang as supporting phrases in FAQ/locations — **no city doorway URLs**.  
- Revisit dedicated geo pages only with clear GSC demand + unique local proof.

### 7.6 English / global

- Keep EN brand on `/` and hub on `/solutions`.  
- Do not delay ID commercial pages for EN parity.  
- After First 5 ID pages: evaluate EN mirrors for top performers only.

---

## 8. Recommended implementation batches (for later execution — not this patch)

| Batch | Scope | Notes |
|---|---|---|
| **Batch A** | Template + First 5 ID solution pages + hub linking | Highest commercial SEO leverage |
| **Batch B** | First 10 articles (software house + AI + ERP + integration) | Supports Batch A |
| **Batch C** | Next 5 commercial pages (CRM, HRIS, WMS, ecommerce, SaaS) | Expand coverage |
| **Batch D** | Comparison + problem articles (15) | MOFU capture |
| **Batch E** | website-custom + workflow-bpm + optional POS | P2 fill |
| **Batch F** | EN mirrors for winners + GSC-driven splits (n8n/AI agent) | Data-led |

Each implementation batch requires a separate approved task. **This research patch stops here.**

---

## 9. Brand protection checklist (ongoing)

- [ ] `/` and `/id` stay brand-first  
- [ ] `/about` and `/id/tentang` stay trust/process  
- [ ] No meta keywords  
- [ ] No comma-separated keyword dumps on pages  
- [ ] No doorway / near-duplicate solution pages  
- [ ] One H1 commercial intent per solution child  

---

## 10. Priority rollup

| Priority | Rough intent count | Action |
|---|---|---|
| P0 | 14 | Brand existing + First 5 commercial URLs |
| P1 | 28 | Next 5 commercial + core articles/comparisons/problems |
| P2 | 36 | Secondary commercial + more education |
| P3 | 40 | Verticals, geo, fintech/LMS, EN expansion, devops |

Exact phrase inventory and variant lists live in `keyword-universe.md`.
