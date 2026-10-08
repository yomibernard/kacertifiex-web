import { dispatchLead } from "@/lib/forms/dispatch-lead";
import { NextResponse } from "next/server";

export type EnquiryPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  enquiry: string;
  message: string;
  website?: string;
};

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = (await request.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name?.trim() || !body.email?.trim() || !body.enquiry || !body.message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { website: _hp, ...lead } = body;
  console.info("[enquiry]", { ...lead, receivedAt: new Date().toISOString() });
  await dispatchLead("enquiry", lead);

  return NextResponse.json({ ok: true });
}
