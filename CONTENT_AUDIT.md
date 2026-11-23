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

## Full-width image presentation - 22 November 2026

- Replaced fixed-height, padded project-image frames with full-width images using their actual source dimensions. All 13 project images keep the complete image visible, without cropping or image overlays. Captions, illustration labels and full-size image links are below the pictures.
- Enlarged archive cards into two flowing columns on larger screens and one on phones, avoiding gaps from stretching cards with different image proportions.
- Applied the same natural-proportion presentation to all six certificate previews and the HEC result. Source images and privacy redactions are unchanged.
- Validated metadata against all 19 project/certificate source files. Lint, TypeScript and production build pass. Chromium checks at 1440, 768, 390 and 320 pixels verify full-width image geometry, original proportions, captions below images, seven complete document previews, project filters and full-size image opening, with no horizontal overflow or runtime errors. Visual screenshots are in ignored test-results/.

## External content review - 23 November 2026

- Reviewed the owner's pasted critique against the site, CV, public repositories, certificate dates and official Deaimer pages. Earlier audit entries are historical; the corrections below supersede their conflicting titles, dates and CV-preservation statements.
- The owner confirmed the official title **Software Engineer — AI Evaluation**, concurrent part-time Skillify Zone and teaching assistant work, and publication of **+92 3457956200** on the CV. Applied the title to the experience entry, Person structured data and revised CV. Sharpened the headline, About and contact copy around AI/LLM applications and coding-agent evaluation.
- Reconciled the CV's Digital Genei dates to **1 July–10 August 2025**, and Skillify Zone to **10 July–10 August 2025**. Clarified the part-time overlap and changed teaching assignments to four courses. Preserved the original PDF/DOCX locally before revising. Both public PDF URLs now contain the same reviewed one-page PDF, with selectable text and working hyperlinks. Editable reviewed DOCX and print export helpers stay in ignored `local-only/`; Word's PDF export stalled, so the PDF was rendered from the reviewed DOCX content through local HTML/Chromium and visually checked.
- When EmailJS is absent, omit the form and retain email and copy-address actions. A configured form retains its existing validation, honeypot, duplicate protection, throttling and error recovery. No private configuration is published. Production EmailJS/PostHog settings still require Vercel configuration.
- Show six selected projects by default, with all 20 available through an expandable archive and eight category filters. This preserves the owner's requested GenAI/NLP work and the fork's attribution. Removed decorative placeholders from the seven cards without images. Corrected GAN/DDPM to Generative AI and image captioning/MAE to Computer Vision.
- Added repository-reported evidence: VLM unseen-test ROUGE-L **0.57**, validation **0.63**; Fuel Planner **178 tests** (175 offline, 3 live) documented as passing on **17 November 2026**. These project tests/model evaluations were not independently reproduced during this portfolio update. Sources: the corresponding public repository READMEs linked on the cards. No user counts, latency claims, retrieval scores or private Deaimer task totals were invented.
- Added healthy Craftopia and ELD frontend demo URLs. AI Knowledge OS currently exposes a starter interface; labeled its link as a frontend preview and replaced its overview illustration with a real browser capture. The VLM Hugging Face Space reported sleeping during this review, so its card explains that wake-up may be needed. A real input/output VLM example still needs an available inference run or an authentic saved example; the current concept art remains explicitly labeled.
- Replaced the misleading `faizan.dev` wordmark with the owner's name. Labeled all three research articles Perspective and identified Deaimer as the publishing platform. Changed the quantum migration topic to Security & Cryptography; retained the verified original publication dates. Added a factual description of Deaimer's research focus.
- Kept the Machine Learning and NLP certificates first, followed by internship documents. Moved the two Google certificates under expandable additional coursework. Expanded the hero's HEC percentile context. Refocused skill groups on tools and evaluation methods; removed the unsupported GitHub Actions tag from the curated website skills. Existing CV skills remain owner-supplied experience rather than a claim of public proof for each tool.
- Removed the keywords meta tag and added Person JSON-LD. The Hugging Face `/spaces` URL responds successfully. Responsive `sizes` remain set for portraits, project images and certificates; full-width, uncropped image presentation and left-side internship thumbnails are preserved.
- Still unresolved from earlier materials: the Deaimer start month (June versus July). This update preserves June 2026 consistently on the site and CV. Additional measured project outcomes and private work totals require supporting evidence before publication.
- Validation: lint, TypeScript and production build pass. Tested both configured EmailJS transport (intercepted; no real messages) and an unconfigured production build with working email/clipboard and no disabled form. Chromium checks at 1440/980/768/390/320 pixels pass for selected/archive views, all eight categories, full-width image geometry, credential expansion, navigation, research, JSON-LD and both PDF/download URLs. No runtime errors, navigation overlaps or horizontal overflow. Local-only helpers and evidence remain excluded from Git and lint.
- The wide first project screenshot spans its full card, with copy underneath, keeping the actual interface readable without a blank green column below the image. Its responsive `sizes` now reflects the full card width.

