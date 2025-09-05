// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  routeRules: {
    "/about": { prerender: true },
  },
  robots: {
    disallow: [
      "/auth/login",
      "/auth/registration",
      "/auth/restore",
      "/profile/index",
      "/cart",
      "/favorites",
    ],
  },
  sitemap: {
    sources: ["/api/sitemap/urls"],
  },
  app: {
    head: {
      title: "Магазинчик Бо",
      titleTemplate: "%s ∰ Магазинчик Бо",
      htmlAttrs: {
        lang: "ru",
      },
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons",
      },
    ],
  },
  runtimeConfig: {
    public: {
      apiBase: "",
      imgBase: "",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
});
