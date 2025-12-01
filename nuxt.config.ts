// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },



/**-------  link global css file start here ------- */
css:[
  'bootstrap/dist/css/bootstrap.min.css'
],


/**------ link global js file from plugins folder -------- */
plugins:[
  '~/plugins/plugin.client.ts'  
]


})
