# Portfolio v2 — Content and Accuracy Audit (22 November 2026)

## Materials reviewed
- The supplied ZIP `Faizans-Portfolio-main.zip` (Create React App/CRACO, React JavaScript components, profile data, images and old PDF).
- Eight job-specific CV PDFs across Full-Stack, MERN, Backend, AI/LLMs, SQA and DevOps.
- The pasted GitHub repo/profile, LinkedIn, Hugging Face, Coursera, Vercel and Kaggle descriptions.
- Supplied certificates: DeepLearning.AI/Stanford Online Machine Learning Specialization; DeepLearning.AI NLP course; HEC National Skills Competency Test result.
- Pasted development notes for AgentQA Cloud.

## Content corrections and implementation choices
1. Migrated from CRACO / React JavaScript to **Next.js 16 App Router + TypeScript** with simple modular React components and typed data.
2. Changed old 'Computer Science student' summary to **June 2026 graduate**; GPA **3.33/4.00**; no unsupported percentage or credit-hour details in the website.
3. Used **June 2026–present** for Deaimer based on the majority of provided CVs; LinkedIn pasted information says **July 2026**. **Owner should verify this date** and update `data/portfolio.ts` and résumé if needed.
4. Replaced old generic GitHub-homepage/fallback project links with named public repository links; only the Doc2Markdown demo is provided as an individual Hugging Face link.
5. Did not feature HealthMate: old site lists Flutter / Firebase, but newer CVs describe React Native / Flask / MySQL. If featuring it later, confirm source code and final implementation first.
6. Added AgentQA Cloud with transparent **In development** status. RAG and autonomous/agent workflows remain planned per supplied work log. No fake repo or demo is linked.
7. Excluded the forked Urdu-to-Roman-Urdu translation repository from featured projects because it is a fork, not clearly original work.
8. Included four completed certificates. Only the shared/grounded verification destinations are linked. Google Prompting Essentials and Machine Learning Specialization remain shown without invented verification URLs until exact credential URLs are supplied.
9. HEC result: **71/100, 97.7th percentile**, with no identification number displayed; its verification link now points to the user-supplied Google Drive document from the previous CV audit conversation.
10. Avoided unverified production metrics, inflated skill bars, fake testimonials, fake deployment URLs, or undocumented team/client outcomes.
11. Skipped incomplete Coursera courses; did not treat enrollment as certification.
12. Omitted the source ZIP's `.env` and outdated PDF. The new résumé is neutral and derived from current work claims rather than being tied to a job advertisement.

## Links and statuses to verify before publishing
- New production domain / canonical URL; the user supplied `faizanyousafs-portfolio.vercel.app`, while the source repository mentions `faizans-portfolio-seven.vercel.app`.
- Deaimer start month (June vs July 2026) and current preferred job title.
- Latest completion status of AgentQA Cloud; no public repo was shared.
- All other per-project deployments; only show a demo when available and healthy. A public listing showed the Clinical RAG Hugging Face Space in **runtime error** state during review.
- Verification URLs for Machine Learning Specialization and Google Prompting Essentials (IDs were provided but do not automatically prove a link format).
- Public use of the provided portrait photograph.

## Site dependency choice
`next` is pinned to `16.4.6`, the November 2026 stable release shown in the public Next.js release listing. Avoid canary in production; update patch versions for security as necessary after checking release notes.

## Portfolio integration update — 22 November 2026

