/**
 * Local / pre-deploy sanity check. Does not require secrets.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const webhook = process.env.LEAD_WEBHOOK_URL;

const warnings = [];

if (!siteUrl) {
  warnings.push("NEXT_PUBLIC_SITE_URL is unset (defaults to https://www.kacertifiex.com in code).");
}
if (!whatsapp) {
  warnings.push("NEXT_PUBLIC_WHATSAPP_NUMBER is unset (falls back to content/site.json).");
}
if (!webhook) {
  warnings.push(
    "LEAD_WEBHOOK_URL is unset — forms will log only; set in Vercel for production leads.",
  );
}

if (warnings.length === 0) {
  console.log("Env check OK.");
} else {
  console.log("Env check — review before launch:\n");
  warnings.forEach((w) => console.log(`  • ${w}`));
}
