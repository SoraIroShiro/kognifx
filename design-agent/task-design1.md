# Kognifx — Task Design

## Patch
**Phase 1 — Brand + Bilingual SEO Foundation**

## Working Mode
This file is a **step-by-step execution contract for Cursor**.

Cursor MUST NOT implement the entire patch in one run.

For every execution:
1. Read this file first.
2. Execute **ONLY the single step explicitly requested by the user**.
3. Do not continue to the next step automatically.
4. Do not perform “while I’m here” refactors outside the requested step.
5. After finishing the requested step, STOP and report the result.
6. Wait for the user to review/test and explicitly authorize the next step.
7. Never deploy unless the user explicitly asks.

If a requested step depends on something incomplete from a previous step, stop and explain the blocker instead of silently completing other steps.

---

# 0. Patch Goal

Build the first bilingual brand/SEO foundation for Kognifx without regressing the homepage technical SEO or performance work that is already complete.

The intended public route architecture for this patch is:

```text
English
/
/about
/solutions
/contact

Indonesian
/id
/id/tentang
/id/solusi
/id/kontak
```

The root `/` remains English and acts as the default language URL.
Do **not** migrate the root to `/en` in this patch.

The patch should help search engines understand Kognifx as a distinct software/technology brand while preserving the current high-performance architecture.

---

# 1. Non-Negotiable Constraints

These rules apply to **every step**.

## Existing technical SEO must not regress
Preserve the current behavior of:
- canonical URLs
- metadata infrastructure
- Organization / WebSite / FAQ structured data already in production
- robots configuration
- sitemap architecture unless the current step explicitly updates sitemap entries
- semantic heading quality
- SSR-visible marketing content

## Performance must not regress
The homepage currently uses user-activated Spline/3D loading.

Preserve all of the following:
- zero automatic Spline loading on initial page load
- no automatic `scene.splinecode` request before explicit activation
- no initial heavy Spline runtime load
- reduced-motion handling
- Save-Data handling
- WebGL fallback
- stable placeholder dimensions / CLS behavior
- two-stage activation where lightweight loading UI can paint before heavy import

Do not:
- restore automatic Spline loading
- add a new large animation dependency
- add a new global client provider unless absolutely necessary
- convert server-renderable pages into client components unnecessarily
- add a large i18n framework for this small language architecture

## Content integrity
Do not invent:
- client names
- customer counts
- awards
- ratings
- founders
- office addresses
- social profiles
- revenue
- company history
- certifications
- business facts not already present in the repository or explicitly provided by the user

## Engineering discipline
- Prefer Server Components where possible.
- Reuse the existing design system/components.
- Reuse the existing SEO utilities where possible.
- Keep client-side JavaScript minimal.
- Do not perform broad unrelated refactors.
- Do not rename existing routes/components unnecessarily.
- Do not deploy.

---

# 2. Approved Positioning

Kognifx should be represented as an **AI-first software house and technology partner**.

Core capability areas:
- custom software
- enterprise/business systems
- AI agents and agentic AI
- workflow automation
- n8n-style automation/integration
- digital commerce/platforms
- IoT
- APIs and systems integration

Kognifx can solve requirements ranging from simple digital projects to highly complex operational problems.

AI should be positioned as a meaningful capability integrated into products where it provides real value, not as empty marketing decoration.

---

# 3. Approved Information Architecture

## English
```text
/
/about
/solutions
/contact
```

## Indonesian
```text
/id
/id/tentang
/id/solusi
/id/kontak
```

## Language pairs
```text
/           <-> /id
/about      <-> /id/tentang
/solutions  <-> /id/solusi
/contact    <-> /id/kontak
```

English is the default/x-default language for this patch.

---

# 4. Approved Page Content Direction

## `/` — English homepage

### Preserve existing H1 exactly
> Turning Complexity into Working Systems.

### Supporting positioning copy
> Kognifx is an AI-first software house and technology partner that builds custom software, enterprise systems, automation, AI agents, and IoT solutions for real-world business problems.

### Primary CTA
`Discuss Your Project` -> `/contact`

### Secondary CTA
`Explore Solutions` -> `/solutions`

### Approved new/expanded semantic sections

