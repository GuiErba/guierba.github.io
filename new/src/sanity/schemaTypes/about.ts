import { defineField, defineType } from 'sanity';

export const aboutType = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 2,
      description: 'e.g. "Engineer by obsession, architect by necessity."',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraphs',
      title: 'Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Each item is a paragraph in the bio section',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Section' };
    },
  },
});
