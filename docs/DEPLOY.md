# Deploy KACERTIFIEX (Phase 1)

## Git (first time)

From `kacertifiex-web`:

```bash
git init
git add .
git commit -m "Initial KACERTIFIEX Phase 1 site"
```

Create a GitHub repo and push, or import the folder in Vercel without Git.

## Vercel (recommended)

1. Push this folder to GitHub (repo root = `kacertifiex-web`), or import the folder in Vercel.
2. **Root directory:** `.` (if the repo is only `kacertifiex-web`) or `kacertifiex-web` (if the repo is the parent `KACERTIFIEX` folder).
3. **Environment variables** (Production):

   | Variable | Example |
   |----------|---------|
   | `NEXT_PUBLIC_SITE_URL` | `https://www.kacertifiex.com` |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `2348038355217` |
   | `NEXT_PUBLIC_GA_ID` | GA4 ID (optional) |
   | `NEXT_PUBLIC_CLARITY_ID` | Clarity ID (optional) |
   | `LEAD_WEBHOOK_URL` | HubSpot/Zapier webhook (optional) |

4. Connect custom domain and enable HTTPS.
5. Add LinkedIn/Instagram URLs in `content/site.json` → `social` (leave `url` empty until you have them).
6. Run locally: `npm run check:env` (review warnings before go-live).

## After deploy

- Test **Contact**, **WhatsApp**, and **Book consultation** flows on mobile.
- Configure `LEAD_WEBHOOK_URL` — see [LEADS.md](LEADS.md).
- Submit sitemap: `{SITE_URL}/sitemap.xml`
- Update `content/site.json` if email or hours change—redeploy.

## Go-live checklist

1. `npm run build` and `npm run check:env` locally.
2. Set Production env vars (see `.env.production.example`).
3. Deploy preview → test `/contact`, `/book-consultation`, `/api/enquiry` POST.
4. Point `www.kacertifiex.com` DNS to Vercel; verify HTTPS and `/sitemap.xml`.
5. Add LinkedIn/Instagram URLs in `content/site.json` when ready.
6. Search Console: submit sitemap; request indexing for `/` and `/services`.