- The owner confirmed that `public/resume.pdf` is the latest CV. It is preserved byte-for-byte and also available as `Faizan_Yousaf_Software_Engineer.pdf` for download.
- Replaced the portrait with an optimized WebP derived from the supplied `faizan_newest.jpeg`; the original photo is untouched.
- Read the old portfolio without modifying it. Migrated its EmailJS public identifiers and PostHog public ingestion settings into ignored `.env.local`; no actual values belong in repository documentation.
- Restored the EmailJS contact form within the new design. Added production-only PostHog initialization with contact-field capture and session recording disabled.
- The current CV's DOCX contains explicit Machine Learning Specialization and Google Prompting Essentials verification URLs. Added those destinations after checking that they respond, superseding item 8 above; certificate identity still depends on the provider's verification page.
- Recovered the AI Knowledge OS demo from the CV; its Next.js homepage responds successfully.
- All ten listed project repositories and the Hugging Face destinations respond successfully. LinkedIn blocks automated checks with HTTP 999; the profile URL matches both the old portfolio and the current CV.
- Both existing Vercel domains respond with the old React site. GitHub's latest production deployment is marked failed; a new deployment is required after migration.

## Publication follow-up — 22 November 2026

- Explicitly selected the saved GitHub account `Faizanyousaf140`, resolving the initial ambiguous-account authentication failure, and pushed implementation commit `17f4daa` to the requested repository.
- The linked Vercel Git integration deployed the Next.js migration successfully. Both original portfolio domains now serve the updated photo, CV and design.
- Production environment settings remain a separate step: the saved Vercel CLI token is expired. The live contact form correctly offers direct email until the new EmailJS variables are configured and rebuilt.

## Certificate imagery — 22 November 2026

- Rendered the four supplied Coursera PDFs and `NSCT Result.pdf` as optimized WebP assets in `public/certificates/`. These are previews of the real documents; the original PDFs are unchanged.
- Checked the Coursera certificate titles, dates, recipient and verification IDs against the portfolio data. All four match.
- Removed the CNIC number from the derived NSCT preview, retaining the name, institution, test date, subject scores, total of 71/100 and 97.7th percentile. Removed browser print margins from that preview. The original source PDF is not published.
- Added responsive document previews with full-size image links. Existing Coursera verification destinations and the HEC result link remain available.
- Validation passed: ESLint, TypeScript, production build, and Chromium checks at 1440, 768, 390 and 320 pixels. All five images load without cropping, full-size image links work (including keyboard activation), and no horizontal overflow or runtime errors were found.

## Fuel Route Optimizer screenshot — 22 November 2026

- Replaced the illustrative project graphic with an optimized WebP copy of the supplied `Fuel+route_planner.png`.
- Preserved the full wide screenshot, including the fuel-cost panel and route map. The card caption stays beneath the screenshot without obscuring it. The original PNG and project repository link are unchanged.

## Project screenshots, Deaimer experience and research — 22 November 2026

- Added optimized copies of `ELd-trip-planner.png` and `Crafopia-pk.png` to the matching ELD Trip Planner and Craftopia.pk project cards. Full screenshots remain visible, without caption overlays obscuring the interfaces.
- Added the supplied `deaimer_logo.png` to the Deaimer experience entry. Reviewed `Deaimer_details.png` for context; original files in Downloads remain unchanged.
- Updated the role to Software Engineer, consistent with the supplied biography and the official author profile: https://www.deaimer.com/research/authors/R4hfwaXF3QV1o3Lc7g1n. The existing June 2026 start date is preserved; the earlier month discrepancy remains for owner confirmation.
- Kept existing documented engineering responsibilities and added the grounded research-writing activity. Company-wide services were not presented as individual accomplishments.
- Added a Research section featuring the owner's three published perspectives: The Quantum Migration Problem (3 November 2026), The Physics Gap (2 November 2026), and The Race Toward AGI (21 October 2026). Presented the research and proposed frameworks using the scope stated by the author.
- Verified all three official article URLs and PDF endpoints (HTTP 200, application/pdf, valid PDF header). Cover artwork comes from the corresponding published article pages and is optimized locally as WebP.
- Validation passed: ESLint, TypeScript, production build, and browser checks at 1440, 768, 390 and 320 pixels. Verified the two project screenshots, Deaimer logo, three research covers, article dates and links, desktop/mobile Research navigation, project filters and existing anchor targets. No runtime errors, overlapping navigation or horizontal overflow were found.
