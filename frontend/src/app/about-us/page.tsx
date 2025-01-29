import Link from "next/link";

export default function AboutUsPage() {
  return (
    <main className="container mx-auto py-6">
      <Link href="/">Главная</Link>
      <Link href="/projects">Проекты</Link>
    </main>
  );
}