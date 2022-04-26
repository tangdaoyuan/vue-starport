import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import StarportPlugin from 'vue-starport'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import './index.css'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.use(StarportPlugin({ keepAlive: true }))
    // install all modules under `modules/`
    // Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
