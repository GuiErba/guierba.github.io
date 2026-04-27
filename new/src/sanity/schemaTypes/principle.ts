import { defineField, defineType } from 'sanity';

export const principleType = defineType({
  name: 'principle',
  title: 'Principle',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      description: 'e.g. "Complexity is the enemy of reliability."',
      validation: (rule) => rule.required(),
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
    select: { title: 'text' },
  },
});
