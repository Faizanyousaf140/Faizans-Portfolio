# Faizan Yousaf — AI/ML Engineer & Full-Stack Developer

[Portfolio](https://faizanyousafs-portfolio.vercel.app) · [GitHub](https://github.com/Faizanyousaf140) · [LinkedIn](https://www.linkedin.com/in/faizan-yousaf1/) · [Hugging Face](https://huggingface.co/Faizan11112/spaces)

I build full-stack applications and AI/ML systems, from Next.js/TypeScript interfaces and Python/Node.js APIs to NLP, retrieval and model fine-tuning. I am a FAST-NUCES computer science graduate, interested in AI/ML engineering, full-stack development and applied AI roles. At Deaimer, my official title is Software Engineer — AI Evaluation; I contribute coding tasks, reference solutions and automated verifiers to training and evaluation workflows.

## Selected work

| Area | Projects |
| --- | --- |
| Full-stack AI | AI Knowledge OS: contextual RAG chat, semantic search, APIs and background embedding jobs |
| Multimodal fine-tuning | Document-to-Markdown VLM: Qwen2-VL-2B with QLoRA/PEFT and Gradio |
| Speech and NLP | VerbatimAI: Whisper transcription, summarization and semantic retrieval |
| NLP and retrieval | Urdu Transformer chatbot, BERT feedback classification, T5/BART summarization and Clinical Notes RAG |
| Generative AI | DDPM, DCGAN/WGAN-GP and Pix2Pix/CycleGAN |
| Computer vision | Neural Storyteller image captioning and MAE/ViT |
| Applied ML | Loan Approval Predictor: data preparation, classifier comparison and prediction interfaces |
| Product and backend | RentEase PK, Fuel Route Optimizer, ELD Trip Planner, Craftopia.pk and authentication/CI automation |

The homepage shows six selected projects spanning full-stack AI, multimodal fine-tuning, speech/NLP, classical machine learning, web development and backend engineering. Loan Approval Predictor is included in this default selection; Clinical Notes RAG remains in the archive. The expandable archive retains all 20, with AI/ML and full-stack first among eight category filters. The Urdu-to-Roman-Urdu study is attributed as an adapted/forked academic project. AgentQA Cloud is marked in development, with planned features identified explicitly. Cards without screenshots use text rather than decorative placeholders.

The VLM card links its repository-reported test ROUGE-L of 0.57 (validation: 0.63). The Fuel Route Optimizer links its documented 178-test run from 17 November 2026. These are repository-reported results, not benchmarks independently rerun during portfolio maintenance. Working ELD Trip Planner and Craftopia demos are linked. AI Knowledge OS is labeled as a starter frontend preview, separate from the API/RAG implementation in its source; its card uses a real browser capture. The VLM demo may need to wake before inference is available.

At Deaimer, I work on coding-task preparation, Docker/Linux harnesses, tool calling, reference solutions, automated verification and failure analysis. Models worked with include GPT-6 Astra, GPT-5.6 Sol, Claude Opus 5, Opus 5.5 and Sonnet 5.5; tools include Codex and Claude Code. The role describes contributions through training/evaluation tasks and harnesses. Three published Deaimer research perspectives are linked with their PDFs.

## Stack and development

Next.js 16 App Router, React 19, TypeScript, Lucide, EmailJS and PostHog. The green design, animations, responsive images and reduced-motion support are preserved. Content lives in `data/portfolio.ts`, UI in `components/`, and styling in `app/globals.css`.

Use Node.js 22 or newer (minimum 20.9):

```bash
npm ci
# Create .env.local using .env.example as the field reference.
npm run dev
```

Open http://localhost:3000.

## Environment configuration

Set these in ignored `.env.local` for development and in Vercel for production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, including https:// |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template identifier |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS browser public key |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog public ingestion key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog ingestion host |

These client identifiers are public by design and embedded at build time. Private API keys must never use `NEXT_PUBLIC_`. Environment files stay out of Git; `.env.example` contains placeholders only. Rebuild after changing production values.

The EmailJS form appears only when all three EmailJS identifiers are configured. Otherwise, the contact section provides working email and copy-address actions. The form supplies `from_name`, `from_email`, `subject`, `message` and `reply_to`, with validation, a honeypot, duplicate-send protection, local throttling and failure recovery. Confirm the recipient, Reply-To and allowed domains in EmailJS.

PostHog runs only in production when configured. Autocapture and session recordings are disabled, contact text is not captured, and analytics failures do not interrupt the site.

## Assets and repository hygiene

- `public/images/faizan-newest.webp`: optimized latest portrait, served responsively by Next.js.
- `public/education/fast-nuces.webp`: official campus-hosted NUCES logo.
- `public/certificates/`: four Coursera certificates, two internship documents and the HEC result. The public Digital Genei letter has personal phone/email/address redacted; the HEC preview omits the CNIC. Original local documents are unchanged.
- `public/projects/`: supplied application screenshots, an actual AI Knowledge OS frontend preview, labeled overview illustrations from the old portfolio, a repository-sourced GAN training comparison and three generated concept illustrations. Generated images are visibly labeled; sources, exact prompts and output paths are in [docs/asset-provenance.json](docs/asset-provenance.json).

- `public/companies/` and `public/research/`: Deaimer logo and original article covers.
- `public/Faizan_Yousaf_Software_Engineer.pdf`: reviewed one-page CV, reconciled with the site on 23 November 2026. It balances AI/ML and full-stack development with agentic AI, tool calling and coding-agent evaluation experience. It uses the confirmed Deaimer title, certificate dates and concurrent part-time context, and retains the owner's approved phone number. `/resume.pdf` is a compatibility URL with identical bytes.

Project and certificate images use `{ src, width, height }` in `data/portfolio.ts` to preserve their original proportions. Project images fill the card width, captions and artwork labels sit below them, and each image opens at full size. The project archive uses two columns on larger screens and one on phones. Certificate and HEC previews also use their natural proportions.

The reviewed editable source is `local-only/resume-reviewed.docx`, with local HTML/PDF export helpers. Original CV/source backups, the obsolete CV helper and unused assets remain in ignored `local-only/`, outside the published site. Dependencies, build output, local QA evidence and environment files are ignored. GitHub contains the current Next.js source, required assets and maintenance documentation. Old React/CRACO portfolio directories remain unchanged.

Research is labeled as perspectives published on the employer's research platform. The quantum migration article is categorized as Security & Cryptography. Person JSON-LD uses the same confirmed job title and profile links as the visible site.

## Validation and deployment

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

Browser QA covers desktop/tablet/mobile layouts, filters, implementation notes, images, certificates, navigation and CV downloads. Email transport tests intercept responses; they do not send messages. See `DEPLOYMENT_CHECKLIST.md` for checks and outstanding settings; `CONTENT_AUDIT.md` records content provenance and corrections.

Push to `main` in `Faizanyousaf140/Faizans-Portfolio` to trigger the existing Vercel integration. `vercel.json` selects Next.js, `npm ci`, `npm run build` and `.next`. Keep Vercel Root Directory at the repository root.

Production: [faizanyousafs-portfolio.vercel.app](https://faizanyousafs-portfolio.vercel.app) and [faizans-portfolio-seven.vercel.app](https://faizans-portfolio-seven.vercel.app). The first is canonical. Production EmailJS/PostHog settings still need to be added in Vercel, followed by a rebuild and a real delivery check.
