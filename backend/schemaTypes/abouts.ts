import { defineField, defineType } from "sanity";

export default defineType({
  name: "abouts",
  title: "Abouts",
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
      type: "string",
    }),
    defineField({
      name: "imgUrl",
      title: "Image URL",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
