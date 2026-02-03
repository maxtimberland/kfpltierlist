import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>KFPL TierList</h1>
      <Link href="/community">커뮤니티 바로가기</Link>
    </main>
  );
}
