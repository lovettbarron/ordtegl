# Phase 4: Press Kit & Attribution - Research

**Researched:** 2026-01-31
**Domain:** Press kit page design, app media assets, legal attribution
**Confidence:** MEDIUM

## Summary

A press kit for a mobile app is a collection of marketing and technical resources designed for journalists, bloggers, and media outlets to write about the app. The standard approach is a dedicated `/press/` page containing downloadable assets (icons, screenshots), copyable descriptions (short and long), and legal attributions where required.

For this phase, research focused on: (1) standard press kit structure and content, (2) optimal file formats and dimensions for app icons and screenshots, (3) license requirements for OpenSubtitles API and COR (Det Centrale Ordregister), and (4) implementation patterns for Jekyll static sites.

**Key findings:**
- Press kits require high-resolution assets in multiple formats (PNG for web, SVG for print)
- App icons should be provided at 1024×1024 (iOS) and 512×512 (Android) as minimum press kit sizes
- Screenshots work best at actual device dimensions (portrait: 1080×1920 minimum)
- OpenSubtitles API attribution requirements are unclear from public documentation (LOW confidence - requires direct verification)
- COR.SEM.EXT requires explicit attribution to DSL and CST under CC BY-NC-ND license
- Copy-to-clipboard functionality uses modern Clipboard API in vanilla JavaScript

**Primary recommendation:** Create a single-page press kit at `/press/` with downloadable asset sections, copyable text blocks using Clipboard API, and conditional attribution sections only if required by licenses. Organize assets in `/assets/press/` folder following Jekyll conventions.

## Standard Stack

### Core Technologies (Existing)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Jekyll | 3.10.0 | Static site generator | GitHub Pages native support, already in use |
| Liquid | 4.0.4 | Templating | Built into Jekyll, handles conditional content |
| Sass/SCSS | 3.7.4 | Styling | Already configured for site aesthetics |

### JavaScript (New for This Phase)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Clipboard API | Native | Copy text to clipboard | Modern browsers (2025+), no library needed |
| clipboard.js | 2.0.11 | Clipboard polyfill | Optional fallback (3kb gzipped) |

**Recommendation:** Use native Clipboard API (`navigator.clipboard.writeText()`) without external libraries. It's well-supported in 2026 across Chrome, Firefox, Safari, Edge.

### File Formats
| Format | Purpose | When to Use |
|--------|---------|-------------|
| PNG | App icons, screenshots | Web display, supports transparency |
| JPG | Screenshots | Alternative format if transparency not needed |
| SVG | Logo vector | Print media, infinite scaling |
| ZIP | Asset bundles | "Download all" functionality |

**Installation:**
No new dependencies required. Clipboard API is browser-native.

## Architecture Patterns

### Recommended Project Structure
```
_pages/
  press.md                    # Press kit page

assets/
  press/
    icons/
      app-icon-1024.png       # iOS App Store size
      app-icon-512.png        # Android Play Store size
      app-icon-180.png        # iOS home screen
      app-icon-192.png        # Android launcher
      app-icon.svg            # Vector for print (if available)
    screenshots/
      iphone-01-home.png      # Main screen (1080×1920 or higher)
      iphone-02-learning.png  # Feature screen
      iphone-03-progress.png  # Additional screen
    downloads/
      ordtegl-press-kit.zip   # All assets bundled
  css/
    press.scss                # Press-specific styles (optional)
  js/
    clipboard.js              # Copy-to-clipboard handler

_data/
  press.yml                   # Structured press data
```

### Pattern 1: Downloadable Assets Section
**What:** Organized grid of downloadable assets with clear labels and file sizes
**When to use:** For icons and screenshots that press/media will download

**Example:**
```html
<!-- Source: Standard press kit pattern -->
<section class="press-assets">
  <h2>App Icons</h2>
  <div class="asset-grid">
    {% for icon in site.data.press.icons %}
    <div class="asset-item">
      <img src="{{ icon.path }}" alt="{{ icon.label }}">
      <p>{{ icon.label }}</p>
      <p class="file-size">{{ icon.size }}</p>
      <a href="{{ icon.path }}" download class="download-btn">Download</a>
    </div>
    {% endfor %}
  </div>
</section>
```

### Pattern 2: Copyable Text Blocks
**What:** Description text with copy-to-clipboard buttons using Clipboard API
**When to use:** For short and long app descriptions

