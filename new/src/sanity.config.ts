'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from '@/sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

export default defineConfig({
  name: 'default',
  title: 'My Project',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
