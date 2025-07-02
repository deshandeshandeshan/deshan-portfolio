import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

import "./page.css";
import "./grid.css";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="home-page mobile-padding">
      <div className="landing-content">
        <div className="landing-content-container grid spacing-120">
          <h1 className="home-title type-heading spacing-4">
            Deshan Mclachlan
          </h1>
          <h2 className="home-sub-title type-sub spacing-4">Selected Work</h2>
          <h3 className="home-sub-sub type-body spacing-4">
            23&apos; - present
          </h3>
        </div>
      </div>
      <ul className="home-projects-list">
        {projects.map((project) => (
          <li className="home-project grid spacing-80" key={project._id}>
            <div className="home-project-details">
              <div className="spacing-4">
                <span className="type-sub gap-4">{project.name}</span>
                <span className="text-grey type-details-regular">
                  {project.year}
                </span>
              </div>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="home-view-project type-body spacing-16 text-orange"
            >
              View Project →
            </Link>
            <div className="home-first-image-wrapper">
              {project.firstImage?.asset?.url && (
                <Image
                  src={project.firstImage.asset.url}
                  alt={project.firstImage.alt || project.name}
                  width={800}
                  height={600}
                  className="home-first-image"
                />
              )}
            </div>
            <div className="home-second-image-wrapper">
              {project.secondImage?.asset?.url && (
                <Image
                  src={project.secondImage.asset.url}
                  alt={project.secondImage.alt || project.name}
                  width={800}
                  height={600}
                  className="home-second-image"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
