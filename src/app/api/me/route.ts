import { supabaseServer } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function GET() {
  const { data } = await supabaseServer().auth.getUser();
  return NextResponse.json(data?.user ? { loggedIn: true, id: data.user.id } : { loggedIn: false });
}
