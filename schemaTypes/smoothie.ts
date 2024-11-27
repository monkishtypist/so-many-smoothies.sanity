// schemaTypes/smoothie.ts
import { defineType, defineField } from 'sanity';
// import ImageWithGenerateButton from '../components/ImageWithGenerateButton';

export default defineType({
  name: 'smoothie',
  type: 'document',
  title: 'Smoothie Recipe',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, ""), // Replace spaces and special chars with hyphens
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: "affiliateProducts",
      title: "Affiliate Products",
      type: "array",
      of: [{ type: "reference", to: { type: "affiliateProduct" } }],
    }),
    defineField({
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'steps',
      type: 'array',
      title: 'Preparation Steps',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Smoothie Image',
      // components: {
      //   input: ImageWithGenerateButton,
      // },
      options: {
        metadata: ['image'],
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Date Published',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'recipePrompt',
      type: 'text',
      title: 'Recipe Prompt',
      description: 'The full recipe prompt sent to OpenAI.',
    }),
    defineField({
      name: 'imagePrompt',
      type: 'text',
      title: 'Image Prompt',
      description: 'The image prompt used for generating the smoothie image.',
    }),
  ],
});
