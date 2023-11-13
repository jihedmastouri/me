# 👋 Me (Work in Progress)

A personal website that will contain an online Resume and a blog. It's statically generated and built from scratch using:

- Astro
- Taiwlind
- Typescript
- View-Transition API

## 👨‍🔧 Getting started:

1. Install dependecies: `pnpm i`.
2. Write your blog posts as `*.md` or `*.mdx` to `src/content/blog/`.
3. Hero images used in the blog posts should be place under `src/assets/**`
4. Photos featured in the photography showcase must be place under `src/assets/photography/`.
5. Run the project using `pnpm run dev`

Blog Posts require this metadata block:

```
---
title:
description:
tags:
category:
pubDate:
updatedDate:
heroImage:
heroTitle:
---
```

Checkout `src/content/config.ts` for the `zod` schema.

## 🚀 Getting started with astro:

Create a new astro project with a minimal template:

```
npm create astro@latest -- --template blog
```

Check out [Astro's documentation](https://docs.astro.build) and [Discord server](https://astro.build/chat).

## 🏁 Roadmap

This is still a work in progress with many things planned:

- [ ] Polish the design:
  - [ ] fix styling mistakes.
  - [ ] Dark Theme not consistent.
  - [ ] Some pages need polish.
  - [ ] Better table of contents.
- [ ] Configure transitions correctly:
  - [ ] Direction, elements, duration....
  - [ ] Handle browsers that doesn't support transitions.
- [ ] Complete the `/about` page.
