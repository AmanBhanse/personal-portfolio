import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "imageurl",
      title: "Image URL",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "feedback",
      title: "Feedback",
      type: "string",
    }),
  ],
});
