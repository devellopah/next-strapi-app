import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto py-6">
      <Link href="/">Главная</Link>
      <Link href="/about-us">О нас</Link>
    </main>
  );
}