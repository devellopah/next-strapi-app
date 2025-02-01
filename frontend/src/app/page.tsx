import { HeroSection } from "@/components/custom/hero-section";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"]
            },
            link: {
              populate: true
            }
          }
        },
        "layout.features-section": {
          populate: {
            feature: {
              populate: true,
            },
          },
        },
      }
    }
  },
});

async function getStrapiData(path: string) {
  const baseUrl = getStrapiURL()

  const url = new URL(path, baseUrl);
  url.search = homePageQuery;

  console.log(url.href);

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function HomePage() {
  // const { data: { title, description, blocks } } = await getStrapiData("/api/home-page")
  const strapiData = await getStrapiData("/api/home-page");

  console.dir(strapiData, { depth: null });

  const { title, description, blocks } = strapiData.data;

  return (
    <main>
      <HeroSection data={blocks[0]} />
    </main>
  );
}