#### H2
> Software Built Around the Problem, Not the Template.

Capability groups:
- Custom Software
- Enterprise Systems
- AI & Automation
- Digital Commerce
- Digital Platforms
- IoT & Integration

#### H2
> AI Is Not an Add-On.

Explain practical use of:
- AI assistants
- intelligent workflows
- AI agents
- document intelligence
- decision support
- automation

#### H2
> Start With the Problem.

Explain that the appropriate solution might be a simple website, ERP, automation, IoT, or fully custom software depending on the actual problem.

### Metadata
Title:
`Kognifx — AI-First Software House & Technology Partner`

Description:
`Kognifx builds custom software, enterprise systems, AI agents, automation, and IoT solutions designed to solve real business problems from simple workflows to complex operations.`

---

## `/id` — Indonesian homepage

### H1
> Mengubah Kompleksitas Menjadi Sistem yang Bekerja.

### Supporting copy
> Kognifx adalah software house dan technology partner berbasis AI yang membangun software custom, sistem enterprise, automation, AI agent, serta solusi IoT sesuai kebutuhan bisnis.

### Primary CTA
`Konsultasikan Kebutuhan Anda` -> `/id/kontak`

### Secondary CTA
`Lihat Solusi` -> `/id/solusi`

Use equivalent content architecture to the English homepage, but write natural Indonesian copy rather than literal translation.

### Metadata
Title:
`Kognifx — Software House & Solusi AI untuk Bisnis`

Description:
`Kognifx membantu bisnis membangun software custom, sistem enterprise, AI agent, automation, dan IoT untuk menyelesaikan kebutuhan operasional hingga masalah bisnis yang kompleks.`

---

## `/about`

### H1
> About Kognifx

### Opening
> Kognifx is an AI-first software house and technology partner focused on turning business problems into practical, scalable systems.

### Sections
- Why Kognifx Exists
- We Start With the Problem
- Software + AI by Default
- What We Can Build
- From Simple to Complex
- How We Work

### Process concept
```text
Understand
→ Structure
→ Design
→ Build
→ Integrate
→ Improve
```

### Final CTA
`Talk to Kognifx` -> `/contact`

### Metadata
Title:
`About Kognifx — Software, AI & Systems Engineering`

Description:
`Learn how Kognifx combines software engineering, AI, automation, and systems thinking to turn business problems into practical working systems.`

---

## `/id/tentang`

### H1
> Tentang Kognifx

### Opening
> Kognifx adalah software house dan technology partner berbasis AI yang membantu bisnis mengubah permasalahan menjadi sistem digital yang dapat digunakan secara nyata.

Use natural Indonesian language and avoid generic claims such as “leading innovative company”.

### Metadata
Title:
`Tentang Kognifx — Software House, AI & Systems Engineering`

Description:
`Kenali Kognifx, software house berbasis AI yang membantu bisnis merancang dan membangun sistem digital dari kebutuhan sederhana hingga masalah operasional yang kompleks.`

---

## `/solutions`

### H1
> Technology Built Around Your Business.

### Intro
> We do not force every problem into the same product. Kognifx designs and builds systems around your requirements, workflows, and operational reality.

### Capability groups

#### 1. Custom Software
- Company Profile
- Landing Page
- Portal
- Dashboard
- CMS
- Document Management
- SaaS
- Custom Business Applications

#### 2. Enterprise & Operations
- ERP
- CRM
- HRIS
- HRMS
- POS
- Inventory Management System
- WMS
- Accounting System
- Procurement System
- SCM
- PIM
- OMS
- BPM System
- Workflow Management System

#### 3. AI & Automation
- AI Agents
- Agentic AI
- Workflow Automation
- n8n Integration
- Document Intelligence
- AI Assistants
- Knowledge Systems
- Decision Support

#### 4. Commerce & Customer Platforms
- E-Commerce
- Marketplace
- Booking System
- Reservation System
- Ticketing System
- Helpdesk System
- Subscription Platform
- Membership Platform

#### 5. Digital Platforms
- Social Platform
- Community Platform
- Fintech
- Multi-Tenant Platform
- Super App
- LMS

