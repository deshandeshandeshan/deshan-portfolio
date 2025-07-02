import { defineField, defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact Details",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        defineField({
          name: "Contact",
          title: "Contact",
          type: "object",
          fields: [
            defineField({
              name: "email",
              title: "Email",
              type: "url",
            }),
            defineField({
              name: "phoneNumber",
              title: "Phone Number",
              type: "number",
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