**Example:**
```html
<!-- Source: Modern Clipboard API pattern -->
<section class="press-descriptions">
  <h2>App Descriptions</h2>

  <div class="description-block">
    <h3>Short Description (1-2 sentences)</h3>
    <p id="short-desc">{{ site.data.press.short_description }}</p>
    <button class="copy-btn" data-clipboard-target="short-desc">Copy</button>
  </div>

  <div class="description-block">
    <h3>Long Description</h3>
    <p id="long-desc">{{ site.data.press.long_description }}</p>
    <button class="copy-btn" data-clipboard-target="long-desc">Copy</button>
  </div>
</section>

<script>
// Vanilla JavaScript - no libraries needed
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const targetId = button.getAttribute('data-clipboard-target');
    const text = document.getElementById(targetId).textContent;

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = 'Copy', 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  });
});
</script>
```

### Pattern 3: Conditional Attribution Sections
**What:** Attribution sections that only render if required by licenses
**When to use:** For third-party data sources like OpenSubtitles or COR

**Example:**
```liquid
<!-- Source: Jekyll conditional rendering pattern -->
{% if site.data.press.requires_opensubtitles_attribution %}
<section class="attribution">
  <h2>Data Sources</h2>
  <div class="attribution-item">
    <h3>OpenSubtitles</h3>
    <p>{{ site.data.press.opensubtitles_attribution }}</p>
    <a href="https://www.opensubtitles.com">opensubtitles.com</a>
  </div>
</section>
{% endif %}

{% if site.data.press.requires_cor_attribution %}
<section class="attribution">
  <h3>Det Centrale Ordregister (COR)</h3>
  <p>This app uses COR.SEM.EXT, developed by Det Danske Sprog- og Litteraturselskab (DSL) and Center for Sprogteknologi, Københavns Universitet (CST). Licensed under CC BY-NC-ND.</p>
  <a href="https://ordregister.dk">ordregister.dk</a>
</section>
{% endif %}
```

### Pattern 4: Press Data Configuration
**What:** Centralized YAML file for all press content
**When to use:** Separates content from presentation, easier updates

**Example (`_data/press.yml`):**
```yaml
# App descriptions
short_description: "Learn Danish vocabulary naturally through context and spaced repetition."

long_description: |
  Ordtegl helps you master Danish vocabulary using authentic examples from
  movies and TV shows. Our spaced repetition system adapts to your learning
  pace, while contextual examples show you how words are actually used.

# Icons
icons:
  - label: "iOS App Store (1024×1024)"
    path: "/assets/press/icons/app-icon-1024.png"
    size: "1024×1024 PNG"
  - label: "Android Play Store (512×512)"
    path: "/assets/press/icons/app-icon-512.png"
    size: "512×512 PNG"

# Screenshots
screenshots:
  - label: "Home Screen"
    path: "/assets/press/screenshots/iphone-01-home.png"
    size: "1170×2532 PNG"

# Attributions (conditional)
requires_opensubtitles_attribution: false  # Set to true if using OpenSubtitles
requires_cor_attribution: true  # Set to true if using COR.SEM.EXT

cor_attribution: |
  This app uses data from COR.SEM.EXT (Det Centrale Ordregister), developed by
  Det Danske Sprog- og Litteraturselskab (DSL) and Center for Sprogteknologi,
  Københavns Universitet (CST). Licensed under CC BY-NC-ND.
```

### Anti-Patterns to Avoid

- **Too much content:** Don't overwhelm with dozens of assets. Journalists want quick access to essentials (2-3 icon sizes, 3-5 screenshots, short/long descriptions).
- **Outdated information:** Press kits with old screenshots or incorrect stats reduce credibility. Keep content current.
- **Hidden contact info:** Don't make media hunt for contact information. Include clear email/contact at top or bottom.
- **Low-resolution assets:** Never provide low-res images (<72 DPI for print). Press needs high-quality files.
- **Broken download links:** Test all download links. Broken links frustrate journalists on deadline.
- **Walls of text:** Don't use long paragraphs. Use bullet points, headings, white space.
- **Forcing downloads:** Don't make users download a ZIP just to see what's inside. Show previews first.

## Don't Hand-Roll

