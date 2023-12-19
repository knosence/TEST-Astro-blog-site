import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import { getCollection } from "astro:content";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
	const blog = await getCollection("blog");
	return rss({
		title: "NaDario Seays' Blog",
		description: "I write about programmer foundations!",
		site: context.site?.toString() || "https://replaceme.com",
		items: blog.map((post) => {
			return {
				title: post.data.title,
				pubDate: post.data.date,
				link: `/blog/${post.slug}`,
				content: sanitizeHtml(parser.render(post.body)),
			};
		}),
	});
}
