import { defineCollection, z } from 'astro:content';
import { CATEGS } from 'src/consts.ts';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z
        .string()
        .min(20, 'Description must be at least 20 characters')
        .max(200, 'Description must be at most 200 characters'),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image(),
      heroTitle: z.string(),
      category: z.enum(CATEGS),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
