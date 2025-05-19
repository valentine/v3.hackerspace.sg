// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import path from 'path';
import tailwindcss from 'tailwindcss';
import tailwindcssNesting from 'tailwindcss/nesting';
import autoprefixer from 'autoprefixer';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import remarkCustomHeaderId from 'remark-custom-header-id';

import playformInline from '@playform/inline';

// https://astro.build/config
export default defineConfig({
  site: 'https://hackerspace.sg',
  experimental: {
    preserveScriptOrder: true,
  },
  integrations: [react(), mdx(), icon(), sitemap(), playformInline()],
  markdown: {
    remarkPlugins: [remarkCustomHeaderId],
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
          tailwindcss({
            config: path.resolve(import.meta.dirname, 'tailwind.config.ts'),
          }),
          autoprefixer(),
        ],
      },
    },
  },
});
