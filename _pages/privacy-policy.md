---
layout: default
title: Privacy Policy
permalink: /privacy/
---

# Privacy Policy

**Last Updated: June 18, 2026**

Ordtegl is a Danish language learning app built by Andrew Lovett-Barron, based in Denmark. Your privacy matters, so here is a clear explanation of how the app handles your data.

## Summary

Ordtegl is **fully local-only**. There are no accounts, no sign-in, no server, and no backend. Your learning data never leaves your device except for automatic iCloud backup and optional anonymous analytics.

## Data Controller

Andrew Lovett-Barron
Based in Denmark
Contact: alb+ordtegl@andrewlb.com

## What Data We Collect

### On your device only (never transmitted)

- **Vocabulary and review progress**: All words, review scores, spaced repetition scheduling, and streak data are stored in a local SwiftData database on your device. This data is never sent to any server.
- **Grammar lesson progress**: Your progress through grammar lessons is stored locally.
- **Custom word lists**: Any words you add are stored locally.
- **Camera and Photo Library images**: When you use OCR text capture, images are processed entirely on-device using Apple's Vision framework. Images are never stored permanently or transmitted anywhere.

### iCloud key-value backup (automatic)

- **Progress backup**: Ordtegl uses Apple's NSUbiquitousKeyValueStore to back up learning progress to your iCloud account. This happens automatically if you are signed into iCloud on your device. This data is managed entirely by Apple under their privacy policy. No Ordtegl server is involved.

### Analytics (PostHog, EU-hosted)

We use PostHog to understand how people use the app so we can improve it:

- **Usage patterns**: Which features are used, how often, and session length.
- **No personal identifiers**: Analytics are anonymous and not linked to your identity.
- **No tracking across apps**: We do not track you outside Ordtegl.
- **EU data residency**: Analytics data is sent to PostHog's EU endpoint and processed within the European Union.
- **Opt-out available**: You can disable analytics entirely in Settings without losing any app functionality.

### What we do NOT collect

- No email addresses
- No passwords
- No names or contact information
- No location data
- No health or financial data
- No advertising identifiers
- No data shared with third-party advertisers

## How We Use Your Data

- **Local learning data**: To track your learning progress and schedule reviews using spaced repetition. Legal basis: contract performance (providing the app's core functionality).
- **iCloud backup**: To preserve your progress if you change devices. Legal basis: contract performance.
- **Analytics**: To improve the app by understanding what works well. Legal basis: legitimate interest, with opt-out available.

## Your Rights Under GDPR {#your-rights}

As a user in the EU, you have the right to:

- **Access your data**: Your learning data is visible directly in the app. Analytics data is anonymous and cannot be linked back to you.
- **Delete your data**: Go to Settings to reset all learning progress. Removing the app deletes all local data. iCloud data can be managed through your device's iCloud settings.
- **Correct your data**: Your learning data can be modified directly in the app.
- **Data portability**: Your data is stored locally on your device.
- **Object to processing**: You can opt out of analytics in Settings at any time.
- **Lodge a complaint**: You have the right to lodge a complaint with the Danish Data Protection Agency (Datatilsynet) or your local supervisory authority.

## Data Security {#data-security}

All learning data is stored locally on your device using SwiftData. iCloud backup is encrypted by Apple. Analytics data is transmitted over HTTPS to PostHog's EU servers.

There is no Ordtegl server, no backend, and no API. The app makes zero network calls except for PostHog analytics (when enabled).

## Device Permissions

- **Camera**: Used for OCR text capture to scan Danish text. Images are processed on-device using Apple's Vision framework and are never stored or transmitted.
- **Photo Library**: Used to select images for OCR text capture. Same on-device processing applies.

## Children's Privacy {#childrens-privacy}

Ordtegl is not directed at children under the age of 13. We do not knowingly collect data from children under 13. If you believe a child has provided data through the app, please contact us at alb+ordtegl@andrewlb.com.

## Changes to This Policy {#changes}

We may update this Privacy Policy from time to time. Changes will be reflected in the "Last Updated" date above.

## Contact Us {#contact}

Questions about your privacy? Reach us at alb+ordtegl@andrewlb.com. We aim to respond within 7 business days.
