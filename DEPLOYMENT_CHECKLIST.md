# Verification and deployment — 22 November 2026

## Completed locally

- [x] Installed dependencies and generated `package-lock.json`: 362 packages audited, zero reported vulnerabilities.
- [x] `npm run lint`: passes with zero errors or warnings after fixing the existing project-filter memoization issue.
- [x] `npm run typecheck`: passes.
- [x] `npm run build`: passes on Next.js 16.4.6; homepage and metadata routes prerender successfully.
- [x] Started the production server and tested it with Chromium.
- [x] Desktop 1440×900, tablet 768×1024, mobile 390×844 and small mobile 320×740: no horizontal overflow or browser runtime errors.
- [x] Responsive portrait loads through Next.js image optimization; output is 78,420 bytes with no EXIF metadata.
- [x] Navigation anchor targets exist; mobile menu closes on selection and Escape; project filters work.
- [x] PDF route returns the exact owner-approved CV bytes and downloads as `Faizan_Yousaf_Software_Engineer.pdf`.
- [x] Copy-email action writes the correct address to the clipboard.
- [x] Four certificate destinations and the HEC result are linked. All project repository URLs return HTTP 200.
- [x] LinkedIn URL matches both the old portfolio and CV; LinkedIn returns HTTP 999 to automated checks, so manual verification remains necessary.
- [x] Contact form browser tests cover required-field validation, honeypot, duplicate submission protection, success/reset and failure/message retention with direct email fallback.
- [x] EmailJS transport was intercepted locally: no test messages were sent. The payload matches the old template fields and adds Reply-To.
- [x] PostHog initializes in the production build; test ingestion was intercepted. Autocapture and session recording are disabled to protect contact content.
- [x] Robots, sitemap, icon and Open Graph image routes return HTTP 200.
- [x] Configuration migrated to ignored `.env.local`; `.env.example` contains placeholders only.
- [x] Old local portfolio directories and the original JPEG were left unchanged.

Browser evidence and the local smoke-test script are in ignored `test-results/`.

## Required to publish

- [ ] Authenticate Git for GitHub repository `Faizanyousaf140/Faizans-Portfolio`. The push preflight fails because no usable GitHub credentials are available in this session.
- [ ] Push the prepared local commit to `origin/main` after authentication.
- [ ] Connect the existing Vercel account/project. No authenticated Vercel session is currently available.
- [ ] Confirm Vercel Root Directory is the repository root, Framework Preset is Next.js, and legacy CRA settings are cleared. `vercel.json` supplies Next.js install/build/output settings.
- [ ] Add the six variables from `.env.local` to the Vercel production environment through its secure settings. Do not commit that file. Public client identifiers are embedded at build time, so redeploy after setting them.
- [ ] Redeploy the existing Vercel project and preserve its current domains. The latest pre-existing GitHub deployment is marked failed; both public domains currently serve the old React site.
- [ ] Confirm a real contact submission arrives using the configured EmailJS account, template recipient, Reply-To and allowed domains.
- [ ] Verify production PostHog events in its dashboard and confirm the deployed CV, portrait and mobile layout.

Existing content review: confirm the Deaimer start month (June versus July 2026) when convenient; this update preserves the current content.
