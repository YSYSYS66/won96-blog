export const rss = `import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'WON96 Blog',
    description: 'WON96 官方博客',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.publishDate,
      link: '/posts/' + p.slug
    }))
  });
}`;
