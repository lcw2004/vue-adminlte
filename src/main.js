// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

import 'admin-lte/bootstrap/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.css'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
import 'bootstrap-daterangepicker/daterangepicker.css'

import App from './App'
import store from './vuex'
import router from './router'

Vue.prototype.$alert = function (msg) {
  console.log(msg)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: new VueRouter(router),
  store,
  components: { App }
})
