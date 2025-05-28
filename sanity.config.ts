import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "7t1ogy4h",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2025-05-21",
  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
