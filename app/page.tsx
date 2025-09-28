import { getProjects, getWork } from "@/sanity/sanity-utils";
import HomeContent from "@/components/HomeContent";

export default async function Home() {
  const projects = await getProjects();
  const work = await getWork();

  return (
    <main className="home-page">
      <HomeContent projects={projects} work={work} />
    </main>
  );
}
