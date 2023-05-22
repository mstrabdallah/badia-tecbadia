export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  generate: { fallback: true },
  loading: false,
  // target: "static", // default is 'server'
  head: {
    title: "TecBadia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "We are TecBadia Software Company that provides all technological solutions for all kinds of business.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: '...',
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/main.scss",
    "~/assets/styles/_var.scss",
    "hooper/dist/hooper.css",
  ],
  script: [{}],



  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios.js",
    { src: "~/plugins/vuetify.js", mode: "server" },
    "~/plugins/validation-rules.js",
    "~/plugins/CxltToastr.js",
    { src: "plugins/VueNumber.js", ssr: false },
  ],


  router: {
    middleware: ["auth"],
  },



  // serverMiddleware: ["~/middleware/auth"], // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // With options
    "@nuxt/image",
    "@nuxtjs/google-analytics",
    [
      "@nuxtjs/vuetify",

      {
        treeShake: true,
        defaultAssets: false,
        theme: {
          light: true,
          themes: {
            light: {
              primary: "#0D8C60",
              secondary: "#2b4749",
              accent: "#2b4749",
            },
          },

        },
      },
    ],
  ],

  googleAnalytics: {
    id: "UA-231767462-1",
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: "UA-231767462-1",
    },
  },
  gtm: {
    id: 'GTM-KN8ZJ8X'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/style-resources",
    "vue-scrollto/nuxt",
    "@nuxt/image",
    '@nuxtjs/gtm',
  ],
  image: {
    domains: ["https://api.tecbadia.com/"],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  i18n: {
    defaultLocale: "en",
    seo: true,
    locales: [
      {
        code: "en",
        name: "الانجليزية",
        iso: "en",
        file: "en.json",
        dir: "ltr",
      },
      { code: "ar", name: "Arabic", iso: "ar", file: "ar.json", dir: "rtl" },
    ],
    langDir: "lang/",
    detectBrowserLanguage: false,
  },

  styleResources: {
    scss: [],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extractCSS: {
      loaders: {
        scss: {
          implementation: require("sass"),
        },
      },
      ignoreOrder: false,
    },
  },
};
