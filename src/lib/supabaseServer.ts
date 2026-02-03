import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export const supabaseServer = () =>
  createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookies().getAll(),
        setAll: (cs) => cs.forEach(c => cookies().set(c))
      }
    }
  );
