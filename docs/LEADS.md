# Lead capture (enquiry, consultation, newsletter)

Forms POST to:

- `/api/enquiry`
- `/api/consultation`
- `/api/newsletter`

When `LEAD_WEBHOOK_URL` is set (server-only in Vercel), each submission is forwarded as JSON:

```json
{
  "type": "enquiry",
  "name": "...",
  "email": "...",
  "source": "kacertifiex-website",
  "receivedAt": "2025-10-01T12:00:00.000Z"
}
```

## Zapier / Make / HubSpot

1. Create a **Catch Hook** (Zapier) or inbound webhook (Make).
2. Paste the URL into Vercel → **Environment Variables** → `LEAD_WEBHOOK_URL`.
3. Redeploy. Test from **Contact** and **Book consultation**.

Without a webhook, submissions are still accepted; payloads are logged in server logs only (not suitable for production).

Newsletter `list` values: `tax-alert` (Tax Intelligence Centre), `insights` (Insights hub sidebar and signup band).

## Optional next step

Add email notifications in your automation (e.g. Zapier → Gmail/Outlook to `info@kacertifiex.com`).
