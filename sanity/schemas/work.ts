import { defineField, defineType } from "sanity";

export const work = defineType({
  name: "work",
  title: "Work Page",
  type: "document",
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
      title: "Video file",
      name: "video",
      type: "mux.video",
    }),
    defineField({
      name: "image",
      title: "Image",
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
