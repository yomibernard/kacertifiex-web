# Launch checklist (post-deploy)

## 1. Vercel environment (Production)

| Variable | Recommended value |
|----------|-------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.kacertifiex.com` (or your Vercel URL until DNS is live) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `2348038355217` |
| `LEAD_WEBHOOK_URL` | Zapier / Make / HubSpot inbound webhook |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 |
| `NEXT_PUBLIC_CLARITY_ID` | Optional Microsoft Clarity |

After changing env vars, **Redeploy** production from the Vercel dashboard.

CLI (from `kacertifiex-web`):

```bash
npx vercel env add NEXT_PUBLIC_SITE_URL production
npx vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER production
```

## 2. Public access

If visitors see a Vercel login screen, disable **Deployment Protection** for Production:

Vercel → Project → Settings → Deployment Protection → set Production to **None** (or allowlist only preview).

## 3. Custom domain

1. Vercel → Domains → add `kacertifiex.com` and `www.kacertifiex.com`.
2. Point DNS A/CNAME records as Vercel instructs.
3. Set `NEXT_PUBLIC_SITE_URL` to `https://www.kacertifiex.com` and redeploy.

## 4. Smoke tests

- [ ] Homepage, `/contact`, `/book-consultation` on mobile
- [ ] WhatsApp launcher opens with correct number
- [ ] Submit test enquiry (check Vercel function logs or webhook)
- [ ] `/sitemap.xml` and `/robots.txt` use your production URL
- [ ] Google Search Console: add property, submit sitemap

## 5. Content

- [ ] LinkedIn / Instagram URLs in `content/site.json` → `social`
- [ ] Verify stats and legal name against your company profile
- [ ] Legal pages reviewed by counsel (NDPA)

## 6. Ongoing

- Push to `main` on GitHub → Vercel auto-deploys
- Edit copy in `content/` without code changes where possible
- See [CMS.md](CMS.md), [LEADS.md](LEADS.md), [DEPLOY.md](DEPLOY.md)
