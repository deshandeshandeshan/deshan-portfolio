import { createClient } from "next-sanity";
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
