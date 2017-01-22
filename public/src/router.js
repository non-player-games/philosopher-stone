import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Index from './pages/Index'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index }
]
const router = new VueRouter({routes})

export default router
