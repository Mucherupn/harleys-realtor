import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validators/forms";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = quoteSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = createAdminClient();
  await supabase.from("quote_requests").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    service_type: parsed.data.serviceType,
    message: parsed.data.message
  });

  return NextResponse.json({ ok: true });
}
