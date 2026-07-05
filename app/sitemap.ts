import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blogPosts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "about", "services", "blog", "contact"].map(
    (path) => ({
      url: `${siteConfig.url}/${path}`,
      lastModified: new Date(),
    })
  );

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
