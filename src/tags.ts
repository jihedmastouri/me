import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

export const tags = [
  ...posts.reduce((acc, post) => {
    post.data.tags?.forEach((tag) => acc.add(tag));
    return acc;
  }, new Set<string>()),
];
