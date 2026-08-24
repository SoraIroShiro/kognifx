# Kognifx Keyword-to-URL Map

**Patch ID:** `phase-2-expanded-keyword-universe`  
**Companion:** `keyword-universe.md`, `content-roadmap.md`  
**Rule:** One dominant intent → one primary owning URL. Variants stay on that URL.  
**Metrics:** volume / CPC / KD / traffic = **UNKNOWN** (no verified export).

---

## A. Existing-page ownership table

| URL | Primary intents owned | Secondary / supporting | Must NOT own |
|---|---|---|---|
| `/` | Brand EN (`kognifx`, AI-first software house positioning) | Broad capability mentions | Specific ID “jasa X” head terms |
| `/id` | Brand ID (`kognifx indonesia`, software house + AI positioning) | Soft commercial awareness | Detail jasa ranking for ERP/IoT/etc. |
| `/about` | About / trust EN | Process narrative | Commercial jasa |
| `/id/tentang` | Tentang kognifx | Process narrative ID | Commercial jasa H1s |
| `/solutions` | EN solution hub | Category taxonomy | Deep “custom ERP development” without children |
| `/id/solusi` | ID solution hub | Category taxonomy | Deep single-cluster ranking (children own depth) |
| `/contact` | Transactional contact EN | — | Topical commercial SEO |
| `/id/kontak` | Transactional contact ID | — | Topical commercial SEO |

---

## B. Proposed owning URLs (P0–P2 commercial)

| Priority | Owning URL | Canonical commercial intent | Status | Notes |
|---|---|---|---|---|
| P0 | `/id/solusi/software-custom` | jasa pembuatan software custom / software house | NEW PAGE LATER | Absorb geo + custom software variants |
| P0 | `/id/solusi/ai-automation` | jasa AI automation / otomasi proses bisnis | NEW PAGE LATER | Include AI agent + n8n sections |
| P0 | `/id/solusi/erp-custom` | jasa pembuatan ERP custom | NEW PAGE LATER | Module flavors as H2/H3, not URLs |
| P0 | `/id/solusi/iot` | jasa IoT Indonesia | NEW PAGE LATER | IIoT / monitoring as sections |
| P0 | `/id/solusi/integrasi-sistem` | jasa integrasi sistem / API | NEW PAGE LATER | API + data integration sections |
| P1 | `/id/solusi/crm` | jasa pembuatan CRM | NEW PAGE LATER | WhatsApp CRM as section |
| P1 | `/id/solusi/hris` | jasa pembuatan HRIS/HRMS | NEW PAGE LATER | Payroll/absensi as sections |
| P1 | `/id/solusi/wms-inventory` | WMS / inventory custom | NEW PAGE LATER | Barcode/multi-warehouse sections |
| P1 | `/id/solusi/ecommerce-marketplace` | e-commerce / marketplace | NEW PAGE LATER | Booking/ticketing light support |
| P1 | `/id/solusi/saas-platform` | jasa pembuatan SaaS / multi-tenant | NEW PAGE LATER | Subscription/membership sections |
| P2 | `/id/solusi/website-custom` | website perusahaan / company profile | NEW PAGE LATER | Landing page variants support |
| P2 | `/id/solusi/workflow-bpm` | workflow / BPM / DMS | NEW PAGE LATER | Approval/paperless sections |
| P2 | `/id/solusi/pos` (optional) | POS / retail | NEW PAGE LATER | Only if demand validated |
| P3 | EN `/solutions/*` mirrors | EN commercial layer | NEW PAGE LATER | After ID model proven |

Hub pages remain:

- `/id/solusi` → index / discovery  
- `/solutions` → EN index  

---

## C. Keyword → URL map (canonical intents)

### Brand

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| kognifx / kognifx indonesia / kognifx ai / kognifx software… | P0 | `/` + `/id` | EXISTING PAGE |
| kognifx software house / technology partner | P0 | `/id` (+ `/`) | EXISTING PAGE |
| tentang kognifx | P0 | `/id/tentang` | EXISTING PAGE |
| about kognifx | P0 | `/about` | EXISTING PAGE |

### Custom software / software house

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| software house indonesia (+ jakarta/tangerang as modifiers) | P0 | `/id/solusi/software-custom` | NEW PAGE LATER |
| jasa pembuatan software custom (+ all custom software jasa variants) | P0 | `/id/solusi/software-custom` | NEW PAGE LATER |
| custom software development indonesia (EN) | P1 | `/solutions` interim → EN child | NEW PAGE LATER |
| digitalisasi / transformasi digital perusahaan | P2 | articles + software-custom | SUPPORTING TERM |

