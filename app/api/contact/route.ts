import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators/forms";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = createAdminClient();
  await supabase.from("inquiries").insert({ ...parsed.data, source: "contact" });
  return NextResponse.json({ ok: true });
}
