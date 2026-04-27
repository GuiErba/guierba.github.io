import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'e.g. @guilhermeerba',
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      description: 'Hex color for browser theme, e.g. #080808',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'GitHub', value: 'github' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Twitter', value: 'twitter' },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
