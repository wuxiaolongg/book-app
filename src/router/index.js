import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/page/content.vue'
import Jing from '../views/page/jingxuan'
import Book from '../views/page/shuku'
import My from '../views/page/mine'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Content',
    component: Content

  },
  {
    path: '/handpick',
    name: 'handpick',
    component: Jing

  },
  {
    path: '/classify',
    name: 'classify',
    component: Book

  },
  {
    path: '/home',
    name: 'home',
    component: My

  }
]

const router = new VueRouter({
  routes
})

export default router
