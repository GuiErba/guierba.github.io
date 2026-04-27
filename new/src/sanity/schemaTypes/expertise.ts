import { defineField, defineType } from 'sanity';

export const expertiseType = defineType({
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Tag Number',
      type: 'string',
      description: 'e.g. "01", "02", "03"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Software Architecture"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stack',
      title: 'Stack Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies listed below the description',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
});
