import { dispatchLead } from "@/lib/forms/dispatch-lead";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { email?: string; list?: string; website?: string };
  try {
    body = (await request.json()) as { email?: string; list?: string; website?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  console.info("[newsletter]", { email, list: body.list ?? "tax-alert" });
  await dispatchLead("newsletter", { email, list: body.list ?? "tax-alert" });

  return NextResponse.json({ ok: true });
}