### AI / automation / agent / n8n

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| jasa AI automation / AI automation indonesia | P0 | `/id/solusi/ai-automation` | NEW PAGE LATER |
| otomasi / otomatisasi proses bisnis / BPA / workflow automation | P0 | `/id/solusi/ai-automation` | NEW PAGE LATER |
| jasa AI agent / agentic AI / AI assistant | P1 | `/id/solusi/ai-automation` (section) | DO NOT TARGET SEPARATELY (initially) |
| document intelligence / RAG / LLM integration | P2 | ai-automation + articles | SUPPORTING TERM |
| jasa n8n / n8n automation / otomasi dengan n8n | P1 | `/id/solusi/ai-automation` (section) | SUPPORTING TERM → optional later page |
| n8n recipe variants (WhatsApp, CRM, Sheets…) | P2 | articles | SUPPORTING TERM |
| EN AI automation company / agentic AI development | P2 | EN child later | NEW PAGE LATER |

### ERP / enterprise

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| jasa pembuatan ERP custom / ERP custom indonesia | P0 | `/id/solusi/erp-custom` | NEW PAGE LATER |
| enterprise / sistem operasional / sistem internal | P1 | erp-custom + hub | SUPPORTING TERM |
| ERP module flavors (inventory+accounting, manufacturing…) | P2 | erp-custom sections | DO NOT TARGET SEPARATELY |
| EN custom ERP development indonesia | P2 | EN child later | NEW PAGE LATER |

### CRM / HRIS / WMS / POS

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| jasa pembuatan CRM (+ sales pipeline, WhatsApp CRM) | P1 | `/id/solusi/crm` | NEW PAGE LATER |
| jasa pembuatan HRIS/HRMS (+ payroll/absensi) | P1 | `/id/solusi/hris` | NEW PAGE LATER |
| WMS / inventory custom | P1 | `/id/solusi/wms-inventory` | NEW PAGE LATER |
| POS / kasir / retail | P2 | `/id/solusi/pos` or hub | NEW PAGE LATER / SUPPORTING |

### Finance / procurement / OMS / PIM

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| accounting / keuangan custom | P2 | erp-custom | SUPPORTING TERM |
| procurement / SCM | P2 | erp-custom | SUPPORTING TERM |
| OMS / PIM | P3 | ecommerce-marketplace / hub | SUPPORTING TERM |

### BPM / DMS / CMS / dashboard

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| workflow / BPM | P1 | `/id/solusi/workflow-bpm` | NEW PAGE LATER |
| DMS / document workflow | P2 | workflow-bpm | SUPPORTING TERM |
| CMS / portal / dashboard / monitoring | P2 | software-custom / website-custom | SUPPORTING TERM |

### Commerce / website / SaaS / platforms

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| e-commerce / marketplace | P1 | `/id/solusi/ecommerce-marketplace` | NEW PAGE LATER |
| website perusahaan / company profile | P1–P2 | `/id/solusi/website-custom` | NEW PAGE LATER |
| landing page variants | P2 | website-custom | DO NOT TARGET SEPARATELY |
| SaaS / multi-tenant / subscription / membership | P1 | `/id/solusi/saas-platform` | NEW PAGE LATER |
| booking / reservation / ticketing | P2 | ecommerce-marketplace | SUPPORTING TERM |
| helpdesk / service desk | P3 | crm / hub | SUPPORTING TERM |
| LMS / community / social | P3 | hub | SUPPORTING TERM |
| fintech / payment platforms | P3 | hub | SUPPORTING TERM |

### IoT / integration / devops

| Keyword concept | Pri | Owning URL | Status |
|---|---|---|---|
| jasa IoT Indonesia (+ IIoT, monitoring, telemetry) | P0 | `/id/solusi/iot` | NEW PAGE LATER |
| jasa integrasi sistem | P0 | `/id/solusi/integrasi-sistem` | NEW PAGE LATER |
| jasa integrasi API / data / middleware | P1 | integrasi-sistem | SUPPORTING TERM |
| devops / cloud / k8s / CI-CD | P3 | articles / delivery sections | SUPPORTING TERM |

### Problem / comparison / education

