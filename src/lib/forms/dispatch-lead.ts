export async function dispatchLead(
  type: "enquiry" | "consultation" | "newsletter",
  payload: Record<string, unknown>,
): Promise<void> {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) return;

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type,
      ...payload,
      receivedAt: new Date().toISOString(),
      source: "kacertifiex-website",
    }),
  });

  if (!res.ok) {
    console.error("[lead-webhook]", res.status, await res.text().catch(() => ""));
  }
}