#### 6. IoT & Integration
- IoT Systems
- Device Integration
- Monitoring Systems
- API Integration
- Data Integration
- System-to-System Automation

Do not create child solution pages in this patch.
Do not create dead links for future solution pages.

### Bottom CTA
Heading:
> Can't find the system you need?

Copy:
> That's usually where custom software begins.

CTA:
`Discuss Your Requirement` -> `/contact`

### Metadata
Title:
`Software, AI & Technology Solutions | Kognifx`

Description:
`Explore Kognifx solutions across custom software, enterprise systems, AI automation, digital commerce, platforms, IoT, and systems integration.`

---

## `/id/solusi`

### H1
> Solusi Teknologi yang Dibangun Sesuai Kebutuhan Bisnis.

### Intro
> Tidak semua bisnis memiliki masalah yang sama. Karena itu, Kognifx membangun sistem berdasarkan kebutuhan, proses kerja, dan kompleksitas yang sebenarnya dihadapi bisnis Anda.

Use the same capability groups, but use natural Indonesian labels where helpful.
Keep standard technical terms such as ERP, CRM, SaaS, IoT, AI Agent, WMS, API, etc. when they are more natural than forced translations.

### Metadata
Title:
`Solusi Software Custom, AI & Sistem Bisnis | Kognifx`

Description:
`Temukan solusi Kognifx untuk software custom, ERP, sistem perusahaan, AI automation, e-commerce, platform digital, IoT, dan integrasi sistem.`

---

## `/contact`

### H1
> Let's Understand the Problem First.

### Supporting copy
> You don't need to know exactly what technology you need. Tell us what is happening, what needs to improve, or what you want to build.

### Contact UI fields
- Name
- Company / Organization
- Email
- WhatsApp
- What are you trying to solve?
- Project type (optional)

### Primary CTA
`Discuss My Project`

Provide WhatsApp as a secondary action only if a real WhatsApp destination already exists in the project or is explicitly provided by the user.

Do not implement account registration.
Do not invent a backend endpoint.
If no form backend exists, create a clean UI and clearly document that submission wiring remains pending.

### Metadata
Title:
`Talk to Kognifx — Discuss Your Software or AI Project`

Description:
`Tell Kognifx about your business problem, software requirement, automation idea, or technology project and explore the right solution together.`

---

## `/id/kontak`

### H1
> Ceritakan Masalah yang Ingin Anda Selesaikan.

### Supporting copy
> Anda tidak harus sudah mengetahui teknologi apa yang dibutuhkan. Ceritakan proses, masalah, atau ide yang ingin dikembangkan, dan Kognifx akan membantu menyusun solusi yang tepat.

### Primary CTA
`Konsultasikan Proyek`

### Secondary CTA
`Hubungi via WhatsApp`

Same backend/credential rules as `/contact`.

---

# 5. International SEO Rules

Implement only when the relevant step is authorized.

Language mappings:
```text
/           <-> /id
/about      <-> /id/tentang
/solutions  <-> /id/solusi
/contact    <-> /id/kontak
```

Rules:
- English alternate: `hreflang="en"`
- Indonesian alternate: `hreflang="id-ID"`
- English URL is `x-default`
- every page is self-canonical
- never canonical Indonesian pages to English pages
- language switcher must navigate to the equivalent paired page
- English pages should primarily link to English routes
- Indonesian pages should primarily link to Indonesian routes

Do not add a heavy i18n library just for these mappings.

---

# 6. Structured Data Rules

Keep current homepage Organization + WebSite + FAQ behavior intact.

Permitted additions:
- `/about`, `/id/tentang` -> `AboutPage`
- `/solutions`, `/id/solusi` -> `CollectionPage` or normal `WebPage`
- `/contact`, `/id/kontak` -> `ContactPage`

Reuse existing structured-data utilities where practical.
Do not schema-spam.
Do not add fabricated entity properties.

---

# 7. Navigation Rules

## English navigation
- Solutions
- About
- Contact
- EN / ID language control

## Indonesian navigation
- Solusi
- Tentang
- Kontak
- ID / EN language control

Do not add `Insights` in this patch because the route does not exist yet.
Do not create dead navigation links.

