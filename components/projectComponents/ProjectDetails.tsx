import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";

import "./ProjectDetails.css";
import "@/app/grid.css";

type projectDetailsProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "projectDetails" }
>;

export function ProjectDetails({
  title,
  description,
  year,
  liveSite,
  projectDeliverables,
  projectStack,
}: projectDetailsProps) {
  return (
    <section className="project-details">
      <div className="details grid">
        <h2 className="project-title type-sub spacing-4">{title}</h2>
        <p className="project-description type-body spacing-16 text-grey spacing-64">
          {description}
        </p>
        <div className="first-project-details spacing-12">
          <div className="spacing-12">
            <h3 className="type-body-bold">Live Site</h3>
            <a href={liveSite?.liveSite ?? ""} className="type-body text-grey">
              {liveSite?.liveSiteTitle}
            </a>
          </div>
          <div>
            <h3 className="type-body-bold">Deliverables</h3>
            <ul className="text-grey">
              {projectDeliverables?.map((projectDeliverable, index) => (
                <li key={index} className="type-body">
                  {projectDeliverable.deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="second-project-details">
          <div className="spacing-12">
            <h3 className="type-body-bold">Published</h3>
            <p className="type-body text-grey">{year}</p>
          </div>
          <div>
            <h3 className="type-body-bold">Stack</h3>
            <ul className="text-grey">
              {projectStack?.map((stack, index) => (
                <li key={index} className="type-body">
                  {stack.technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
