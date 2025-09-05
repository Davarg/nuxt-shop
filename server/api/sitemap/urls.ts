import type { SitemapUrlInput } from "@nuxtjs/sitemap";
import type { Item } from "~/models/Item";

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig();

  const products = await $fetch<{
    products: Item[];
  }>(config.public.apiBase + "/products");

  const pages = products.products.map((item) => ({
    loc: `/catalog/${item.id}`,
    changefreq: "daily",
    priority: 0.7,
  })) satisfies SitemapUrlInput[];

  return pages;
});
