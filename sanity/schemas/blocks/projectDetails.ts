import { defineField, defineType } from "sanity";

export const projectDetails = defineType({
  name: "projectDetails",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
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
          type: "string",
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
      name: "projectStack",
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
  ],
});
