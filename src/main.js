import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils/base.js'
import rest from "./assets/css/rest.css"
// import "./assets/css/iconfont.css"


Vue.config.productionTip = false
Vue.prototype.utils = utils
new Vue({
  router,
  store,
  rest,
  render: h => h(App)
}).$mount('#app')
