import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto py-6">
      <Button>Our Cool Button</Button>
      <Link href="/about-us">О нас</Link>
      <Link href="/projects">Проекты</Link>
    </main>
  );
}