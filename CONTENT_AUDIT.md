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

## AI engineering, education and internship update ? 22 November 2026

- Strengthened the hero, About, skills, SEO metadata and README around full-stack AI engineering, AI/ML, NLP, GenAI/LLM applications and agent harness engineering. Preserved Next.js/TypeScript and the existing design.
- Reviewed the owner's public GitHub repository list and READMEs. Added nine projects: Urdu Transformer Chatbot, BERT Feedback Classifier, T5/BART Summarization, GANs & Image Translation, Diffusion Image Generation, Neural Storyteller, Masked Autoencoder/ViT, Urdu-to-Roman-Urdu Translation and Loan Approval Predictor. No benchmark scores were copied into portfolio claims. The translation repository is a fork and is explicitly attributed as an adapted academic study.
- Featured AI Knowledge OS, Document-to-Markdown VLM and VerbatimAI. Added GenAI/LLM and NLP filters and expandable implementation notes for archive projects.
- Added the official campus-hosted circular NUCES logo matching the supplied reference. Source and asset transformations are recorded in docs/asset-provenance.json.
- Added the authentic Digital Genei experience letter and Skillify Zone completion certificate from the old portfolio, leaving original files unchanged. The Digital Genei public derivative removes personal phone, email and home address. Both are linked beside their experience entries and in the credentials gallery. The original ML and NLP course certificates remain first.
- Reconciled internship dates to the printed certificates: Digital Genei, 1 July?10 August 2025; Skillify Zone, 10 July?10 August 2025. The owner requested the better-supported presentation after being shown the discrepancy.
- The owner clarified Deaimer contributions as preparing coding tasks for training and using GPT/Claude models, Codex and Claude Code. Wording describes contributions to training/evaluation workflows through tasks and harnesses; it does not independently assert direct base-model weight training or employment by model providers. Listed model names are owner-reported experience; official sources confirm that the model names are public, not the owner's involvement.
- Public model-name references: https://openai.com/index/gpt-6-astra/ ; https://developers.openai.com/api/docs/models/gpt-5.6-sol ; https://www.anthropic.com/claude-opus-5-5 ; https://www.anthropic.com/claude-sonnet-5-5 . Opus 5 is also referenced by the official Opus 5.5 release.
- Reused VerbatimAI and loan-prediction overview artwork from the old portfolio, clearly labeled PROJECT ILLUSTRATION. The existing AI Knowledge OS, Clinical RAG and Urdu project artwork is also labeled as illustrative. Added the GAN repository's real sample comparison. Generated three matching editorial illustrations using the built-in image generator; cards visibly label these as AI concept illustrations, with explicit alt text. Exact prompts and output paths are in the provenance manifest.
- Checked Hugging Face API runtime states: doc2markdown-vlm and ddpm-face-generator running; dcgan-wgan-anime-generation sleeping (can require wake-up). No fabricated MAE demo URL was copied from its README placeholder.
- Moved the editable DOCX, obsolete CV helper and unused HealthMate screenshot into ignored local-only/ to keep them off GitHub and outside public hosting. Both approved PDF URLs remain unchanged. Existing maintenance documents are retained. Environment files, local evidence, dependencies and build output remain ignored.

- Final validation: npm ci (zero vulnerabilities), lint, TypeScript and production build passed. Chromium checks at 1440/768/390/320 pixels verified 20 projects, all filters, implementation notes, six credentials, two internship proofs, logo, illustration labels, navigation and unchanged CV bytes. No runtime errors or horizontal overflow. Local evidence stays in ignored test-results/.
