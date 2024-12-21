// schemaTypes/about.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About Page',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return { title: 'About Page' };
    },
  },
});
