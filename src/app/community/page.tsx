"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabaseBrowser } from "@/lib/supabaseClient";

export default function Community() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/community/feed").then(r=>r.json()).then(setPosts);
  }, []);

  const login = () => supabaseBrowser().auth.signInWithOAuth({ provider:"discord" });

  return (
    <main style={{ padding: 40 }}>
      <button onClick={login}>디스코드 로그인</button>
      <Link href="/community/new">글쓰기</Link>
      {posts.map(p=>(
        <div key={p.id}>
          <Link href={`/community/${p.id}`}>{p.title}</Link>
        </div>
      ))}
    </main>
  );
}
