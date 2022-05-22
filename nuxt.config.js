export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Learning',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        ref: 'stylesheet',
        href:
        '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap">'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/rhpteam.min.css',
    '~/assets/css/external.css'

  ],
  // loading: {
  //   color: '#fff', height: '5px'
  // },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/core-component',
    '@/plugins/element-ui',
    '@/plugins/modals/v-modal.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:
    process.env.BASE_API_URL || 'https://nuxt-learning-english-9f050-default-rtdb.firebaseio.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  // THAY VÌ GHI CẢ LINK API HTTP.. RA THÌ CHỈ CẦN GHI process.env.BASE_API_URl
  env: {
    baseURL: process.env.BASE_URL || 'https://localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'https://nuxt-learning-english-9f050-default-rtdb.firebaseio.com'
  }
}