## Broader AI/ML and full-stack positioning - 23 November 2026

- The owner requested broader AI/ML and full-stack positioning because the previous introduction focused too heavily on the current evaluation role. This supersedes the earlier choice to make coding-agent evaluation the primary professional identity.
- Updated the public headline to **AI/ML Engineer · Full-Stack Developer** and the hero to **AI models. Full-stack apps.** The About, skills introduction, contact interests, profile biography, SEO/social metadata and README now give full-stack development, machine learning, NLP and LLM applications direct emphasis.
- The confirmed employment title **Software Engineer — AI Evaluation** remains unchanged in Deaimer experience, the CV experience entry and Person JSON-LD. Current job responsibilities, dates, model disclosures and proof links remain intact.
- Included Loan Approval Predictor among the six default projects, alongside AI Knowledge OS, Document-to-Markdown VLM, VerbatimAI, ELD Trip Planner and Fuel Route Optimizer. Clinical Notes RAG remains accessible through the archive/filter. No projects were removed. AI/ML and Full-stack now lead the category filters; ML/NLP precedes the GenAI skill group.
- Broadened the CV headline and summary consistently, and replaced the selected authentication/CI project with Loan Approval Predictor to show classical ML work directly. The authentication project remains on the website. Retained the approved phone, formal title, certificate dates, part-time clarification and both identical public PDF URLs. Backed up the preceding CV/source locally before editing.
- Validation: lint, TypeScript and production build pass. Chromium checks at 1440/980/768/390/320 pixels verify the broader headline and About/contact copy, default ML project, all 20 archived projects and eight filters, navigation, full-width images, credentials, research and CV downloads. No overflow, navigation overlap or runtime errors. The updated CV remains one page with 18 working hyperlink annotations and the approved phone/dates.

## Agentic AI CV addition - 23 November 2026

- At the owner's request, added agentic AI alongside AI/ML and full-stack development in the CV headline and summary. Added a dedicated skills row for tool calling, coding agents, evaluation harnesses, automated verifiers, Codex and Claude Code, grounded in the previously confirmed Deaimer experience.
- Updated Deaimer bullets to describe evaluating agent tool use and working with GPT/Claude, Codex and Claude Code on tool calling, debugging and failure analysis. Kept the formal job title and existing coding-task responsibilities. No production multi-agent framework or direct base-model weight training claim was added.
- Preserved the prior CV/source in ignored local backups and regenerated both identical public PDF copies. Checked the agentic terms, broad AI/ML/full-stack focus, official title, phone, internship dates and 18 hyperlink annotations; the CV remains one page. Website code and dependency inputs are unchanged.

## Contrast, light/dark themes and portrait - 23 November 2026

