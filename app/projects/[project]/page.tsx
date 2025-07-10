import { PageBuilder } from "@/components/PageBuilder";
import { getProject } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return project?.content ? (
    <div>
      <PageBuilder content={project.content} />
    </div>
  ) : null;
}
