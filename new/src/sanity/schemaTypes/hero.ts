import { defineField, defineType } from 'sanity';

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "// software engineer · architect"',
    }),
    defineField({
      name: 'nameLine1',
      title: 'Name Line 1',
      type: 'string',
      description: 'First line of the name, e.g. "Guilherme"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nameLine2',
      title: 'Name Line 2',
      type: 'string',
      description: 'Second line (accented), e.g. "Erba"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Hero paragraph below the name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA Text',
      type: 'string',
      description: 'e.g. "View Projects"',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      description: 'e.g. "#projects"',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Text',
      type: 'string',
      description: 'e.g. "Get in Touch"',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      description: 'e.g. "#contact"',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Section' };
    },
  },
});
