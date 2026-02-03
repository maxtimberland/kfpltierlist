import { supabaseServer } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function GET() {
  const { data } = await supabaseServer()
    .from("community_posts_public")
    .select("*")
    .order("created_at", { ascending: false });
  return NextResponse.json(data ?? []);
}
