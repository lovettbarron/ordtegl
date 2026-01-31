# Phase 02: Support & FAQ - Research

**Researched:** 2026-01-31
**Domain:** Support page content structure (Jekyll/GitHub Pages)
**Confidence:** HIGH

## Summary

Phase 2 creates a support page at `/support/` with contact information, account deletion instructions, and FAQ section. The research confirms this follows established patterns from Phase 1: same Jekyll layout structure, same design tokens, same navigation patterns.

The key research findings center on FAQ display format (accordions vs visible), content structure best practices, and Apple/GDPR account deletion requirements. The existing site patterns from Phase 1 provide all technical foundations needed - this phase is primarily a content creation task.

**Primary recommendation:** Create a single support.md page using the existing default layout, with contact section, account deletion section, and FAQ section using native HTML `<details>`/`<summary>` elements for collapsible FAQ items.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Jekyll | 3.10.0 | Static site generator | Already in use from Phase 1 |
| github-pages gem | Current | Dependency management | Already in use from Phase 1 |
| SASS | Built-in | CSS preprocessor | Already in use from Phase 1 |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| HTML5 details/summary | Native | Accordion/collapsible FAQ | For FAQ section if accordions chosen |
| kramdown | 2.4.0 | Markdown to HTML | Already in use via Jekyll |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Native details/summary | CSS checkbox hack | CSS hack more complex, details/summary has better accessibility support |
| Native details/summary | JavaScript accordion | JS adds complexity, native is simpler and more accessible |
| All FAQ visible | Accordions | Accordions save space but add interaction cost |

**Installation:** No additional packages needed - all dependencies from Phase 1 are sufficient.

## Architecture Patterns

### Recommended Project Structure
```
_pages/
└── support.md           # Single support page with all sections
_sass/
├── _variables.scss      # Existing design tokens
├── _base.scss           # Existing base styles
├── _layout.scss         # Existing layout styles
└── _components.scss     # NEW: Optional accordion styles if needed
_data/
└── navigation.yml       # Add Support link
```

### Pattern 1: Single-Page Multi-Section Layout
**What:** All support content (contact, deletion, FAQ) on one page with anchor links
**When to use:** When content is related and users benefit from seeing full context
**Example:**
```markdown
---
layout: default
title: Support
permalink: /support/
---

# Support

## Contact Us {#contact}
[Contact content]

## Account Deletion {#account-deletion}
[Deletion instructions]

## Frequently Asked Questions {#faq}
[FAQ content]
```

