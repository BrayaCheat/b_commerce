// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'nuxt-icon', '@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt'],
  googleFonts: {
    families: {
      Poppins: true
    }
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})