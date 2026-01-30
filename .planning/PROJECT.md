# Ordtegl Public Site

## What This Is

A Jekyll-based public website for the Ordtegl Danish vocabulary learning iOS app, hosted on GitHub Pages. Provides App Store compliance pages (privacy policy, terms of service), a landing page for potential users, support contact, and press resources.

## Core Value

Provide a comprehensive, accessible privacy policy that satisfies App Store requirements and builds user trust, while giving the app a professional public presence.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Landing page with app description and App Store link
- [ ] Privacy policy covering all data collection (PostHog analytics, backend sync, content error reporting)
- [ ] Terms of service for app usage
- [ ] Support page with contact email
- [ ] Press kit with screenshots, app icon, and description
- [ ] Jekyll site structure compatible with GitHub Pages
- [ ] Automatic deployment to GitHub Pages after each phase

### Out of Scope

- Contact form — email only per user preference
- Blog/news section — not needed for MVP
- Multi-language support — English only for now
- Custom domain — using github.io subdomain initially
- Analytics on the website itself — unnecessary complexity

## Context

**Parent app (Ordtegl):**
- iOS app for learning Danish vocabulary with FSRS spaced repetition
- 3,500 vocabulary items across 32 CEFR-aligned levels (A1-B2)
- Published from Danish App Store account
- Warm neutrals design palette (creams, soft grays, terracotta accents)

**Data practices to document:**
- PostHog analytics: Comprehensive navigation/usage tracking, fully anonymized, not tied to user accounts, opt-out available in app settings
- Backend sync (Railway): Progress data only, Sign in with Apple authentication, users can delete account and resync anytime
- Content error reporting: User-initiated, sends content context to PostHog for quality improvement

**Support:**
- Email: alb+ordtegl@andrewlb.com

**Deployment:**
- GitHub Pages from this repo (ordtegl-public)
- Deploy after every phase

## Constraints

- **Hosting**: GitHub Pages (Jekyll with github-pages gem)
- **Design**: Should echo Ordtegl's warm neutrals aesthetic
- **Privacy policy**: Must be comprehensive and legible for App Store review
- **Deployment**: Changes pushed to GitHub after each phase

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Jekyll over other SSGs | Native GitHub Pages support, no build action needed | — Pending |
| Email-only support | User preference, simpler than contact form | — Pending |
| Single language (English) | Reduces scope, can add Danish later if needed | — Pending |

---
*Last updated: 2026-01-30 after initialization*
