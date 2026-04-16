import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  revalidatePath(body.path ?? "/");
  return NextResponse.json({ revalidated: true });
}
