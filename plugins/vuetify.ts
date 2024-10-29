import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'


export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    theme:{
      defaultTheme:'dark',
      themes:{
        dark:{
          colors:{
            primary:'#1867C0',
            secondary:'#5CBBF6',
            background:"gray"
          },
        },
      },
    }
  })

  nuxt.vueApp.use(vuetify)
})

