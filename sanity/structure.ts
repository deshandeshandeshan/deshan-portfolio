import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Deshan's Portfolio")
    .items([
      S.documentTypeListItem("project").title("Projects"),
      S.listItem()
        .title("About Page")
        .id("about")
        .child(S.editor().id("about").schemaType("about").documentId("about")),
    ]);
