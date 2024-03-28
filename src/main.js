import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './components/AppRouter'

createApp(App)
  .use(router)
  .mount('#app')
