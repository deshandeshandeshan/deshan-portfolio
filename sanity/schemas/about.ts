import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Display Image",
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
      name: "email",
      title: "Email",
      type: "url",
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        defineField({
          name: "education",
          title: "Education",
          type: "object",
          fields: [
            defineField({
              name: "yearsCompleted",
              title: "Years Completed",
              type: "string",
            }),
            defineField({
              name: "providerName",
              title: "Provider Name",
              type: "string",
            }),
            defineField({
              name: "degree",
              title: "Degree",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        defineField({
          name: "experience",
          title: "Experience",
          type: "object",
          fields: [
            defineField({
              name: "yearsCompleted",
              title: "Years Completed",
              type: "string",
            }),
            defineField({
              name: "jobName",
              title: "Job Name",
              type: "string",
            }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        defineField({
          name: "socialLink",
          title: "Social Link",
          type: "object",
          fields: [
            defineField({
              name: "link",
              title: "Link",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
});
