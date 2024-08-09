import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Lemonade",
    description: "Aathreya's Virtual Room",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // customData: post.data.customData,
      link: `/blog/${post.slug}/`,
    })),
  });
}