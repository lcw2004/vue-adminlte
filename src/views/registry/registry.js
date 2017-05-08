import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

import initVeeValidate from '../../utils/init/initVeeValidate'
initVeeValidate()
import initDirectives from '../../directives'
initDirectives()

// init router start
import AgreementInfo from './agreement/AgreementInfo'
import UserInfo from './user/UserInfo'
import OrgInfo from './user/OrgInfo'
import ForgetAccount from './forget-account/ForgetAccount'
import ForgetPassword from './forget-password/ForgetPassword'

let router = {
  routes: [
    { path: '/', component: AgreementInfo },
    { path: '/registry', component: UserInfo },
    { path: '/step2/:id', component: OrgInfo },
    { path: '/forget-account', component: ForgetAccount },
    { path: '/forget-password', component: ForgetPassword }
  ]
}
let vueRouter = new VueRouter(router)
// init router end

// init css start
import 'admin-lte/bootstrap/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.css'
// init css end

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
