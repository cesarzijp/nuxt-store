// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //  modules: ["@nuxtjs/supabase"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
