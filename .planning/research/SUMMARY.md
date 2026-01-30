# Project Research Summary

**Project:** Ordtegl iOS App Landing Page & Privacy Policy
**Domain:** Static marketing site + compliance documentation (GitHub Pages)
**Researched:** 2026-01-30
**Confidence:** HIGH

## Executive Summary

For an iOS app launching in 2026, a public website with privacy policy is not optional—it's an App Store submission requirement that causes 12% of rejections when done incorrectly. Ordtegl needs a GitHub Pages site using Jekyll 3.10.0 to host its privacy policy, landing page, and support documentation. The critical challenge is compliance: the privacy policy must accurately disclose PostHog analytics, Sign in with Apple authentication, backend progress sync, and content error reporting—and any mismatch with App Store Connect privacy labels will cause rejection.

The recommended approach is straightforward: start with Jekyll 3.10.0 + Minima theme for maximum customization of the warm neutrals color palette, create privacy policy and support pages that satisfy App Store requirements (in both Danish and English), implement in-app account deletion before submission, and test the deployed site thoroughly before linking from the app. The biggest risk is incomplete third-party data disclosure—privacy policies that say "we collect analytics" without explicitly naming PostHog and detailing what it collects are rejected.

This is a high-stakes, low-complexity project. The technology stack is simple (Jekyll on GitHub Pages), the site structure is minimal (5 pages), but getting the legal/compliance content correct is critical. One broken privacy policy link or incomplete disclosure means rejection and a 1-2 week review cycle delay.

## Key Findings

### Recommended Stack

Jekyll 3.10.0 is the only static site generator natively supported by GitHub Pages in 2026. While Jekyll 4 exists, using it requires GitHub Actions for custom builds, adding unnecessary complexity for a 5-page marketing site. The Minima theme (2.5.1) is recommended over iOS-specific themes like automatic-app-landing-page because Ordtegl requires custom warm neutral colors that match the app design—Minima's SASS variable system makes this straightforward, while pre-built themes are harder to customize.

**Core technologies:**
- **Jekyll 3.10.0:** Static site generator — only version GitHub Pages supports natively
- **Minima 2.5.1 theme:** Base theme — highly customizable via SASS for warm neutrals palette
- **GitHub Pages:** Hosting + build — free, automatic builds on push, built-in Jekyll support
- **jekyll-seo-tag:** SEO meta tags — critical for App Store search visibility
- **jekyll-sitemap:** XML sitemap — helps Google index privacy policy for search
- **SASS/SCSS:** Styling — native GitHub Pages support for design system with color tokens

**Version constraints:** GitHub Pages only supports Jekyll 3.x and a whitelist of ~15 plugins. Custom plugins require GitHub Actions (more complex). This constraint is acceptable—Jekyll 3.x has everything needed for a marketing site, and features from Jekyll 4 (incremental regeneration, better plugin system) don't matter for 5 pages.

### Expected Features

Research identified strict App Store compliance requirements that will cause rejection if missing. These aren't optional features—they're legal requirements.

**Must have (App Store compliance):**
- **Privacy Policy page:** Must disclose ALL data collection (PostHog, Sign in with Apple, backend sync, error reports) with explicit third-party mentions. Generic templates cause rejection.
- **Support/Contact page:** App Review Guidelines 1.5 requires "easy way to contact developer" with email clearly displayed
- **Account Deletion documentation:** In-app deletion is required (non-negotiable since June 2022), privacy policy must document the process
- **Danish localization:** App targets Danish users, GDPR requires privacy policy in user's language
- **Terms of Service:** Standard practice for apps with user accounts

**Should have (conversion optimization):**
- **Landing page:** Clean value proposition, App Store link, 1-3 screenshots (single primary CTA)
- **FAQ section:** Reduces support emails, builds confidence (5-8 common questions)
- **Press kit:** App icon, screenshots, descriptions for journalists/bloggers (post-launch when seeking press)

**Defer (nice-to-have):**
- **Demo video:** Increases conversion 80%+ but requires production time
- **Multi-language beyond Danish/English:** Only needed if significant user base speaks other languages
- **Newsletter capture:** Nice-to-have but adds friction if required before download