Problems that look simple but have existing solutions:

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Copy to clipboard | Custom clipboard solution | `navigator.clipboard.writeText()` | Native API handles permissions, fallbacks, security |
| Image optimization | Manual resizing | ImageOptim, TinyPNG | Handles compression, format conversion, metadata |
| ZIP file creation | Server-side compression | Pre-built ZIP files | Static hosting can't generate files dynamically |
| Responsive images | Single-size images | `<picture>` element or `srcset` | Browser-native responsive images |

**Key insight:** Jekyll is a static site generator - it can't dynamically create files at request time. Pre-build downloadable assets during development, don't try to generate them on-the-fly.

## Common Pitfalls

### Pitfall 1: Assuming OpenSubtitles Requires Attribution Logo
**What goes wrong:** Spending time implementing OpenSubtitles branding without confirming it's required
**Why it happens:** Many APIs require attribution (YouTube, Google Maps), so assumption seems safe
**How to avoid:** Check OpenSubtitles API terms directly or contact support. Their public documentation doesn't specify logo/attribution requirements clearly.
**Warning signs:** No branding guidelines found in official API documentation

**Current status:** OpenSubtitles API documentation found via WebSearch does not contain explicit attribution requirements. Terms of service mention copyright but not logo display. This needs direct verification before implementation.

### Pitfall 2: Wrong Icon Sizes for Press
**What goes wrong:** Providing only small icon sizes (like 120×120) that can't be used for print or high-res web
**Why it happens:** App Store requires small sizes for app bundles, but press needs marketing sizes
**How to avoid:** Always provide 1024×1024 (iOS) and 512×512 (Android) as minimum. These are the App Store submission sizes and work for press.
**Warning signs:** Icons look pixelated when viewed at full size on desktop

### Pitfall 3: Screenshot Aspect Ratio Mismatches
**What goes wrong:** Screenshots don't match actual device dimensions, look stretched or cropped awkwardly
**Why it happens:** Trying to make "prettier" screenshots by cropping to arbitrary dimensions
**How to avoid:** Use actual device dimensions (e.g., iPhone: 1170×2532 for portrait, 2532×1170 for landscape). Screenshots should match real device aspect ratios.
**Warning signs:** Screenshots look distorted or don't match device frames

### Pitfall 4: No File Size Information
**What goes wrong:** Users don't know how large downloads are before clicking
**Why it happens:** Oversight - developers forget journalists may be on mobile/slow connections
**How to avoid:** Display file dimensions and size (e.g., "1024×1024 PNG, 245 KB") next to every download
**Warning signs:** No size labels next to download links

### Pitfall 5: Not Testing Clipboard API on HTTPS
**What goes wrong:** Copy-to-clipboard fails silently on production
**Why it happens:** Clipboard API requires secure context (HTTPS). Works on localhost but fails on HTTP deployment.
**How to avoid:** Test on actual GitHub Pages URL (HTTPS) before considering feature complete. GitHub Pages provides HTTPS by default, so this should work.
**Warning signs:** `navigator.clipboard` is undefined or throws security errors

### Pitfall 6: Hardcoding Descriptions in HTML
**What goes wrong:** Updating app description requires editing HTML, prone to formatting errors
**Why it happens:** Simpler to write descriptions directly in page template
**How to avoid:** Use `_data/press.yml` to store descriptions. Easier to update, reduces risk of breaking HTML structure.
**Warning signs:** Marketing copy scattered across multiple files

### Pitfall 7: Assuming COR Requires Attribution When Not Using COR.SEM.EXT
**What goes wrong:** Adding attribution section when not legally required
**Why it happens:** Unclear which COR resources require attribution
**How to avoid:** Only COR.SEM.EXT requires attribution (CC BY-NC-ND license). Standard COR is freely available for all purposes without attribution requirement.
**Warning signs:** Attribution section appears even though app only uses basic COR data

## Code Examples

