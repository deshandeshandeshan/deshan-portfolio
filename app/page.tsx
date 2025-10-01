import { getProjects, getWork } from "@/sanity/sanity-utils";
import HomeContent from "@/components/HomeContent";
import HeaderContent from "@/components/HeaderMedia";

export default async function Home() {
  const projects = await getProjects();
  const work = await getWork();

  return (
    <main className="home-page">
      <HeaderContent work={work} />
      <HomeContent projects={projects} />
    </main>
  );
}
