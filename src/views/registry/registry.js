import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

import AgreementInfo from './agreement/AgreementInfo'
import RegistUser from './user/RegistUser'
let router = {
  routes: [
    { path: '/', component: AgreementInfo },
    { path: '/r', component: RegistUser }
  ]
}
let vueRouter = new VueRouter(router)

import 'admin-lte/bootstrap/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.css'

import Registry from './Registry.vue'

/* eslint-disable no-new */
new Vue({
  el: '#registry',
  template: '<Registry></Registry>',
  components: {
    Registry
  },
  router: vueRouter
})
