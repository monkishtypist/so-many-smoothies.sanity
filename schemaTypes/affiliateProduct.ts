// schemaTypes/affiliateProduct.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "affiliateProduct",
  title: "Affiliate Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link",
      title: "Affiliate Link",
      type: "url",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
  ],
});
