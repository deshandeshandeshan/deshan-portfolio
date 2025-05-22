import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

import "./page.css";
import "./grid.css";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <div className="landing-content">
        <div className="landing-content-container grid">
          <div className="home-skills-description">
            Web developer and Designer
          </div>
          <Link href={"/about"} className="about-link spacing-120">
            About →
          </Link>
          <h1 className="home-title">Deshan Mclachlan</h1>
          <h2 className="home-sub-title">Selected Work</h2>
          <h3 className="home-sub-sub">23&apos; - present</h3>
        </div>
      </div>
      <ul className="home-projects-list">
        {projects.map((project) => (
          <li className="home-project" key={project._id}>
            {project.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
