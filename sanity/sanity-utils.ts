import { createClient, groq } from "next-sanity";
import { PROJECTS_QUERY, WORK_QUERY } from "./lib/queries";
import { Project } from "@/types/Project";

export const client = createClient({
  projectId: "qzoemo7f",
  dataset: "production",
  apiVersion: "2025-03-11",
  useCdn: true,
});

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: true,
  });

  return client.fetch(PROJECTS_QUERY);
}

export async function getWork() {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: true,
  });

  return client.fetch(WORK_QUERY);
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: true,
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
