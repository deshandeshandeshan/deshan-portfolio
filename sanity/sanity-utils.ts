import { createClient, groq } from "next-sanity";
import { PROJECTS_QUERY } from "./lib/queries";
import { Project } from "@/types/Project";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
  });

  return client.fetch(PROJECTS_QUERY);
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug }
  );
}
