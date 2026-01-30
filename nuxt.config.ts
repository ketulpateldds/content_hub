// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // devServer: {
  //   host: "0.0.0.0",
  //   port: 3000,
  // },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Instrument+Sans": [400, 500, 600, 700],
      Geist: [400, 500, 600, 700],
    },
  },
});
