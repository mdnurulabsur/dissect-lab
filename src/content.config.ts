import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
  }),

  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    sponsor: z.string(),
    period: z.string(),
    status: z.enum(['active', 'completed']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    themes: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/publications',
  }),

  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),

    type: z.enum([
      'conference',
      'journal',
      'workshop',
      'book-chapter',
      'preprint',
    ]),

    featured: z.boolean().default(false),
    order: z.number().default(99),
    themes: z.array(z.string()).default([]),

    pdf: z.string().optional(),
    doi: z.string().url().optional(),
    code: z.string().url().optional(),
    project: z.string().optional(),
  }),
});

const people = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/people',
  }),

  schema: z.object({
    name: z.string(),
    role: z.string(),

    category: z.enum([
      'pi',
      'phd',
      'student',
      'alumni',
    ]),

    affiliation: z.string(),
    joined: z.string().optional(),
    interests: z.array(z.string()).default([]),

    featured: z.boolean().default(false),
    order: z.number().default(99),

    photo: z.string().optional(),
    website: z.string().url().optional(),
    scholar: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
});

const news = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/news',
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),

    category: z.enum([
      'publication',
      'award',
      'grant',
      'lab',
      'student',
      'event',
    ]),

    summary: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    externalUrl: z.string().url().optional(),
  }),
});

const research = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/research',
  }),

  schema: z.object({
    title: z.string(),
    number: z.string(),
    tagline: z.string(),
    summary: z.string(),
    question: z.string(),

    themes: z.array(z.string()).default([]),

    featured: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

export const collections = {
  projects,
  publications,
  people,
  news,
  research,
};
