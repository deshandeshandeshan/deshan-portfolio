import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";

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
    <main>
      <section className="project-details">
        <h2>{title}</h2>
        <div className="">
          <div className="home-project-details spacing-64">
            <h2 className="project-title type-sub spacing-4">{title}</h2>
            <p className="project-title type-body spacing-16 text-grey">
              {description}
            </p>
          </div>
          <div className="first-project-details">
            <div className="spacing-12">
              <h3 className="type-body-bold">Live Site</h3>
              <a
                href={liveSite?.liveSite ?? ""}
                className="type-body text-grey"
              >
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
    </main>
  );
}