### Pattern 2: Native HTML Accordion for FAQ (Recommended)
**What:** Using `<details>` and `<summary>` for collapsible FAQ items
**When to use:** FAQ section with 5+ questions to reduce initial page length
**Example:**
```html
<details>
  <summary>How do I create an account?</summary>
  <p>You can create an account by signing in with Apple...</p>
</details>
```
**Source:** [MDN details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details), [Hassell Inclusion](https://www.hassellinclusion.com/blog/accessible-accordions-part-2-using-details-summary/)

### Pattern 3: All-Visible FAQ (Alternative)
**What:** All FAQ questions and answers visible without interaction
**When to use:** Fewer than 5 questions, or when users need to scan/search quickly
**Example:**
```markdown
### How do I create an account?

You can create an account by signing in with Apple...

### How do I reset my progress?

Go to Settings > Reset Progress...
```

### Anti-Patterns to Avoid
- **Nested interactive elements in summary:** Don't put links or buttons inside `<summary>` tags - causes accessibility issues
- **Hiding critical information in accordions:** Account deletion steps should be fully visible, not collapsed
- **Relying solely on color for open/closed state:** Use visual indicators (arrows, +/-) for accordion state

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Collapsible sections | JavaScript toggle | Native `<details>`/`<summary>` | Built-in accessibility, keyboard support, no JS required |
| Accordion styling | Complex CSS animations | Simple CSS on `[open]` attribute | Browser handles state, you just style it |
| Anchor link scrolling | JavaScript smooth scroll | HTML `id` attributes | Works everywhere, no JS needed |
| Contact email display | Complex obfuscation | Plain text with mailto link | Modern spam filters effective, obfuscation hurts UX |

**Key insight:** Phase 2 is a content page, not a technical feature. Use the simplest patterns that work.

## Common Pitfalls

### Pitfall 1: Hiding Account Deletion Instructions
**What goes wrong:** Putting deletion steps in collapsed accordion makes them hard to find
**Why it happens:** Trying to keep page short
**How to avoid:** Keep deletion instructions fully visible - Apple and GDPR require easy-to-find deletion process
**Warning signs:** Users emailing support asking how to delete accounts
**Source:** [Apple Developer - Account Deletion](https://developer.apple.com/support/offering-account-deletion-in-your-app/)

### Pitfall 2: Vague FAQ Answers
**What goes wrong:** FAQ answers reference other pages without being self-contained
**Why it happens:** Trying to avoid duplication
**How to avoid:** Make each FAQ answer complete enough to stand alone (per CONTEXT.md decision)
**Warning signs:** Users clicking through to privacy/terms pages to understand FAQ answers

### Pitfall 3: Missing Exam Disclaimer in FAQ
**What goes wrong:** FAQ about exam prep doesn't repeat the disclaimer
**Why it happens:** Assuming users read the Terms of Service
**How to avoid:** Include exam disclaimer prominently in FAQ section (per CONTEXT.md decision)
**Warning signs:** Users misunderstanding app's relationship to PD2/PD3 exams

### Pitfall 4: Inaccessible Accordion Implementation
**What goes wrong:** Custom accordion breaks keyboard navigation or screen reader support
**Why it happens:** Using CSS-only hacks or custom JavaScript
**How to avoid:** Use native `<details>`/`<summary>` elements
**Warning signs:** Can't navigate FAQ with Tab key, screen readers don't announce state
**Source:** [Scott O'Hara - Details and Summary](https://www.scottohara.me/blog/2022/09/12/details-summary.html)

### Pitfall 5: Contact Email Without mailto Link
**What goes wrong:** Users can't click to email, must copy/paste
**Why it happens:** Oversight or spam concerns
**How to avoid:** Use `<a href="mailto:alb+ordtegl@andrewlb.com">` wrapper
**Warning signs:** Higher friction for support contact

## Code Examples

Verified patterns from official sources:

### Support Page Front Matter
```yaml
---
layout: default
title: Support
permalink: /support/
description: Get help with Ordtegl - contact us, delete your account, or find answers to common questions.
---
```

### Contact Section
```markdown
## Contact Us {#contact}

Have a question or need help? We're here to assist you.

**Email:** [alb+ordtegl@andrewlb.com](mailto:alb+ordtegl@andrewlb.com)

We aim to respond to all inquiries within 7 business days.
```

### Account Deletion Section
```markdown
## Account Deletion {#account-deletion}

You can delete your Ordtegl account and all associated data at any time.

### How to delete your account

1. Open Ordtegl on your iOS device
2. Navigate to **Settings**
3. Tap **Account**
4. Tap **Delete Account**
5. Confirm deletion

### What happens when you delete your account

Your account and data will be permanently deleted. This includes:

- All learning progress data
- Vocabulary completion records
- FSRS scheduling data
- Account authentication information

**Note:** Account deletion is immediate and irreversible. You will lose all learning progress.

If you have trouble deleting your account through the app, contact us at [alb+ordtegl@andrewlb.com](mailto:alb+ordtegl@andrewlb.com) and we will manually delete your account within 7 business days.
```

### FAQ with Details/Summary (If Accordions Chosen)
```html
## Frequently Asked Questions {#faq}

<details>
  <summary>What is Ordtegl?</summary>

Ordtegl is a Danish vocabulary learning app that helps you build your vocabulary using spaced repetition...

</details>

<details>
  <summary>Is Ordtegl affiliated with PD2 or PD3 exam bodies?</summary>

**No.** Ordtegl is not affiliated with, endorsed by, or officially connected to any Danish language examination bodies, including Prøveudvalget for Dansk (responsible for PD2, PD3, and other official tests). Ordtegl is supplementary study material only.

</details>
```

### FAQ Without Accordions (If All-Visible Chosen)
```markdown
## Frequently Asked Questions {#faq}

### What is Ordtegl?

Ordtegl is a Danish vocabulary learning app that helps you build your vocabulary using spaced repetition...

### Is Ordtegl affiliated with PD2 or PD3 exam bodies?

**No.** Ordtegl is not affiliated with, endorsed by, or officially connected to any Danish language examination bodies...
```

### Accordion Styling (If Using Details/Summary)
```scss
// _sass/_components.scss - Add if using details/summary

// FAQ Accordion styling
details {
  border: 1px solid $color-border;
  border-radius: $border-radius-sm;
  margin-bottom: $spacing-sm;
  background-color: $color-surface;

  &[open] {
    summary {
      border-bottom: 1px solid $color-border;
    }
  }
}

summary {
  padding: $spacing-sm $spacing-md;
  cursor: pointer;
  font-weight: 600;
  color: $color-text-primary;
  list-style: none; // Remove default arrow

  &::before {
    content: "+";
    margin-right: $spacing-sm;
    font-weight: normal;
  }

  &:hover {
    color: $color-accent;
  }

  &:focus {
    outline: 2px solid $color-accent;
    outline-offset: 2px;
  }
}

details[open] summary::before {
  content: "−";
}

details > *:not(summary) {
  padding: $spacing-sm $spacing-md;
}
```

### Navigation Update
```yaml
# _data/navigation.yml - Add Support link
- name: Home
  url: /
- name: Privacy
  url: /privacy/
- name: Terms
  url: /terms/
- name: Support
  url: /support/
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| JS accordion | Native details/summary | 2020+ | Modern browsers fully support, better accessibility |
| Email obfuscation | Plain mailto links | 2020+ | Spam filters effective, obfuscation hurts UX |
| Separate FAQ page | FAQ section on support page | N/A | Single page reduces navigation for small sites |

**Deprecated/outdated:**
- JavaScript-based accordions for simple use cases (native HTML preferred)
- Complex contact forms for solo developer apps (email sufficient)
- Email address obfuscation (modern spam filters handle this)

## Open Questions

Things that couldn't be fully resolved:

1. **FAQ organization: grouped vs flat?**
   - What we know: CONTEXT.md leaves this to Claude's discretion
   - What's unclear: Whether the number of questions warrants categories
   - Recommendation: Start with flat list; if >10 questions, consider grouping by topic (App Basics, Account & Technical, Exam Prep)

2. **Accordion vs all-visible FAQ?**
   - What we know: CONTEXT.md leaves this to Claude's discretion
   - What's unclear: How many FAQ questions will be included
   - Recommendation: Use native details/summary accordions - allows comprehensive FAQ without overwhelming page length

3. **Response time expectations?**
   - What we know: CONTEXT.md leaves this to Claude's discretion
   - What's unclear: What response time can realistically be promised
   - Recommendation: Include "within 7 business days" (consistent with Privacy Policy language)

## Sources

### Primary (HIGH confidence)
- Existing codebase (`_layouts/default.html`, `_sass/_variables.scss`, `_sass/_layout.scss`) - Established patterns
- [Apple Developer - Account Deletion](https://developer.apple.com/support/offering-account-deletion-in-your-app/) - Apple requirements
- [MDN - details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) - Native HTML reference

### Secondary (MEDIUM confidence)
- [Hassell Inclusion - Accessible Accordions](https://www.hassellinclusion.com/blog/accessible-accordions-part-2-using-details-summary/) - Accessibility best practices
- [Scott O'Hara - Details and Summary](https://www.scottohara.me/blog/2022/09/12/details-summary.html) - Accessibility quirks
- [Jekyll Codex - Accordion](https://jekyllcodex.org/without-plugin/accordion/) - Jekyll-specific implementation
- [Zendesk - FAQ Best Practices](https://www.zendesk.com/blog/the-best-faq-page-examples-and-how-to-make-your-own/) - FAQ page structure

### Tertiary (LOW confidence)
- [Shopify - FAQ Page Guide](https://www.shopify.com/blog/120928069-how-to-create-faq-page) - General FAQ guidance
- [WebAIM - 2026 Predictions](https://webaim.org/blog/2026-predictions/) - Accessibility trends

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Using established Phase 1 patterns
- Architecture: HIGH - Simple content page using existing layout
- Pitfalls: HIGH - Based on Apple requirements and accessibility standards

**Research date:** 2026-01-31
**Valid until:** 60+ days (stable patterns, no fast-moving dependencies)