| Keyword concept family | Pri | Owning URL pattern | Status |
|---|---|---|---|
| Problem-based (manual, excel, data tersebar, multi cabang…) | P1–P2 | `/id/artikel/...` or `/id/panduan/...` (TBD slug scheme) | NEW PAGE LATER |
| Comparison (custom vs jadi, ERP vs Odoo/SAP, n8n vs Zapier…) | P1–P3 | articles | NEW PAGE LATER |
| Informational (apa itu X, manfaat X, cara memilih…) | P1–P3 | articles | NEW PAGE LATER |

### Industry / geographic / EN

| Keyword concept family | Pri | Owning URL | Status |
|---|---|---|---|
| Industry verticals (manufaktur, retail, F&B…) | P3 | modifiers on commercial pages | DO NOT TARGET SEPARATELY (initially) |
| Geographic (Jakarta, Tangerang, Jabodetabek…) | P2 | modifiers on commercial pages | DO NOT TARGET SEPARATELY |
| EN global commercial phrases | P2 | `/`, `/solutions`, then EN children | EXISTING / NEW LATER |

---

## D. Cannibalization findings

| Risk | Pages involved | Mitigation |
|---|---|---|
| Hub vs detail “jasa” | `/id/solusi` vs `/id/solusi/*` | Hub = taxonomy + links; children = head-term depth |
| Homepage vs jasa pages | `/id` vs software-custom / ai-automation | Homepage brand + overview; link out; avoid H1 “jasa pembuatan ERP” |
| AI agent vs AI automation | potential two pages | Keep AI agent on `ai-automation` until intent split proven |
| n8n vs AI automation | potential two pages | n8n section first; split only with GSC evidence |
| ERP vs WMS vs inventory | erp-custom vs wms-inventory | WMS owns warehouse depth; ERP owns integrated enterprise narrative |
| ERP vs accounting/procurement | module keywords | Keep as sections under erp-custom |
| CRM WhatsApp vs integrasi WhatsApp API | crm vs integrasi-sistem | CRM owns sales workflow; Integration owns API/middleware |
| Website vs software-custom | website-custom vs software-custom | Website = marketing sites; software-custom = apps/systems |
| EN `/solutions` vs ID children | bilingual | Parallel hubs; hreflang pairs when EN children exist |
| Brand stuffing | all pages | Brand queries owned by `/` `/id` `/about` `/id/tentang` only |
| Geo doorways | future temptation | No city-only pages; geo as supporting copy |

---

## E. Internal-link relationship map (target state)

```
/id ──► /id/solusi ──► [P0 children]
                 ├── software-custom ◄── articles (software house, custom vs jadi, excel→sistem)
                 ├── ai-automation   ◄── articles (AI agent, n8n, otomasi)
                 ├── erp-custom      ◄── articles (apa itu ERP, ERP vs Odoo)
                 ├── iot             ◄── articles (contoh IoT industri)
                 └── integrasi-sistem◄── articles (API, data tersebar)
/id/solusi ──► [P1 children]
                 ├── crm, hris, wms-inventory, ecommerce-marketplace, saas-platform
/id/tentang ──► /id/solusi + /id/kontak
/id/kontak ◄── all commercial CTAs
```

EN mirror: `/` → `/solutions` → future EN children → `/contact`.

---

## F. Terms that should NOT get separate pages (initial)

- Every acronym alone (OMS, PIM, HRMS, IIoT) without depth  
- Every n8n recipe (`n8n google sheets automation`, etc.)  
- Every ERP module combo  
- Every city (`software house bandung` alone)  
- AI agent / agentic AI (until divergence)  
- Landing page (under website-custom)  
- Payroll / absensi (under HRIS)  
- Vertical one-off pages (klinik, bengkel, koperasi…) until validated  
- Meta keywords / doorway near-duplicates  

---

## G. Missing data requiring GSC / Keyword Planner later

1. Actual query volume for ID head terms (software house, jasa ERP custom, AI automation, n8n)  
2. Brand query mix (`kognifx` vs `kognifx software house`)  
3. Whether AI agent searches diverge from AI automation  
4. Whether n8n deserves a standalone URL  
5. Geo demand concentration (Jakarta vs national Indonesia)  
6. Vertical demand (manufaktur / logistik / F&B)  
7. EN vs ID traffic share for commercial intents  
8. Impression/CTR gaps on `/id/solusi` hub after children launch  
