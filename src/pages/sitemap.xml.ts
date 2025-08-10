export const sitemap = `import { getCollection } from 'astro:content';

export async function GET() {
  const base = 'https://blog.won96.com';
  const posts = await getCollection('posts');
  const staticUrls = ['/', '/about', '/contact', '/login', '/register', '/app', '/agent', '/customer-service', '/rss.xml'];
  const urls = [
    ...staticUrls.map((u) => `${base}${u}`),
    ...posts.map((p) => `${base}/posts/${p.slug}`)
  ];
  return new Response(
    ` + "`" + `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map((u)=>`<url><loc>${u}</loc></url>`).join('')}
    </urlset>` + "`" + `,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}`;
