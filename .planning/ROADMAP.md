# Roadmap: Ordtegl Public Site

## Overview

This roadmap delivers a Jekyll-based public website for the Ordtegl iOS app, hosted on GitHub Pages. The journey starts with Jekyll infrastructure and critical legal compliance pages (privacy policy, terms of service) to unblock App Store submission, then builds out user support documentation, a landing page for potential users, and finally press resources. Each phase deploys to GitHub Pages so the privacy policy URL is live as early as possible.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation & Legal Pages** - Jekyll setup + privacy policy + terms of service
- [x] **Phase 2: Support & FAQ** - User support infrastructure and account deletion docs
- [ ] **Phase 3: Landing Page** - Public-facing marketing content
- [ ] **Phase 4: Press Kit & Attribution** - Media resources and legal attributions

## Phase Details

### Phase 1: Foundation & Legal Pages
**Goal**: Site is live with Jekyll infrastructure and critical legal compliance pages that satisfy App Store requirements
**Depends on**: Nothing (first phase)
**Requirements**: SITE-01, SITE-02, SITE-03, SITE-04, SITE-05, PRIV-01, PRIV-02, PRIV-03, PRIV-04, PRIV-05, PRIV-06, PRIV-07, PRIV-08, PRIV-09, PRIV-10, PRIV-11, PRIV-12, PRIV-13, PRIV-14, TERMS-01, TERMS-02, TERMS-03, TERMS-04, TERMS-05, TERMS-06, TERMS-07, TERMS-08
**Success Criteria** (what must be TRUE):
  1. Privacy policy page is accessible at ordtegl-public.github.io/privacy/ with stable URL
  2. User can read privacy policy in plain language covering PostHog analytics, backend sync, Sign in with Apple, and content error reporting
  3. Terms of service page is accessible at ordtegl-public.github.io/terms/ with stable URL
  4. Site displays correctly on mobile devices with warm neutrals design aesthetic (creams, soft grays, terracotta)
  5. Site is deployed to GitHub Pages and publicly accessible via HTTPS
**Plans:** 5 plans

Plans:
- [x] 01-01-PLAN.md — Jekyll foundation with config, Gemfile, and warm neutrals SASS design system
- [x] 01-02-PLAN.md — Site structure with default layout, header, footer, and navigation
- [x] 01-03-PLAN.md — Privacy policy page with full data practice disclosures
- [x] 01-04-PLAN.md — Terms of service page with exam disclaimer and legal terms
- [x] 01-05-PLAN.md — Deploy to GitHub Pages and verify live URLs

### Phase 2: Support & FAQ
**Goal**: Users can find support contact information and clear account deletion instructions
**Depends on**: Phase 1
**Requirements**: SUPP-01, SUPP-02, SUPP-03, SUPP-04
**Success Criteria** (what must be TRUE):
  1. Support page is accessible at ordtegl-public.github.io/support/ with stable URL
  2. User can find contact email (alb+ordtegl@andrewlb.com) displayed prominently
  3. User can read step-by-step account deletion instructions
  4. User can find answers to common questions in FAQ section
**Plans:** 1 plan

Plans:
- [x] 02-01-PLAN.md — Support page with contact info, account deletion, and FAQ

### Phase 3: Landing Page
**Goal**: Potential users can discover the app, understand its value, and download from App Store
**Depends on**: Phase 2
**Requirements**: LAND-01, LAND-02, LAND-03, LAND-04, LAND-05, LAND-06
**Success Criteria** (what must be TRUE):
  1. Landing page is accessible at ordtegl-public.github.io/ (root URL)
  2. User can read clear app description and understand value proposition
  3. User can click App Store download badge/link to download the app
  4. User can view at least 3 app screenshots showing key features
  5. User can see exam prep disclaimer visible on landing page
**Plans:** 1 plan

Plans:
- [ ] 03-01-PLAN.md — Landing page with hero, features, screenshots, and App Store link

### Phase 4: Press Kit & Attribution
**Goal**: Media can access press resources and legal attributions are properly displayed
**Depends on**: Phase 3
**Requirements**: PRESS-01, PRESS-02, PRESS-03, PRESS-04, PRESS-05, ATTR-01, ATTR-02
**Success Criteria** (what must be TRUE):
  1. Press kit page is accessible at ordtegl-public.github.io/press/ with stable URL
  2. User can download app icon in multiple sizes
  3. User can download high-resolution app screenshots
  4. User can copy short and long app descriptions
  5. User can see OpenSubtitles and COR attributions if required by licenses
**Plans**: TBD

Plans:
- [ ] TBD during planning

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Legal Pages | 5/5 | Complete | 2026-01-31 |
| 2. Support & FAQ | 1/1 | Complete | 2026-01-31 |
| 3. Landing Page | 0/1 | Not started | - |
| 4. Press Kit & Attribution | 0/TBD | Not started | - |

---
*Roadmap created: 2026-01-30*
*Last updated: 2026-01-31*
