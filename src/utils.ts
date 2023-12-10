import { getCollection } from 'astro:content';

const posts = await getCollection('blog');

export const tags = [
  ...posts.reduce((acc, post) => {
    post.data.tags?.forEach((tag) => acc.add(tag));
    return acc;
  }, new Set<string>()),
];

export const timeToRead = (content: string) => {
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '');
  const noOfWords = clean.split(/\s/g).length;

  const WPM = 200;
  const minutes = noOfWords / WPM;

  const readTime = Math.ceil(minutes);
  return readTime;
};
