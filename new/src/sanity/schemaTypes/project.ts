import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'index',
      title: 'Index',
      type: 'string',
      description: 'e.g. "01", "02"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. "Fintech · Architecture"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
      description: 'e.g. "99.99% uptime · 12ms p99 latency"',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'demo',
      title: 'Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on the home page',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hasCaseStudy',
      title: 'Has Case Study',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      type: 'object',
      hidden: ({ parent }) => !parent?.hasCaseStudy,
      fields: [
        defineField({
          name: 'tagline',
          title: 'Tagline',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'problem',
          title: 'The Problem',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'The Problem',
            }),
            defineField({
              name: 'body',
              title: 'Body Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            }),
            defineField({
              name: 'callout',
              title: 'Callout',
              type: 'text',
              rows: 2,
              description: 'Highlighted quote / root cause',
            }),
          ],
        }),
        defineField({
          name: 'decision',
          title: 'Architecture Decision',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'Architecture Decision',
            }),
            defineField({
              name: 'body',
              title: 'Body Paragraphs',
              type: 'array',
              of: [{ type: 'text' }],
            }),
            defineField({
              name: 'options',
              title: 'Options Considered',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Option Label',
                      type: 'string',
                    }),
                    defineField({
                      name: 'chosen',
                      title: 'Chosen',
                      type: 'boolean',
                      initialValue: false,
                    }),
                    defineField({
                      name: 'reason',
                      title: 'Reason',
                      type: 'text',
                      rows: 3,
                    }),
                  ],
                  preview: {
                    select: { title: 'label', subtitle: 'chosen' },
                    prepare({ title, subtitle }) {
                      return {
                        title,
                        subtitle: subtitle ? '✅ Chosen' : '—',
                      };
                    },
                  },
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'tradeoffs',
          title: 'Trade-offs & Tensions',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'Trade-offs & Tensions',
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'tension',
                      title: 'Tension',
                      type: 'string',
                    }),
                    defineField({
                      name: 'resolution',
                      title: 'Resolution',
                      type: 'text',
                      rows: 3,
                    }),
                  ],
                  preview: {
                    select: { title: 'tension' },
                  },
                },
              ],
            }),
          ],
        }),
        defineField({
          name: 'results',
          title: 'Results',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'Results',
            }),
            defineField({
              name: 'metrics',
              title: 'Metrics',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'value',
                      title: 'Value',
                      type: 'string',
                    }),
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                    }),
                    defineField({
                      name: 'delta',
                      title: 'Delta',
                      type: 'string',
                      description: 'e.g. "↑ from 99.2%"',
                    }),
                  ],
                  preview: {
                    select: { title: 'value', subtitle: 'label' },
                  },
                },
              ],
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 5,
            }),
          ],
        }),
        defineField({
          name: 'stack',
          title: 'Stack',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
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
    select: { title: 'title', subtitle: 'category' },
  },
});
