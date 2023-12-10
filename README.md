# 👋 Me (Work in Progress)

A personal website, an online resume and a blog:

- Statically generated.
- Blog posts as `markdown`.
- MPA with View-Transition API.
- Photo wall.

Built from scratch using:

- Astro
- Tailwind
- Typescript

## 👨‍🔧 Getting started:

Run the project using `pnpm run dev`

### :warning: Prerequisites

1. Install dependencies using: `pnpm i`
1. Place photos (of any format) under `src/assets/photography/` to have them showcased on the photography page.
1. Add these files (containing your personal information), following the format `src/data/*.json`:

- `jobs.json`:

```json
[
  {
    "name": "Name of the company",
    "role": "Your Position",
    "loc": "Location"
  }
]
```

- `projects.json`:

```json
[
  {
    "title": "Name of the project",
    "links": {
      "github": "github link (optional)",
      "web": "web link (optional)"
    },
    "descr": "Project description",
    "techs": ["technologies used"],
    "funcs": ["Main features"]
  }
]
```

- `social.json`:

```json
[
  {
    "name": "link name",
    "url": "link",
    "image": "svg file name"
  }
]
```
> Social links are displayed as SVGs, so you need to place your SVGs under `src/assets/social`.

### :pen: Start Blogging

Write your blog posts as `*.md` or `*.mdx` to `src/content/blog/`:

Blog posts **require** this metadata block:

```md
---
title: "A clickbait"
description: "A good description of any size"
tags: ["anything"]
category: "edit the list in `src/consts.ts` first"
pubDate: "yyyy-mm-dd"
updatedDate: "yyyy-mm-dd (optional)"
heroImage: "../../assets/something/something.png"
heroTitle: "Image alt"
---
```

> Note:
> - Hero images used in the blog posts **must** be place under `src/assets/**`
> - Categories are predetermined through a list in `src/consts.ts`
> - Checkout `src/content/config.ts` for the up-to-date `zod` schema.

## 🚀 Getting started with astro:

Create a new `astro` project with a minimal template:

```
npm create astro@latest -- --template blog
```

Check out [Astro's documentation](https://docs.astro.build) and [Discord server](https://astro.build/chat).
