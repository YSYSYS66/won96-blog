export const contentConfig = `import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    publishDate: z.date()
  })
});

export const collections = { posts };`;
