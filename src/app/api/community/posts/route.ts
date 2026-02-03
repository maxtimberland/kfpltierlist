import { supabaseServer } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supa = supabaseServer();
  const { data: { user } } = await supa.auth.getUser();
  if (!user) return NextResponse.json({ error: "login" }, { status: 401 });

  const body = await req.json();
  await supa.from("community_posts").insert({
    user_id: user.id,
    title: body.title || "무제",
    type: body.type,
    is_anonymous: body.isAnonymous,
    payload: body.payload
  });
  return NextResponse.json({ ok: true });
}
