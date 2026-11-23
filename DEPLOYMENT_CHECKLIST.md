# Verification and deployment — updated 23 November 2026

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

## Publication and remaining configuration

- [x] Selected the saved Windows Credential Manager account `Faizanyousaf140` explicitly for this repository. The initial authentication failure was caused by ambiguous account selection.
- [x] Pushed implementation commit `17f4daa` to `Faizanyousaf140/Faizans-Portfolio` on `main`.
- [x] Existing Vercel Git integration completed a successful production deployment. Both public domains now serve the new Next.js homepage, portrait and CV.
- [x] Verified the deployed site in desktop and mobile Chromium: portrait loads, PDF matches the approved CV, navigation works, and there is no horizontal overflow or runtime error.
- [x] `vercel.json` supplies the successful Next.js install/build/output settings.
- [x] Refreshed Vercel CLI authentication through owner-approved device sign-in on 24 November 2026 and verified the connected GitHub repository before changing project settings.
- [x] Added the three EmailJS identifiers from ignored `.env.local` as encrypted Vercel production variables. No environment values were committed or printed.
- [ ] Optional: add the existing PostHog public ingestion settings to Vercel production and verify dashboard ingestion.
- [ ] Redeploy after adding environment variables. Until then, the contact section shows direct email and copy-address actions; the unconfigured form is omitted.
- [ ] Confirm a real contact submission arrives using the configured EmailJS account, template recipient, Reply-To and allowed domains.
- [ ] Verify production PostHog events in its dashboard and confirm the deployed CV, portrait and mobile layout.

Existing content review: confirm the Deaimer start month (June versus July 2026) when convenient; this update preserves the current content.

Production: https://faizanyousafs-portfolio.vercel.app and https://faizans-portfolio-seven.vercel.app. Successful implementation deployment: https://vercel.com/faizanyousaf140-gmailcoms-projects/faizans-portfolio/EQU25abc23rfCrZEE2N87BpRbHd5.

## AI/NLP portfolio update - 22 November 2026

- [x] Clean dependency installation: 361 packages added, 362 audited, zero vulnerabilities. npm reported an ESLint 9 deprecation notice; lint passes without errors or warnings.
- [x] Final npm run lint, npm run typecheck and npm run build all pass.
- [x] Chromium checks pass at 1440, 768, 390 and 320 pixels: 20 projects, six working category filters, expandable implementation notes, six certificate cards and two internship-proof links.
- [x] Verified the NUCES logo, five frontier-model labels, three new generated concept labels, six legacy illustration labels, responsive images, navigation and byte-identical CV download.
- [x] No browser runtime errors, horizontal overflow or desktop navigation overlap. Reviewed screenshots and improved the mobile education layout.
- [x] All 19 public project source links match repositories owned by Faizanyousaf140. New VLM/DDPM Hugging Face apps report running; the GAN app reports sleeping and may require wake-up.
- [x] Unused assets and CV source/helper moved to ignored local-only/. Verified that environment files, dependencies, build output and local QA evidence remain ignored.
- [x] Updated GitHub repository description and homepage to the current Next.js/AI engineering portfolio.

Production EmailJS/PostHog settings and a real EmailJS delivery check remain outstanding as described above.

## Full-width image follow-up - 22 November 2026

- [x] Lint, TypeScript and production build pass. Dependency inputs are unchanged.
- [x] Chromium at 1440/768/390/320 pixels confirms 13 edge-to-edge project images, seven full-width document previews, original image proportions and captions below pictures.
- [x] Full-size image links open correctly; all project filters and implementation notes work. No runtime errors or horizontal overflow.
- [x] Source image dimensions are verified; image files, CVs and environment settings are unchanged.

## Content review follow-up - 23 November 2026

- [x] Reconciled the confirmed title, certificate dates, concurrent part-time roles and four-course teaching description across the site and reviewed CV; retained the approved public phone number.
- [x] Preserved original CV/source backups in ignored `local-only/`; verified the new PDF is one page with correct text, working links and identical bytes at both public URLs.
- [x] Tested configured contact validation, honeypot, duplicate protection, success/reset and failure recovery using intercepted EmailJS transport. No real messages sent.
- [x] Six selected projects by default, expandable 20-project archive, all eight categories, natural image proportions, certificate expansion and research labels verified in Chromium.
- [x] Checked desktop navigation and mobile menu behavior at 1440, 980, 768, 390 and 320 pixels with no overflow, overlap or runtime errors.
- [x] Verified Person JSON-LD, absence of keywords metadata, CV download, clipboard and metadata routes.
- [x] Added sourced VLM/test evidence, working ELD/Craftopia links and an authentic AI Knowledge OS starter-frontend screenshot with an accurate preview label. Retained honest labels on concept illustrations.
- [x] Final lint, TypeScript and production build pass. An unconfigured production build was also tested: no form is rendered, and email/copy actions work. Dependency inputs are unchanged from the successful clean install and zero-vulnerability audit.
- [ ] Production EmailJS/PostHog configuration and a real delivery check remain optional activation steps as described above. Additional project metrics and a VLM before/after example require authentic results rather than inferred numbers or generated proof.

## Theme and portrait update - 23 November 2026

- [x] Fixed archive-button contrast and added an accessible, persistent light/dark switch in the desktop and mobile header.
- [x] Optimized the exact supplied blue-background portrait to a 52 KB WebP, preserving appearance and removing metadata. Original files remain unchanged; the previous optimized portrait is retained locally.
- [x] Lint, TypeScript and production build pass; dependency inputs are unchanged.
- [x] Both themes checked at 1440/980/768/390/320 pixels with readable text/buttons, functioning archive/navigation and no overflow, header overlap or runtime errors.
- [x] Production checks verify keyboard controls, saved preferences, system changes, cross-tab synchronization, blocked storage and preference application before hydration.
- [x] The latest agentic CV and existing environment files remain unchanged.