Language control must navigate to the paired equivalent page.

Examples:
```text
/about -> /id/tentang
/id/tentang -> /about
/solutions -> /id/solusi
/id/kontak -> /contact
```

---

# 8. Sitemap Rules

At the sitemap step, include all public Phase 1 routes:

```text
/
/about
/solutions
/contact
/id
/id/tentang
/id/solusi
/id/kontak
```

Do not disturb robots configuration unless a real bug is discovered and reported first.

---

# 9. Execution Plan

Cursor must execute one numbered step at a time.

---

## STEP 0 — Baseline Audit Only

### Goal
Understand the current implementation before changing code.

### Actions
- inspect current App Router route tree
- inspect homepage composition
- inspect SEO utility / metadata source-of-truth
- inspect canonical implementation
- inspect current structured data
- inspect sitemap and robots implementation
- inspect current navigation/header
- inspect existing CTA/button components
- inspect current Spline activation architecture
- inspect whether a real contact/WhatsApp destination/backend already exists
- inspect whether there is already any language/i18n helper
- record current `/` route bundle / First Load JS from build if available

### Do NOT
- edit files
- install packages
- generate new pages
- refactor anything

### Deliverable
Report:
1. relevant files
2. current route structure
3. SEO architecture
4. Spline/performance architecture
5. reusable components
6. contact/WhatsApp/backend findings
7. implementation risks for this patch
8. recommended exact files for STEP 1

### Acceptance
No repository changes.

### STOP
Wait for user approval.

---

## STEP 1 — Bilingual Routing Foundation

### Goal
Create the minimum route/page foundation for the six new Phase 1 routes without implementing final page content yet.

### Routes to establish
```text
/about
/solutions
/contact
/id
/id/tentang
/id/solusi
/id/kontak
```

### Actions
- create minimal route files using the current App Router conventions
- preserve Server Components by default
- add only minimal semantic placeholder content necessary for valid routes
- if a tiny route-pair mapping utility is useful, create it without adding a dependency
- do not change homepage copy yet
- do not implement language navigation yet unless strictly required to make routes valid

### Acceptance
- all seven routes resolve
- no dead imports
- no large dependency added
- no Spline architecture changes
- lint/build pass for this step

### Deliverable
Report files created/changed + route tree + bundle impact.

### STOP
Wait for user review.

---

## STEP 2 — Navigation + Language Pair Switching

### Goal
Implement bilingual navigation behavior without changing page content architecture.

### Actions
- update/reuse current navigation
- English nav: Solutions, About, Contact, EN/ID
- Indonesian nav: Solusi, Tentang, Kontak, ID/EN
- language switch must navigate to the paired equivalent route
- ensure keyboard accessibility
- ensure mobile navigation still works
- no `Insights` link yet

### Acceptance
- no dead nav links
- paired switching works on every Phase 1 route
- no forced homepage redirect when an equivalent page exists
- no new global client provider unless there is no simpler solution
- no Spline changes
- lint/build pass

### STOP
Wait for user review.

---

## STEP 3 — English About Page

### Goal
Finish `/about` only.

### Actions
Implement the approved `/about` content, metadata, semantic heading structure, internal CTA, and visual reuse.

Do not touch `/solutions`, `/contact`, `/id/*`, or homepage content except shared components strictly required by `/about`.

### Acceptance
- exactly one H1
- metadata correct
- meaningful SSR content
- internal link to `/contact`
- responsive
- no large new JS
- lint/build pass

### STOP
Wait for user review.

---

## STEP 4 — Indonesian About Page

### Goal
Finish `/id/tentang` only.

### Actions
Implement the approved Indonesian About content naturally, not as awkward literal translation.

### Acceptance
- exactly one H1
- metadata correct
- meaningful SSR content
- relevant internal link to `/id/kontak`
- visual consistency with `/about`
- lint/build pass

### STOP
Wait for user review.

---

## STEP 5 — English Solutions Hub

### Goal
Finish `/solutions` only.

### Actions
Implement all six approved solution capability groups.
Do not create child solution routes.
Do not create dead links to future solution pages.