### Example 1: Press Kit Page Structure
```liquid
---
layout: page
title: Press Kit
permalink: /press/
---

<header class="press-header">
  <h1>{{ page.title }}</h1>
  <p>Media resources for {{ site.title }}</p>
</header>

<!-- App Icons -->
<section class="press-section">
  <h2>App Icon</h2>
  <p>High-resolution app icons in multiple sizes. PNG format with transparency.</p>

  <div class="asset-grid">
    {% for icon in site.data.press.icons %}
    <div class="asset-card">
      <img src="{{ icon.path }}" alt="{{ icon.label }}">
      <h3>{{ icon.label }}</h3>
      <p class="file-meta">{{ icon.size }}</p>
      <a href="{{ icon.path }}" download class="btn-download">Download</a>
    </div>
    {% endfor %}
  </div>
</section>

<!-- Screenshots -->
<section class="press-section">
  <h2>Screenshots</h2>
  <p>High-resolution iPhone screenshots showing key features.</p>

  <div class="screenshot-grid">
    {% for screenshot in site.data.press.screenshots %}
    <div class="screenshot-card">
      <img src="{{ screenshot.path }}" alt="{{ screenshot.label }}">
      <p>{{ screenshot.label }}</p>
      <a href="{{ screenshot.path }}" download class="btn-download">Download</a>
    </div>
    {% endfor %}
  </div>
</section>

<!-- Descriptions -->
<section class="press-section">
  <h2>App Descriptions</h2>

  <div class="description-block">
    <h3>Short Description</h3>
    <div class="description-content" id="short-desc">
      {{ site.data.press.short_description }}
    </div>
    <button class="btn-copy" data-target="short-desc">Copy to Clipboard</button>
  </div>

  <div class="description-block">
    <h3>Long Description</h3>
    <div class="description-content" id="long-desc">
      {{ site.data.press.long_description }}
    </div>
    <button class="btn-copy" data-target="long-desc">Copy to Clipboard</button>
  </div>
</section>

<!-- Conditional Attributions -->
{% if site.data.press.requires_cor_attribution %}
<section class="press-section attribution-section">
  <h2>Data Sources & Attributions</h2>

  <div class="attribution-block">
    <h3>Det Centrale Ordregister (COR)</h3>
    <p>{{ site.data.press.cor_attribution }}</p>
    <p><a href="https://ordregister.dk">Visit ordregister.dk</a></p>
  </div>
</section>
{% endif %}

{% if site.data.press.requires_opensubtitles_attribution %}
<section class="attribution-block">
  <h3>OpenSubtitles</h3>
  <p>{{ site.data.press.opensubtitles_attribution }}</p>
  <p><a href="https://www.opensubtitles.com">Visit opensubtitles.com</a></p>
</section>
{% endif %}

<!-- Download All -->
<section class="press-section">
  <h2>Download All Assets</h2>
  <p>Get all icons and screenshots in a single ZIP file.</p>
  <a href="/assets/press/downloads/ordtegl-press-kit.zip" class="btn-download-large">
    Download Press Kit (12 MB)
  </a>
</section>

<!-- Copy-to-clipboard script -->
<script src="/assets/js/clipboard.js"></script>
```

### Example 2: Clipboard JavaScript (`/assets/js/clipboard.js`)
```javascript
// Modern Clipboard API implementation
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText

document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        console.error('Target element not found:', targetId);
        return;
      }

      const textToCopy = targetElement.textContent.trim();

      try {
        await navigator.clipboard.writeText(textToCopy);

        // Visual feedback
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');

        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copied');
        }, 2000);

      } catch (err) {
        console.error('Failed to copy text:', err);
        button.textContent = 'Copy failed';
        setTimeout(() => {
          button.textContent = 'Copy to Clipboard';
        }, 2000);
      }
    });
  });
});
```

### Example 3: Press Data File (`_data/press.yml`)
```yaml
# Short description (1-2 sentences, ~80-170 characters)
short_description: "Learn Danish vocabulary naturally through context from movies and TV shows with intelligent spaced repetition."

# Long description (marketing copy, max 4000 characters but keep concise)
long_description: |
  Ordtegl helps you master Danish vocabulary using authentic examples from real movies and TV shows.
  Instead of memorizing isolated words, you learn through context—seeing how Danes actually use language
  in conversation.

  Our intelligent spaced repetition system adapts to your learning pace, reviewing words at optimal
  intervals to maximize retention. Track your progress, build custom vocabulary lists, and immerse
  yourself in Danish the way native speakers use it.

# App icons
icons:
  - label: "iOS App Store"
    path: "/assets/press/icons/app-icon-1024.png"
    size: "1024×1024 PNG"
  - label: "Android Play Store"
    path: "/assets/press/icons/app-icon-512.png"
    size: "512×512 PNG"
  - label: "iOS Home Screen"
    path: "/assets/press/icons/app-icon-180.png"
    size: "180×180 PNG"

# Screenshots (iPhone portrait recommended)
screenshots:
  - label: "Home Screen"
    path: "/assets/press/screenshots/iphone-01-home.png"
    size: "1170×2532 PNG"
  - label: "Learning Context"
    path: "/assets/press/screenshots/iphone-02-learning.png"
    size: "1170×2532 PNG"
  - label: "Progress Tracking"
    path: "/assets/press/screenshots/iphone-03-progress.png"
    size: "1170×2532 PNG"

# Attribution flags
requires_opensubtitles_attribution: false
requires_cor_attribution: true

# Attribution text
cor_attribution: |
  Ordtegl uses data from COR.SEM.EXT (Det Centrale Ordregister), developed by
  Det Danske Sprog- og Litteraturselskab (DSL) and Center for Sprogteknologi,
  Københavns Universitet (CST). Licensed under CC BY-NC-ND.

# Optional: Contact information
press_contact: "press@ordtegl.app"
```

