import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "year",
      title: "Year Published",
      type: "string",
    }),
    defineField({
      name: "liveSite",
      title: "Live Site",
      type: "object",
      fields: [
        defineField({
          name: "liveSite",
          title: "Live Site URL",
          type: "url",
        }),
        defineField({
          name: "liveSiteTitle",
          title: "Live Site Title (format: 'LIVESITE.COM')",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "projectDeliverables",
      title: "Project Deliverables",
      type: "array",
      of: [
        defineField({
          name: "deliverables",
          title: "deliverables",
          type: "object",
          fields: [
            defineField({
              name: "deliverable",
              title: "Deliverable",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "pojectStack",
      title: "Project Stack",
      type: "array",
      of: [
        defineField({
          name: "stack",
          title: "Stack",
          type: "object",
          fields: [
            defineField({
              name: "technology",
              title: "Technology",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "firstImage",
      title: "First Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "secondImage",
      title: "Second Image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});
