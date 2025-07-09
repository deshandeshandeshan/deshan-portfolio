import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "doublePortrait" }),
    defineArrayMember({ type: "landscape" }),
    defineArrayMember({ type: "doubleLandscape" }),
    defineArrayMember({ type: "projectDetails" }),
    defineArrayMember({ type: "projectHeaderImage" }),
  ],
});
