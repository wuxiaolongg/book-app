import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/page/content.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Content',
    component: Content

  }
]

const router = new VueRouter({
  routes
})

export default router
