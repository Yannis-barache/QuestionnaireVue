import { createMemoryHistory, createRouter } from 'vue-router'

import Index from './Index.vue'
import Questionnaire from './Questionnaire.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/questionnaire/:id', component: Questionnaire } // Fixed the unterminated string literal problem by adding a closing quotation mark after :id
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router