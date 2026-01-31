# Requirements: Ordtegl Public Site

**Defined:** 2026-01-30
**Core Value:** Provide comprehensive, accessible legal compliance pages for App Store submission while giving the app a professional public presence.

## v1 Requirements

### Privacy Policy

- [ ] **PRIV-01**: Privacy policy page accessible at stable URL (/privacy/)
- [ ] **PRIV-02**: Quick summary section at top (TL;DR of key points)
- [ ] **PRIV-03**: Plain language style throughout (not legalese)
- [ ] **PRIV-04**: PostHog analytics disclosure — accurately state user identification is enabled for cohort analysis, data linked to user ID
- [ ] **PRIV-05**: PostHog EU-US data transfer disclosure (US company, reference DPA)
- [ ] **PRIV-06**: Backend sync disclosure — Railway-hosted, progress data only, Sign in with Apple auth
- [ ] **PRIV-07**: Content error reporting disclosure — what data is collected when user reports vocabulary errors
- [ ] **PRIV-08**: User rights section — access, deletion, opt-out of analytics
- [ ] **PRIV-09**: Account deletion instructions — how to delete account and all data
- [ ] **PRIV-10**: Data retention policy — how long data is kept
- [ ] **PRIV-11**: GDPR compliance — data controller info, legal basis for processing
- [ ] **PRIV-12**: Contact information for privacy inquiries (alb+ordtegl@andrewlb.com)
- [ ] **PRIV-13**: Sign in with Apple data handling disclosure
- [ ] **PRIV-14**: Children's privacy section (app not intended for children under 13)

### Terms of Service

- [ ] **TERMS-01**: Terms of service page accessible at stable URL (/terms/)
- [ ] **TERMS-02**: Liability limitations — no warranty for educational accuracy
- [ ] **TERMS-03**: Exam preparation disclaimer — "Not affiliated with or endorsed by official Danish exam bodies (PD2, PD3). Supplementary study material only."
- [ ] **TERMS-04**: Acceptable use policy
- [ ] **TERMS-05**: Danish jurisdiction clause
- [ ] **TERMS-06**: Service modification rights
- [ ] **TERMS-07**: User responsibilities
- [ ] **TERMS-08**: Intellectual property notice

### Landing Page

- [x] **LAND-01**: Landing page at root URL (/)
- [x] **LAND-02**: Clear app description and value proposition
- [x] **LAND-03**: App Store download badge/link
- [x] **LAND-04**: App screenshots (at least 3)
- [x] **LAND-05**: Feature highlights section with key features
- [x] **LAND-06**: Exam prep disclaimer visible on landing page

### Support

- [ ] **SUPP-01**: Support page accessible at stable URL (/support/)
- [ ] **SUPP-02**: Contact email displayed (alb+ordtegl@andrewlb.com)
- [ ] **SUPP-03**: Account deletion instructions (step-by-step)
- [ ] **SUPP-04**: FAQ section with common questions

### Press Kit

- [x] **PRESS-01**: Press kit page accessible at stable URL (/press/)
- [x] **PRESS-02**: App icon in multiple sizes (downloadable)
- [x] **PRESS-03**: App screenshots (high resolution, downloadable)
- [x] **PRESS-04**: Short app description (1-2 sentences)
- [x] **PRESS-05**: Long app description (full marketing copy)

### Site Infrastructure

- [ ] **SITE-01**: Jekyll site structure compatible with GitHub Pages
- [ ] **SITE-02**: Warm neutrals design aesthetic (creams, soft grays, terracotta)
- [ ] **SITE-03**: Mobile-responsive layout
- [ ] **SITE-04**: Deployed to GitHub Pages
- [ ] **SITE-05**: Deploy after each phase completion

### Attribution (Conditional)

- [x] **ATTR-01**: COR (Det Centrale Ordregister) attribution (required by CC BY-NC-ND license)

## v2 Requirements

### Future Enhancements

- **LAND-07**: Demo video showing app in action
- **LAND-08**: User testimonials/social proof
- **PRESS-06**: Brand guidelines document
- **PRESS-07**: Founder bio/story
- **SITE-06**: Custom domain (ordtegl.app or similar)
- **SITE-07**: Multi-language support (Danish version)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Contact form | Email-only per user preference, simpler |
| Blog/news section | Not needed for MVP |
| Analytics on website | Unnecessary complexity for static site |
| User accounts on website | No interactive features needed |
| Cookie consent banner | Static site with no tracking |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PRIV-01 | Phase 1 | Complete |
| PRIV-02 | Phase 1 | Complete |
| PRIV-03 | Phase 1 | Complete |
| PRIV-04 | Phase 1 | Complete |
| PRIV-05 | Phase 1 | Complete |
| PRIV-06 | Phase 1 | Complete |
| PRIV-07 | Phase 1 | Complete |
| PRIV-08 | Phase 1 | Complete |
| PRIV-09 | Phase 1 | Complete |
| PRIV-10 | Phase 1 | Complete |
| PRIV-11 | Phase 1 | Complete |
| PRIV-12 | Phase 1 | Complete |
| PRIV-13 | Phase 1 | Complete |
| PRIV-14 | Phase 1 | Complete |
| TERMS-01 | Phase 1 | Complete |
| TERMS-02 | Phase 1 | Complete |
| TERMS-03 | Phase 1 | Complete |
| TERMS-04 | Phase 1 | Complete |
| TERMS-05 | Phase 1 | Complete |
| TERMS-06 | Phase 1 | Complete |
| TERMS-07 | Phase 1 | Complete |
| TERMS-08 | Phase 1 | Complete |
| SITE-01 | Phase 1 | Complete |
| SITE-02 | Phase 1 | Complete |
| SITE-03 | Phase 1 | Complete |
| SITE-04 | Phase 1 | Complete |
| SITE-05 | Phase 1 | Complete |
| SUPP-01 | Phase 2 | Complete |
| SUPP-02 | Phase 2 | Complete |
| SUPP-03 | Phase 2 | Complete |
| SUPP-04 | Phase 2 | Complete |
| LAND-01 | Phase 3 | Complete |
| LAND-02 | Phase 3 | Complete |
| LAND-03 | Phase 3 | Complete |
| LAND-04 | Phase 3 | Complete |
| LAND-05 | Phase 3 | Complete |
| LAND-06 | Phase 3 | Complete |
| PRESS-01 | Phase 4 | Complete |
| PRESS-02 | Phase 4 | Complete |
| PRESS-03 | Phase 4 | Complete |
| PRESS-04 | Phase 4 | Complete |
| PRESS-05 | Phase 4 | Complete |
| ATTR-01 | Phase 4 | Complete |
| ATTR-02 | Phase 4 | Complete |

**Coverage:**
- v1 requirements: 33 total
- Mapped to phases: 33
- Unmapped: 0

---
*Requirements defined: 2026-01-30*
*Last updated: 2026-01-31 after Phase 4 completion*
