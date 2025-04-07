import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig, customPathWork, customPathBlog } from "@/app/resources";

export const dynamic = "force-static";
export const revalidate = 60;
export default async function sitemap() {
	const blogs = getPosts(customPathBlog).map((post) => ({
		url: `https://${baseURL}/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}));

	const works = getPosts(customPathWork).map((post) => ({
		url: `https://${baseURL}/work/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}));

	const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

	const routes = activeRoutes.map((route) => ({
		url: `https://${baseURL}${route !== "/" ? route : ""}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs, ...works];
}
