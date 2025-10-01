import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { structure } from "./sanity/structure";
import { muxInput } from "sanity-plugin-mux-input";

const config = defineConfig({
  projectId: "7t1ogy4h",
  dataset: "production",
  title: "My Portfolio",
  apiVersion: "2025-05-21",
  basePath: "/admin",

  plugins: [structureTool({ structure }), muxInput()],

  schema: { types: schemas },
});

export default config;
