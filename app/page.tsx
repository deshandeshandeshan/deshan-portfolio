import { getProjects, getWork } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 5;

import "./page.css";
import "./grid.css";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const projects = await getProjects();
  const work = await getWork();

  return (
    <main className="home-page">
      <div className="landing-content">
        <div className="landing-content-container grid">
          <div className="landing-content-header grid">
            <h1 className="header-title type-heading">
              {work?.title ?? "Untitled"}
            </h1>
            <hr className="full-bleed-divider" />
            <p className="header-description type-body text-grey">
              {work?.description ?? "No description available."}
            </p>
          </div>
          {work?.image?.asset?.url && (
            <Image
              src={urlFor(work?.image?.asset?.url)
                .auto("format")
                .quality(90)
                .url()}
              alt={work?.image?.alt || ""}
              width={3840}
              height={3840}
              className="header-image"
            />
          )}
        </div>
      </div>
      <div className="work-projects-container">
        <h2 className="work-projects type-heading">PROJECTS</h2>
      </div>
      <ul className="home-projects-list">
        {projects.map((project) => (
          <li className="project" key={project._id}>
            <div className="home-project grid">
              <div className="home-project-details spacing-64">
                <h2 className="home-project-title type-sub spacing-4">
                  {project.name}
                </h2>
                <p className="home-project-description type-body spacing-16 text-grey">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="home-view-project type-body spacing-16 text-blue"
                >
                  View Project →
                </Link>
              </div>
              <div className="first-project-details">
                <div className="spacing-12">
                  <h3 className="type-body-bold">Live Site</h3>
                  <a
                    href={project.liveSite?.liveSite ?? ""}
                    className="type-body text-grey website-link"
                  >
                    {project.liveSite?.liveSiteTitle}
                  </a>
                </div>
                <div>
                  <h3 className="type-body-bold">Deliverables</h3>
                  <ul className="text-grey">
                    {project.projectDeliverables?.map(
                      (projectDeliverable, index) => (
                        <li
                          key={projectDeliverable._key ?? index}
                          className="type-body"
                        >
                          {projectDeliverable.deliverable}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="second-project-details">
                <div className="spacing-12">
                  <h3 className="type-body-bold">Published</h3>
                  <p className="type-body text-grey">{project.year}</p>
                </div>
                <div>
                  <h3 className="type-body-bold">Stack</h3>
                  <ul className="text-grey">
                    {project.projectStack?.map((stack, index) => (
                      <li key={stack._key ?? index} className="type-body">
                        {stack.technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="home-image-wrapper">
                {project.firstImage?.asset?.url && (
                  <Image
                    src={urlFor(project.firstImage?.asset?.url)
                      .auto("format")
                      .quality(90)
                      .url()}
                    alt={project.firstImage?.alt ?? ""}
                    width={3840}
                    height={600}
                    className="home-image"
                  />
                )}
              </div>
            </div>
            <hr className="project-full-bleed-divider" />
          </li>
        ))}
      </ul>
    </main>
  );
}
