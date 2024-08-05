import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

interface BlogPost {
  slug: string;
  data: {
    title: string;
    date: string;
    description: string;
    customData?: string;
  };
}

export async function GET(context: { site: string }) {
  const blog: BlogPost[] = await getCollection('blog');
  return rss({
    title: "Lemonade",
    description: "Aathreya's Digital Room",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      date: new Date(post.data.date),
      description: post.data.description,
      customData: post.data.customData,
      link: `/blog/${post.slug}/`,
    })),
  });
}
