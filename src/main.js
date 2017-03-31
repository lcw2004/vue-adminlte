// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'zh_CN',
  dictionary: null,
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
}
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, config)

// 引入资源css资源文件
import 'admin-lte/bootstrap/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.css'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css'

// 注册公共组件
import initGlobalComponents from './components'
import initViewComponents from './views'
initGlobalComponents()
initViewComponents()
// 注册自定义指令
import initDirectives from './directives'
initDirectives()

// 引入根组件、路由、状态
import App from './App'
import store from './vuex'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  store,
  components: { App }
})

// 启用进度条
Vue.http.interceptors.push(function (request, next) {
  this.$progress.start()
  next(function (response) {
    this.$progress.done()
    return response
  })
})
