import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators/forms";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = inquirySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = createAdminClient();
  await supabase.from("inquiries").insert({
    property_id: parsed.data.propertyId,
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    message: parsed.data.message,
    source: "property"
  });

  return NextResponse.json({ ok: true });
}
