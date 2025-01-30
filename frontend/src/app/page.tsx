import { Button } from "@/components/ui/button";
import Link from "next/link";


async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337"
  try {
    const response = await fetch(baseUrl + url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function HomePage() {
  const { data: { title, description } } = await getStrapiData("/api/home-page")
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
      <Button>Our Cool Button</Button>
      <Link href="/about-us">О нас</Link>
      <Link href="/projects">Проекты</Link>
    </main>
  );
}