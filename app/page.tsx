import { getProjects, getWork } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

import "./page.css";
import "./grid.css";

export default async function Home() {
  const projects = await getProjects();
  const work = await getWork();

  console.log(work);
  return (
    <main className="home-page">
      <div className="landing-content">
        <div className="landing-content-container grid">
          <h1 className="header-title type-heading">{work.title}</h1>
          <hr className="full-bleed-divider" />
          <p className="header-description type-body">{work.description}</p>
          <Image
            src={work.image.asset.url}
            alt={work.image.alt || work.name}
            width={800}
            height={600}
            className="header-image"
          />
        </div>
      </div>
      <div className="work-projects-container">
        <h2 className="work-projects type-heading">PROJECTS</h2>
      </div>
      <ul className="home-projects-list mobile-padding">
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
