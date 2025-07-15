import { createClient } from "next-sanity";
import {
  CONTACT_QUERY,
  PROJECTS_QUERY,
  SINGLE_PROJECT_QUERY,
  WORK_QUERY,
} from "./lib/queries";
import { Contact } from "./types";

export const client = createClient({
  projectId: "7t1ogy4h",
  dataset: "production",
  apiVersion: "2025-03-11",
  useCdn: true,
});

export async function getProjects() {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: true,
  });

  return client.fetch(PROJECTS_QUERY);
}

export async function getProject(slug: string) {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: true,
  });

  return client.fetch(SINGLE_PROJECT_QUERY, { slug });
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

export async function getContact(): Promise<Contact | null> {
  const client = createClient({
    projectId: "7t1ogy4h",
    dataset: "production",
    apiVersion: "2025-05-21",
    useCdn: true,
  });

  return await client.fetch<Contact | null>(CONTACT_QUERY);
}