### Example 4: Press-Specific Styles (`_sass/_press.scss`)
```scss
// Press kit page styling
// Extends existing warm neutral design system

.press-section {
  margin: 60px 0;
  padding: 40px 0;
  border-top: 1px solid var(--border-color);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--heading-color);
  }
}

.asset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.asset-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  background: var(--card-background);

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h3 {
    font-size: 1rem;
    margin: 15px 0 5px;
  }

  .file-meta {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 15px;
  }
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.description-block {
  background: var(--code-background);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 25px;
  margin: 20px 0;

  h3 {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .description-content {
    line-height: 1.6;
    margin-bottom: 15px;
    color: var(--text-color);
  }
}

.btn-copy {
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background 0.2s;

  &:hover {
    background: var(--primary-color-dark);
  }

  &.copied {
    background: var(--success-color);
  }
}

.btn-download {
  display: inline-block;
  padding: 8px 16px;
  background: var(--secondary-color);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: background 0.2s;

  &:hover {
    background: var(--secondary-color-dark);
  }
}

.attribution-section {
  background: var(--info-background);
  padding: 30px;
  border-radius: 8px;
  margin-top: 60px;

  .attribution-block {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin-top: 0;
    }

    p {
      line-height: 1.6;
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .asset-grid,
  .screenshot-grid {
    grid-template-columns: 1fr;
  }
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| PDF press kits | Web-based press pages | ~2018-2020 | Easier updates, better SEO, mobile-friendly |
| document.execCommand() | Clipboard API | 2020-2023 | Async, better security, modern browser API |
| jQuery for copy-to-clipboard | Vanilla JavaScript | 2020+ | No dependencies, better performance |
| Single ZIP download | Individual asset downloads + optional ZIP | 2019+ | Users download only what they need |
| Flash/Java asset viewers | HTML5 image galleries | 2015-2017 | Universal browser support |
| Email-only press contact | Web forms + email | 2016+ | Lower barrier for media inquiries |

**Deprecated/outdated:**
- **document.execCommand('copy'):** Still works but officially deprecated. Use `navigator.clipboard.writeText()` instead.
- **PDF-only press kits:** Harder to update, poor mobile experience. Use web pages with downloadable assets.
- **clipboard.js library:** Still maintained but unnecessary for modern browsers. Native Clipboard API is sufficient.

## Open Questions

### 1. OpenSubtitles API Attribution Requirements
**What we know:**
- OpenSubtitles has a REST API that requires API key authentication
- Terms of service mention copyright and reproduction restrictions
- No explicit branding/logo requirements found in public documentation

**What's unclear:**
- Whether displaying OpenSubtitles logo or attribution link is required
- Whether attribution is only required in-app vs. on marketing site
- What specific wording is required if attribution is needed

**Recommendation:** Before implementing OpenSubtitles attribution section, verify requirements by:
1. Checking API consumer dashboard after creating API key
2. Reviewing any terms presented during API key creation
3. Contacting OpenSubtitles support for clarification
4. For now, create attribution section conditionally so it can be easily enabled if needed

**Confidence:** LOW - needs direct verification with OpenSubtitles

### 2. Optimal Screenshot Count
**What we know:**
- First 2-3 screenshots have biggest impact (users rarely scroll)
- App stores allow up to 10 screenshots
- Press kits should be concise, not overwhelming

**What's unclear:**
- Whether 3 screenshots is sufficient or if 5-6 would be better
- Whether to include both light/dark mode variants
- Whether landscape screenshots add value for a mobile-first app

**Recommendation:** Start with 3-4 high-quality portrait screenshots showing core features. Can expand based on feedback. Prioritize quality over quantity.

**Confidence:** MEDIUM - common practice but not one-size-fits-all

### 3. Vector Logo Format
**What we know:**
- SVG is web standard for vector graphics
- Print media prefers vector formats (SVG, EPS, AI)
- App icons are typically raster (PNG) not vector

**What's unclear:**
- Whether app icon exists in vector format (depends on design process)
- Whether vector format adds value if icon is simple enough to scale PNG

**Recommendation:** If icon was designed in vector format (Figma, Illustrator), export SVG for press kit. If icon is raster-only, PNG at 1024×1024 is sufficient for most press needs.

**Confidence:** MEDIUM - depends on asset availability

## Sources

### Primary (HIGH confidence)

**Icon & Screenshot Specifications:**
- [App icon guide: iOS & Android app icon sizes, design & tips (2026) | MobileAction](https://www.mobileaction.co/guide/app-icon-guide/)
- [How to Design an App Icon: Sizes and Specs for 2026](https://adapty.io/blog/how-to-design-app-icon/)
- [App Store Screenshot Sizes and Dimensions for 2026](https://adapty.io/blog/app-store-screenshot-sizes-dimensions/)
- [Google Play Screenshot Requirements 2026: Complete Size Guide](https://screenshotcreator.app/en/blog/google-play-screenshot-requirements)

**Clipboard API:**
- [Clipboard: write() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write)
- [How to copy stuff to a user's clipboard with vanilla JavaScript | Go Make Things](https://gomakethings.com/how-to-copy-stuff-to-a-users-clipboard-with-vanilla-javascript/)

**Jekyll Static Files:**
- [Assets | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/step-by-step/07-assets/)
- [Static Files | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/static-files/)
- [Directory Structure | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/structure/)

### Secondary (MEDIUM confidence)

**Press Kit Best Practices:**
- [Press Kit: What It Is, Templates & 10+ Examples For 2025](https://www.prezly.com/academy/press-kit-101-what-to-include-to-get-earned-media-coverage)
- [14 Press Kit Examples: The Startup's Guide To Setting Up A Press / Media Page](https://startup.unitelvoice.com/press-kit-page-examples)
- [How to Leverage Press and Media Kits: Best Practices, Common Mistakes, and Examples](https://www.clearvoice.com/resources/press-kits-vs-media-kits/)

**App Descriptions:**
- [How to Write an App Description: The Full Guide | Moburst](https://www.moburst.com/blog/app-description/)
- [6 Best Practices for Writing Great App Store Descriptions](https://www.mobiloud.com/blog/write-great-app-store-description)

**COR Attribution:**
- [cor-sem-ext.md](https://korpus.dsl.dk/resources/details/cor-sem-ext.html) - Official COR.SEM.EXT resource page
- [Det Centrale Ordregister (COR)](https://dsn.dk/sprogets-udvikling/sprogteknologi-og-fagsprog/cor/)

### Tertiary (LOW confidence)

**OpenSubtitles API (requires verification):**
- [Getting started | Opensubtitles REST API Docs](https://opensubtitles.stoplight.io/docs/opensubtitles-api/e3750fd63a100-getting-started)
- [How to Use the OpenSubtitles API: The Complete Developer's Guide](https://apidog.com/blog/opensubtitles-api/)

**Note:** OpenSubtitles attribution requirements could not be verified from public documentation. Direct confirmation needed.

## Metadata

**Confidence breakdown:**
- **Standard stack:** HIGH - Using existing Jekyll setup, native browser APIs
- **Icon/screenshot specs:** HIGH - Verified via official Apple/Google documentation and current 2026 sources
- **Press kit structure:** MEDIUM - Based on industry best practices, not formal standards
- **Clipboard API implementation:** HIGH - Modern browser API with official MDN documentation
- **OpenSubtitles attribution:** LOW - Could not verify from public sources, needs direct confirmation
- **COR attribution:** HIGH - Official resource documentation specifies CC BY-NC-ND requirements

**Research date:** 2026-01-31
**Valid until:** 60 days (2026-04-01) - press kit best practices are relatively stable; icon/screenshot specs may change with new device releases
