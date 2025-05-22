import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </main>
  );
}
