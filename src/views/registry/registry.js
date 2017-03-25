import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

import Registry from './Registry.vue'

/* eslint-disable no-new */
new Vue({
  el: '#registry',
  template: '<Registry></Registry>',
  components: {
    Registry
  }
})
