import { dispatchLead } from "@/lib/forms/dispatch-lead";
import { NextResponse } from "next/server";

type ConsultationPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  practice: string;
  format: string;
  message?: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: ConsultationPayload;
  try {
    body = (await request.json()) as ConsultationPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (
    !body.name?.trim() ||
    !body.email?.trim() ||
    !body.phone?.trim() ||
    !body.practice ||
    !body.format
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { website: _hp, ...lead } = body;
  console.info("[consultation]", { ...lead, receivedAt: new Date().toISOString() });
  await dispatchLead("consultation", lead);

  return NextResponse.json({ ok: true });
}
