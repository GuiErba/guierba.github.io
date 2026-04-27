import { defineField, defineType } from 'sanity';

export const contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Remote / Global"',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      description: 'e.g. "Open to select work"',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g. "Let\'s build something together"',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Info' };
    },
  },
});
