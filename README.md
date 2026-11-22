# Faizan Yousaf — Next.js portfolio

The portfolio uses Next.js 16 App Router, TypeScript and React 19. The green editorial design, project artwork, interactions and reduced-motion support are preserved. Content lives in `data/portfolio.ts`.

## Run locally

Use Node.js 22 or newer (minimum 20.9).

```bash
npm ci
# Create .env.local using .env.example as the field reference.
npm run dev
```

Open http://localhost:3000. `.env.local` is ignored by Git. Never commit environment files or put private API keys in variables beginning with `NEXT_PUBLIC_`.

## Configuration

Set these in `.env.local` for development and in the Vercel project environment for production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, including https:// |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Existing EmailJS service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Existing EmailJS template |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS browser public key |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog public project ingestion key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Existing PostHog ingestion host |

EmailJS browser identifiers and the PostHog ingestion key are public identifiers by design. Next.js embeds `NEXT_PUBLIC_` values in the browser bundle at build time. Private EmailJS keys and PostHog personal API keys must never go in these fields. Changing production values requires a rebuild.

The contact form retains the old template parameters: `from_name`, `from_email`, `subject`, and `message`, with `reply_to` also supplied. It validates required fields, prevents duplicate sends, includes a honeypot and local send throttling, and reports success or failure without discarding a failed message. Direct email remains available if configuration or sending fails. Confirm the EmailJS template recipient and Reply-To setting, and allow the production domain and localhost in EmailJS if domain restrictions are enabled. Client-side spam checks supplement EmailJS provider protections.

PostHog initializes only in production when both settings are present. It records page visits and departures with identified-only profiles. Autocapture and session recordings are disabled so contact messages are not recorded. Analytics loading failures do not interrupt the portfolio.

## Assets and content

- `public/images/faizan-newest.webp`: optimized copy of the supplied latest JPEG, with orientation normalized and metadata removed. Next.js serves responsive sizes.
- `public/Faizan_Yousaf_Software_Engineer.pdf`: downloadable copy of the owner-confirmed latest `public/resume.pdf`. Both URLs remain available.
- `public/resume.docx`: existing editable CV source. Export future approved edits to both PDF filenames.
- `public/certificates/`: WebP previews rendered from the supplied Coursera and NSCT PDFs. The NSCT preview omits the CNIC number; source PDFs are unchanged and are not published. Images open at full size from the credentials gallery.
- `public/projects/`: optimized project screenshots, including the supplied ELD Trip Planner and Craftopia storefront images.
- `public/companies/deaimer.png`: supplied Deaimer logo used in the experience timeline.
- `components/research.tsx` and `public/research/`: three research perspectives published on Deaimer, their original cover artwork, and article/PDF links. Article data lives in `data/portfolio.ts`.
- `data/portfolio.ts`: project repositories, experience, skills and certificate links. Missing Coursera destinations were recovered from the CV document.
- `components/contact.tsx`: contact form, direct email and clipboard action.
- `instrumentation-client.ts`: PostHog initialization.
- `app/globals.css`: existing design and responsive form styling.

The old local React/CRACO portfolios are reference material and are unchanged. The replacement GitHub commit removes the old CRA source and tracked `.env` from the current repository tree. Git history is preserved.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

See `DEPLOYMENT_CHECKLIST.md` for verification results and outstanding deployment steps. Contact transport tests use an intercepted EmailJS response; live email delivery must be confirmed through the configured EmailJS account.

## Redeploy the existing Vercel project

Use `Faizanyousaf140/Faizans-Portfolio`, production branch `main`. `vercel.json` declares the Next.js preset, `npm ci`, `npm run build` and `.next` output. Set Vercel Root Directory to the repository root; clear any old frontend directory setting. Replace old `REACT_APP_*` variables with the variables above in Vercel, then redeploy after pushing.

The previous public portfolio responds at https://faizanyousafs-portfolio.vercel.app and https://faizans-portfolio-seven.vercel.app. The former is used for canonical URLs to match the current CV. Preserve existing domain assignments when redeploying.

`CONTENT_AUDIT.md` retains the original content review and date discrepancies requiring owner verification.
