import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g., Work History, Career Timeline",
    }),
    defineField({
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExperience" }],
    }),
  ],
});