### Acceptance
- exactly one H1
- all capability groups represented
- metadata correct
- CTA goes to `/contact`
- semantic HTML
- responsive cards/layout
- no large JS dependency
- lint/build pass

### STOP
Wait for user review.

---

## STEP 6 — Indonesian Solutions Hub

### Goal
Finish `/id/solusi` only.

### Actions
Implement a natural Indonesian equivalent of the approved Solutions hub.
Keep technical product terms where appropriate.

### Acceptance
- exactly one H1
- all capability groups represented
- metadata correct
- CTA goes to `/id/kontak`
- visual consistency with `/solutions`
- lint/build pass

### STOP
Wait for user review.

---

## STEP 7 — English Contact Page

### Goal
Finish `/contact` only.

### Actions
- implement approved contact copy and fields
- reuse current form/input components if available
- connect to a real existing backend only if one already exists and is appropriate
- connect WhatsApp only if a real destination exists
- otherwise keep UI honest and document pending submission wiring

### Do NOT
- invent API endpoints
- invent phone numbers
- create insecure email submission logic
- implement registration/accounts

### Acceptance
- accessible labels
- keyboard usable
- metadata correct
- no fake “successful submission” behavior
- lint/build pass

### STOP
Wait for user review.

---

## STEP 8 — Indonesian Contact Page

### Goal
Finish `/id/kontak` only.

### Actions
Implement the approved Indonesian contact experience using the same technical behavior as `/contact`.

### Acceptance
- language/copy natural
- accessible fields
- no fake submission
- correct internal routes
- lint/build pass

### STOP
Wait for user review.

---

## STEP 9 — English Homepage SEO Content Upgrade

### Goal
Upgrade `/` content without redesigning the homepage or changing Spline loading behavior.

### Actions
- preserve existing H1 exactly
- integrate approved supporting positioning copy
- ensure primary CTA -> `/contact`
- ensure secondary CTA -> `/solutions`
- add/integrate approved semantic capability section
- add/integrate `AI Is Not an Add-On.` section
- add/integrate `Start With the Problem.` section
- add a natural link to `/about`
- update homepage title/description to approved values

### Critical
Do not make existing Spline or decorative components load earlier.
Do not change user-activation behavior.
Do not duplicate heavy visuals merely to support new content.

### Acceptance
- one primary H1
- no keyword stuffing
- all three key internal links visible/semantic
- initial network still has zero automatic Spline runtime/scene/WASM requests
- bundle remains close to current optimized baseline
- lint/build pass

### STOP
Wait for user review and Lighthouse testing.

---

## STEP 10 — Indonesian Homepage

### Goal
Finish `/id` as a real Indonesian landing page.

### Actions
- implement approved H1/supporting copy
- mirror the information architecture of the English homepage where useful
- write natural Indonesian content rather than mechanically translating
- link to `/id/tentang`, `/id/solusi`, `/id/kontak`
- reuse lightweight existing visual components

### Heavy visual rule
Do not automatically duplicate heavy Spline behavior.
If Spline is reused, it must use the same explicit user-activated architecture and must not load on initial page load.

### Acceptance
- one primary H1
- metadata correct
- meaningful SSR content
- no automatic Spline request
- responsive
- lint/build pass

### STOP
Wait for user review and Lighthouse testing.

---

## STEP 11 — Canonical + Hreflang

### Goal
Implement international SEO relationships only after all paired pages exist.

### Actions
Implement pair mappings:
```text
/           <-> /id
/about      <-> /id/tentang
/solutions  <-> /id/solusi
/contact    <-> /id/kontak
```

Requirements:
- English: `en`
- Indonesian: `id-ID`
- English URL is `x-default`
- self canonical on every route
- no Indonesian-to-English canonical
- reuse metadata utilities if possible

### Acceptance
For each page report the resolved:
- canonical
- `en` alternate
- `id-ID` alternate
- `x-default`

lint/build pass.

### STOP
Wait for user review.

---

## STEP 12 — Page Structured Data

### Goal
Add only appropriate page-level structured data.

### Actions
- preserve existing Organization/WebSite/FAQ graph
- `/about`, `/id/tentang`: AboutPage
- `/solutions`, `/id/solusi`: CollectionPage or WebPage
- `/contact`, `/id/kontak`: ContactPage
- reuse existing JSON-LD utilities

