# Phase 2: Support & FAQ - Context

**Gathered:** 2026-01-31
**Status:** Ready for planning

<domain>
## Phase Boundary

Users can find support contact information and clear account deletion instructions. Delivers a single support page at /support/ with contact email, account deletion steps, and FAQ section.

</domain>

<decisions>
## Implementation Decisions

### Page structure
- Single page at /support/ — all content on one page
- Contact, FAQ, and account deletion as sections on same page
- Claude's discretion: section ordering, whether to use jump links, FAQ display format (accordions vs visible)

### Content tone
- Friendly and helpful — warm, conversational feel
- Use mix of "we/our" and "Ordtegl" — "Ordtegl" for formal mentions, "we" for conversational parts
- FAQ answers should be self-contained — no need to visit other pages to understand
- Claude's discretion: whether to include response time expectations for contact

### Account deletion
- In-app deletion flow exists — instructions describe how to use it
- Text-only instructions — no screenshots
- Simple confirmation of what happens — "Your account and data will be permanently deleted"
- Claude's discretion: wording around any waiting period or confirmation steps

### FAQ content
- Comprehensive coverage — app basics, technical/account questions, and exam prep topics
- Include exam prep disclaimer prominently — repeat that Ordtegl is not affiliated with PD2/PD3 exam bodies
- Claude's discretion: number of questions, grouping by category vs flat list

### Claude's Discretion
- Section ordering on the support page
- Whether to include jump links/table of contents
- FAQ display format (accordions vs all visible)
- Whether to mention response time expectations
- Deletion flow wording (timing/confirmation)
- Number of FAQ questions
- FAQ organization (grouped vs flat)

</decisions>

<specifics>
## Specific Ideas

- Friendly tone should match a helpful support experience — "We're here to help!" feel
- Keep FAQ answers complete without requiring users to click through to privacy policy or terms

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-support-faq*
*Context gathered: 2026-01-31*
