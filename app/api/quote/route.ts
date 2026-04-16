import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const payload = await request.json();
  const supabase = createAdminClient();
  await supabase.from("quote_requests").insert(payload);
  return NextResponse.json({ ok: true });
}