### Acceptance
- no duplicate conflicting entities
- no fabricated data
- valid serializable JSON-LD
- existing homepage graph preserved
- lint/build pass

### STOP
Wait for user review.

---

## STEP 13 — Sitemap + Internal Link Audit

### Goal
Make all Phase 1 routes discoverable and ensure there are no orphan pages.

### Actions
Add to existing sitemap:
```text
/
/about
/solutions
/contact
/id
/id/tentang
/id/solusi
/id/kontak
```

Audit internal links by language.
Do not change robots unless a real issue is found; report first if so.

### Acceptance
- all public routes in sitemap
- no orphan Phase 1 pages
- no dead internal links
- no cross-language accidental CTA routes
- lint/build pass

### STOP
Wait for user review.

---

## STEP 14 — Final QA / Production Readiness

### Goal
Verify the entire patch. Do not add features.

### Audit
- route tree
- one H1 per page
- heading hierarchy
- metadata titles/descriptions
- self canonicals
- hreflang pairs
- x-default
- structured data
- navigation
- language switching
- internal links
- sitemap
- robots unchanged unless explicitly approved
- contact form honesty/behavior
- accessibility basics
- responsive/mobile
- horizontal overflow
- SSR meaningful content
- no dead CTA
- no duplicate IDs
- Spline initial-load behavior
- Spline activation behavior
- reduced motion / Save-Data / WebGL fallback

### Run
```bash
npm run lint
npm run build
```

If practical, report route bundle sizes and compare `/` against the pre-patch baseline from STEP 0.

### Final report
1. files created
2. files changed
3. final route tree
4. metadata matrix
5. canonical/hreflang matrix
6. structured-data matrix
7. language-switch behavior
8. sitemap routes
9. contact form behavior
10. unresolved credentials/URLs/backend requirements
11. performance regression analysis
12. route bundle sizes
13. lint result
14. build/typecheck result
15. manual checks user should perform before deploy

### Do NOT
- deploy
- make unrequested cleanup refactors
- begin Phase 2 solution child pages
- begin Insights/articles

### STOP
Patch is complete only after user reviews this final report.

---

# 10. Step Status

Cursor may update ONLY the checkbox/status for a step after that exact step has been explicitly requested and completed.

```text
[ ] STEP 0  — Baseline Audit Only
[ ] STEP 1  — Bilingual Routing Foundation
[ ] STEP 2  — Navigation + Language Pair Switching
[ ] STEP 3  — English About Page
[ ] STEP 4  — Indonesian About Page
[ ] STEP 5  — English Solutions Hub
[ ] STEP 6  — Indonesian Solutions Hub
[ ] STEP 7  — English Contact Page
[ ] STEP 8  — Indonesian Contact Page
[ ] STEP 9  — English Homepage SEO Content Upgrade
[ ] STEP 10 — Indonesian Homepage
[ ] STEP 11 — Canonical + Hreflang
[ ] STEP 12 — Page Structured Data
[ ] STEP 13 — Sitemap + Internal Link Audit
[ ] STEP 14 — Final QA / Production Readiness
```

Do not mark future steps complete.

---

# 11. Required Cursor Response Format After Each Step

After completing an authorized step, respond using this format:

```markdown
## STEP X Complete — <step name>

### Files changed
- ...

### What was implemented
- ...

### What was intentionally NOT changed
- ...

### Validation
- lint: pass/fail/not run
- build: pass/fail/not run
- relevant route checks: ...

### Performance / SEO impact
- ...

### Risks / items for user review
- ...

### Next step
STEP X+1 is NOT started.
Waiting for explicit user approval.
```

If no files were changed, say so explicitly.

---

# 12. Definition of Done

This Phase 1 patch is complete only when:
- all steps through STEP 14 have been explicitly authorized and completed
- the user has reviewed intermediate checkpoints
- final lint/build pass
- homepage initial-load Spline performance architecture remains intact
- bilingual canonical/hreflang behavior is correct
- all Phase 1 pages are internally discoverable
- no fabricated business data exists
- no deployment has been performed by Cursor unless separately requested by the user