- Fixed the project archive button's unreadable pale text on its browser-default white background. Outline buttons now use an explicit transparent background with theme-aware text, borders and visible keyboard focus.
- Added a header theme control for desktop and mobile. Initial appearance follows the system preference; an explicit choice persists in local storage and synchronizes across tabs. A head script applies the preference before page content paints. The switch works when storage is unavailable and reconciles preference changes during hydration.
- Replaced hard-coded page, card, text and border colors with shared semantic variables. Light mode uses white surfaces and dark green text/accents; dark mode retains the green palette. Photos, project screenshots, certificates and company branding keep their original colors. Floating portrait chips and the contact callout retain their intended contrast in both themes.
- Replaced the portrait with the exact supplied blue-background image, located as `faizan_Bg_blue.png` in the owner's photos folder. Converted it to a 1000×1039 WebP at quality 87 (52,248 bytes), without EXIF metadata; no generative editing or background changes. Original files remain unchanged. The preceding optimized portrait is retained in ignored local storage; updated the Person schema image and asset provenance.
- Moved the floating technology label above the face on small phones; verified the portrait stays unobscured at 320 and 390 pixels in both themes.
- The AI/ML/full-stack positioning, complete project archive, existing image proportions, experience/certificate presentation and latest agentic CV remain unchanged.
- Validation: lint, TypeScript and production build pass. Chromium checks cover both themes at 1440/980/768/390/320 pixels, including readable normal/hover/focus archive buttons, all 20 projects, the new portrait and navigation. Text contrast checks sampled more than 400 rendered text elements per theme with no failures under the audit's AA text thresholds (image-overlay artwork excluded). Production checks also pass for keyboard switching, saved reloads, system changes, explicit overrides, cross-tab sync, storage failures and applying a saved preference before React hydration. No runtime errors, navigation overlaps or horizontal overflow were found. Evidence remains in ignored `test-results/`.

## Contact activation - 24 November 2026

- Authenticated Vercel through the owner's approved device login and verified that the project is connected to `Faizanyousaf140/Faizans-Portfolio`. Saved the three existing EmailJS identifiers from ignored `.env.local` as encrypted production variables. No values were logged or committed; other environment settings were not changed.
- Connected “Start a conversation” to the form with name-field focus and reduced-motion-aware scrolling. Added a short reply-address explanation and visible keyboard focus within the contact panel. Direct email and copy-address actions remain available.
- Lint, TypeScript and production build pass. Local production and live Chromium checks pass at 1440/390/320 pixels in both themes for form navigation, required/email validation, honeypot, duplicate-send protection, success/reset, failure recovery, overflow and runtime errors. Regression transports are intercepted. Dependency inputs and the CV are unchanged.
- Commit `48720c9` deployed successfully through the existing Git integration; both production domains render the configured form. The secondary domain also passed a mobile form-focus check and returned the exact approved CV bytes.
- One explicit real submission from the deployed form reached the original EmailJS service and template but returned HTTP 412: `Gmail_API: Invalid grant. Please reconnect your Gmail account`. Requested owner authorization to reconnect the existing Gmail service before another live attempt. Inbox delivery has not been confirmed. Local helpers and evidence remain ignored, and the old portfolio is unchanged.

## Gmail delivery recovery - 24 November 2026

- The owner created and tested a new Gmail service in EmailJS and supplied its public service identifier. Updated that identifier in ignored `.env.local` and encrypted Vercel production settings while preserving the existing template, public key and other settings. No identifier values were committed or printed.
- Rebuilt production through the existing Vercel project. The deployment reached `READY` and retained both portfolio domains. Application code, dependencies, design, content and CV are unchanged.
- Sent one real message from the primary deployed contact form. The browser payload matched the new local service setting and existing template/public key, included the expected Reply-To, and received HTTP 200 `OK`. The form displayed its success message, reset its fields and produced no runtime errors. The owner then confirmed the email arrived, resolving the earlier Gmail delivery blocker.
- Verified the secondary domain returns HTTP 200 and renders the contact form and conversation link. Local test evidence and credentials remain excluded from Git; the old portfolio is unchanged.
