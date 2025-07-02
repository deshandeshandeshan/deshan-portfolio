import { defineField, defineType } from "sanity";

export const work = defineType({
  name: "work",
  title: "Work Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
