import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Deshan's Portfolio")
    .items([
      S.listItem()
        .title("Work Page")
        .id("work")
        .child(
          S.editor()
            .title("Work Page")
            .id("work")
            .schemaType("work")
            .documentId("work")
        ),
      S.documentTypeListItem("project").title("Projects"),
      S.listItem()
        .title("Contact Details")
        .id("contact")
        .child(
          S.editor()
            .title("Contact Details")
            .id("contact")
            .schemaType("contact")
            .documentId("contact")
        ),
    ]);
