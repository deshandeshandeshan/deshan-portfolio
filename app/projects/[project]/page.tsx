import { PageBuilder } from "@/components/PageBuilder";
import { getProject } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

export const revalidate = 5;

type Props = {
  params: Promise<{ project: string }>;
};

export default async function Project({ params }: Props) {
  const { project: slug } = await params;
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
