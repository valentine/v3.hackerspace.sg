import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const newsSchema = z.object({
  title: z.string(),
  author: z.string(),
  date: z.date(),
  publication: z.string(),
  slug: z.string(),
});

const IndexCarousel = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.array(
      z.object({
        src: image(),
        title: z.string(),
      }),
    ),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about/news" }),
  schema: newsSchema,
});

const newsExcerpts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about/news-excerpts" }),
  schema: newsSchema,
});

export const collections = {
  IndexCarousel,
  news,
  newsExcerpts,
};
