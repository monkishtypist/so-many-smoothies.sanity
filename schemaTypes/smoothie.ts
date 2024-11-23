// schemaTypes/smoothie.ts
import { defineType, defineField } from 'sanity';

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
      name: 'description',
      type: 'text',
      title: 'Description',
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
        list: [], // This allows editors to pick from existing strings
        layout: 'tags', // Displays a "tag input" style UI
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Smoothie Image',
      options: { 
        metadata: ['image'],
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Used for accessibility and SEO purposes',
        },
      ],
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Date Published',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
