// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/icons"
      }
    ]
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxt/scripts", "@nuxt/icon"],
});