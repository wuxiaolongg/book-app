import Vue from 'vue'
import Vuex from 'vuex'
import scrollBar from "./modules/header/head"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    scrollBar
  }
})