**Anti-features to avoid:**
- Navigation header with multiple links (distracts from App Store download goal)
- Multiple competing CTAs (paradox of choice reduces conversion)
- Generic privacy policy templates (cause rejection if they don't match actual data practices)
- "Contact support to delete account" (violates guidelines—must be in-app)

### Architecture Approach

For a 5-page static site, the optimal Jekyll architecture is intentionally simple: flat page structure with content in `_pages/`, shared layouts in `_layouts/`, minimal includes (header/footer/CTA only), and design tokens managed via SASS variables in `_sass/`. This balances simplicity (no unnecessary abstraction) with maintainability (centralized design system, easy to extend if the site grows to 10-20 pages).

**Major components:**
1. **Design System (_sass/):** SASS variables for warm neutrals palette (cream, terracotta, warm grays), semantic color tokens ($color-accent not $color-terracotta), typography scale, spacing system
2. **Page Structure (_pages/):** Privacy policy, terms, support, press kit as markdown files with front matter controlling permalinks (/privacy/, /terms/, etc.)
3. **Layout (_layouts/default.html):** Single shared layout with header/footer includes, conditional sections based on page front matter
4. **Asset Organization (assets/):** CSS compiled from SASS, images (app icon, screenshots), press kit resources

**Key patterns:**
- Pretty permalinks (/privacy/ not /privacy.html) for clean URLs
- Data-driven navigation (_data/navigation.yml as single source of truth)
- Mobile-first responsive design (base styles mobile, desktop overrides)
- Self-hosted resources only (no Google Fonts CDN or external analytics on privacy policy site)

**Critical constraint:** GitHub Pages builds in safe mode, only allowing whitelisted plugins. Custom plugins require GitHub Actions. For this project, whitelisted plugins (jekyll-seo-tag, jekyll-sitemap, jekyll-feed) are sufficient.

### Critical Pitfalls

**1. Inaccessible Privacy Policy Link (12% rejection rate)**
Developers put privacy policy links in obscure locations or assume App Store Connect metadata is sufficient. Apple reviewers expect to find it within 2 taps from main screen. Prevention: Add link in Settings > Privacy Policy AND on login/signup screen, use clear label "Privacy Policy" not "Legal".

**2. Incomplete Third-Party Data Disclosure (PostHog)**
Privacy policy doesn't explicitly name PostHog or detail what it collects. Generic "we use analytics" statements cause rejection. PostHog iOS SDK collects: Application Opened/Backgrounded events, device properties (OS, model), anonymous user IDs, IP addresses (unless anonymized). Prevention: Privacy policy must state "We use PostHog, a third-party analytics service" and list specific data types, provide opt-out mechanism, link to PostHog's privacy policy. Must match App Store Connect privacy labels exactly.

**3. Missing In-App Account Deletion**
Apps using Sign in with Apple (creating accounts) must provide in-app account deletion. Email support or website deletion is NOT sufficient—guaranteed rejection. Enforcement started June 2022, still actively enforced. Prevention: Settings > Account > Delete Account button (red/destructive), confirmation dialog explaining consequences, backend endpoint to delete progress data and revoke Sign in with Apple tokens.

**4. Privacy Policy Not in Danish**
App targets Danish users but privacy policy only in English. GDPR requires privacy policy in user's language. Danish Data Protection Authority enforcement risk. Prevention: Create Danish translation of complete privacy policy, use legal translator for accuracy, provide language selector or auto-detect.

**5. Broken Privacy Policy Link After Deployment**
Link works in development but breaks in production (404, HTTPS certificate issues, DNS problems). GitHub Pages HTTPS certificate provisioning can fail with custom domains if DNS misconfigured or Cloudflare proxy enabled during setup. Prevention: Test from multiple devices, verify HTTPS certificate valid, wait 10-15 minutes for DNS propagation, don't use Cloudflare orange-cloud during initial certificate generation, set up uptime monitoring.

**Additional moderate risks:**
- Incomplete Sign in with Apple disclosure (email relay must be explained)
- Vague content error report data handling (must specify what's collected)
- No data retention/deletion policy (GDPR Article 17 requires deletion timeline)
- Privacy Manifest (PrivacyInfo.xcprivacy) missing (required since May 2024)
- Generic privacy policy template (must be specific to Ordtegl's data practices)

## Implications for Roadmap

Based on research, this project has clear dependency chain: privacy policy content must be written first (requires backend data storage decisions), site must be deployed and tested before app submission, and app implementation (account deletion, analytics opt-out) must be complete before App Store submission.

### Phase 1: Privacy Policy Foundation
**Rationale:** Privacy policy content is the critical path—nothing else can proceed until data practices are documented. This phase establishes WHAT data is collected, determining what must be disclosed in both website and app.

**Delivers:**
- Privacy policy pages (Danish + English)
- Terms of service
- Support/contact page
- Documented data practices (PostHog config, backend storage, error reports)

**Addresses:**
- App Store compliance requirements (Guidelines 5.1.1, 1.5)
- GDPR legal requirements
- Danish localization

**Avoids:**
- Pitfall 2 (incomplete third-party disclosure)
- Pitfall 4 (missing Danish translation)
- Pitfall 10 (generic template)

**Research needs:** LOW - Requirements are well-documented in official Apple guidelines and GDPR regulations. No additional research needed.

### Phase 2: Site Structure & Deployment
**Rationale:** With privacy policy content complete, build the Jekyll site and deploy to GitHub Pages. This must happen before app implementation so the privacy policy URL can be linked from the app.

**Delivers:**
- Jekyll 3.10.0 site with Minima theme
- Warm neutrals SASS design system
- Privacy/terms/support pages deployed
- Custom domain with HTTPS certificate
- Landing page with App Store link placeholder

**Uses:**
- Jekyll 3.10.0, Minima theme, GitHub Pages
- jekyll-seo-tag, jekyll-sitemap plugins
- SASS for design tokens

**Implements:**
- Flat page structure (_pages/)
- Single default layout
- Design system (_sass/ with warm neutrals palette)

**Avoids:**
- Pitfall 5 (broken privacy policy link)
- Pitfall 13 (Jekyll build failures)
- Pitfall 14 (Cloudflare HTTPS conflicts)

**Research needs:** LOW - Jekyll and GitHub Pages are well-documented. Standard patterns apply.

### Phase 3: App Compliance Implementation
**Rationale:** With privacy policy site live, implement required in-app features. This phase unblocks App Store submission.

**Delivers:**
- Privacy policy links in app (Settings + login screen)
- In-app account deletion functionality
- Analytics opt-out toggle
- Privacy Manifest (PrivacyInfo.xcprivacy)
- GDPR consent dialog on first launch

**Addresses:**
- Account deletion requirement (Guideline 5.1.1(v))
- Privacy policy accessibility (Guideline 5.1.1(i))
- Privacy Manifest (required since May 2024)
- GDPR consent requirements

**Avoids:**
- Pitfall 1 (inaccessible privacy policy)
- Pitfall 3 (missing account deletion)
- Pitfall 9 (missing privacy manifest)
- Pitfall 12 (opt-out not implemented)

**Research needs:** MEDIUM - Backend account deletion endpoint needs design, Sign in with Apple token revocation requires API research. Consider `/gsd:research-phase` for account deletion flow.

### Phase 4: Landing Page & Press Kit
**Rationale:** With compliance complete, focus on conversion optimization and press coverage. This phase improves effectiveness but isn't required for submission.

**Delivers:**
- Landing page with value proposition, screenshots, CTA
- Press kit page with app icon, descriptions, brand assets
- FAQ section
- Optional: demo video

**Addresses:**
- Conversion optimization (App Store downloads)
- Press coverage enablement
- User support (FAQ reduces email volume)

**Avoids:**
- Anti-features (multiple CTAs, complex navigation, email gates)
- Pitfall 15 (external resource loading on privacy site)

**Research needs:** NONE - Standard landing page patterns, no technical complexity.

### Phase Ordering Rationale

1. **Privacy policy first:** Legal content determines what app must implement. Can't build app features before knowing what to disclose.

2. **Site deployment second:** Privacy policy URL must exist before app can link to it. Testing HTTPS certificate and DNS takes time (up to 24 hours).

3. **App implementation third:** In-app features (account deletion, analytics opt-out) depend on privacy policy being deployed. Account deletion must work before submission.

4. **Landing page last:** Conversion optimization is important but not blocking. Can iterate after launch based on analytics.

**Dependency chain:** Privacy content → Site deployment → Privacy URL → App implementation → Submission

**Critical path:** Phases 1-3 are mandatory for App Store submission. Phase 4 can be deferred to post-launch.

### Research Flags

**Phases needing deeper research during planning:**
- **Phase 3 (Account Deletion):** Backend account deletion endpoint design, Sign in with Apple token revocation via Apple REST API, data deletion from Railway backend. Consider `/gsd:research-phase backend-account-deletion` to research proper implementation.

**Phases with standard patterns (skip research):**
- **Phase 1 (Privacy Policy):** Template structure well-documented, official Apple examples available
- **Phase 2 (Jekyll Site):** GitHub Pages + Jekyll 3.x is extensively documented, no novel patterns
- **Phase 4 (Landing Page):** Standard marketing site patterns, no technical complexity

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Jekyll 3.10.0 version verified via GitHub Pages versions API, plugin support confirmed via official docs |
| Features | HIGH | App Store requirements verified via official Apple Developer documentation (Guidelines 5.1.1, 1.5, privacy labels mandatory since 2020) |
| Architecture | HIGH | Jekyll directory structure and GitHub Pages constraints verified via official docs, SASS organization follows best practices |
| Pitfalls | HIGH | Rejection rates (12% for privacy violations Q1 2025) from community data, technical issues (HTTPS certificates, DNS) from GitHub support threads |

**Overall confidence:** HIGH

### Gaps to Address

**Backend data storage details:** Privacy policy requires specifics on what progress sync data is stored on Railway backend, retention periods, and deletion timeline. This information must be gathered during Phase 1 (Privacy Policy) to ensure accurate disclosures.

**PostHog exact configuration:** Research assumed default PostHog iOS SDK behavior (anonymous users, application lifecycle events). Actual Ordtegl config may differ (custom anonymization, disabled features). Verify PostHogConfig settings during Phase 1 to ensure privacy policy matches reality.

**Content error report implementation:** Privacy policy must explain what data is included in error reports (content ID, user ID, device info?). Implementation details needed during Phase 1 before writing privacy policy section.

**Danish legal review:** Research covers GDPR and Danish Data Protection Act requirements, but not reviewed by Danish legal professional. Recommend legal review of privacy policy before launch to ensure compliance with Datatilsynet regulations.

**Custom domain availability:** Assumed Ordtegl has or will purchase custom domain (ordtegl.app or ordtegl.com). If using username.github.io subdomain instead, URLs and DNS setup will differ. Confirm domain during Phase 2.

**Support email infrastructure:** Privacy policy requires contact email (alb+ordtegl@andrewlb.com or privacy@ordtegl.com). Confirm mailbox exists and is monitored—GDPR requires 30-day response time for privacy requests.

## Sources

### Primary (HIGH confidence)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) — App Store requirements (privacy policy, account deletion, support contact)
- [GitHub Pages Versions API](https://pages.github.com/versions.json) — Jekyll 3.10.0 confirmation, plugin whitelist
- [Jekyll Official Documentation](https://jekyllrb.com/docs/) — Directory structure, permalinks, SASS, themes
- [PostHog Documentation](https://posthog.com/docs/) — iOS SDK data collection, privacy controls, GDPR compliance
- [Danish Data Protection Act](https://www.datatilsynet.dk/english/legislation/) — GDPR requirements for Danish apps

### Secondary (MEDIUM confidence)
- iOS App Store Review Guidelines 2026 analysis (crustlab.com) — 12% rejection rate for privacy violations Q1 2025
- PostHog iOS SDK default behavior — Application lifecycle events, anonymous user IDs (verified in docs but should confirm actual config)
- Landing page best practices research — Conversion optimization (multiple sources, consensus)
- Jekyll style guide (Ben Balter) — Anti-patterns to avoid (includes philosophy, established patterns)

### Tertiary (LOW confidence)
- Vocabulary learning app features — Table stakes features for competitors (Duolingo, Memrise), not critical for landing page

---
*Research completed: 2026-01-30*
*Ready for roadmap: yes*
