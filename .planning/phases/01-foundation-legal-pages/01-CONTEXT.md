# Phase 1: Foundation & Legal Pages - Context

**Gathered:** 2026-01-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver a live Jekyll site on GitHub Pages with privacy policy and terms of service pages that satisfy App Store requirements. Site uses warm neutrals design aesthetic (creams, soft grays, terracotta) and displays correctly on mobile. URLs must be stable: /privacy/ and /terms/.

</domain>

<decisions>
## Implementation Decisions

### Document tone & readability
- Standard legal tone — formal and precise, traditional legal document style
- Last updated date displayed prominently at top of document
- Table of contents with anchor links for navigation within documents

### Privacy policy structure
- Organize sections by purpose (How We Improve the App, How We Store Your Data, How We Identify You, etc.)
- Moderate detail on PostHog analytics — list categories of events tracked (app opens, feature usage) without exhaustive specifics
- General data retention policy — data retained while account is active plus reasonable period after

### Claude's Discretion
- Whether to include brief plain-language summaries at the start of major sections
- Whether to include a dedicated COPPA/children's privacy section or brief mention (based on App Store requirements)
- Typography and spacing choices within warm neutrals aesthetic
- Mobile layout priorities and responsive breakpoints
- Terms of service section organization (not discussed — follow standard patterns)

</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches for Jekyll setup and legal document formatting.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 01-foundation-legal-pages*
*Context gathered: 2026-01-30*
