import { NextResponse } from "next/server";
import { valuationSchema } from "@/lib/validators/forms";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = valuationSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = createAdminClient();
  await supabase.from("valuation_requests").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    property_type: parsed.data.propertyType,
    location: parsed.data.location,
    message: parsed.data.message
  });

  return NextResponse.json({ ok: true });
}
