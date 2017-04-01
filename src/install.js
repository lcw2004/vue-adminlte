import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate, { Validator } from 'vee-validate'
import cn from 'vee-validate/dist/locale/zh_CN'

// 引入资源css资源文件
import 'admin-lte/bootstrap/css/bootstrap.css'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.css'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css'

// 引入自定义组件
import initGlobalComponents from './components'
import initViewComponents from './views'
import initDirectives from './directives'

function initVeeValidate () {
  Validator.addLocale(cn)
  const config = {
    locale: 'zh_CN'
  }
  Vue.use(VeeValidate, config)
}

function initProgressBar () {
  Vue.http.interceptors.push(function (request, next) {
    this.$progress.start()
    next(function (response) {
      this.$progress.done()
      return response
    })
  })
}

function install () {
  Vue.use(Vuex)
  Vue.use(VueRouter)
  Vue.use(VueResource)

  // VeeValidate locale
  initVeeValidate()

  // 注册自定义组件
  initGlobalComponents()
  initViewComponents()
  initDirectives()

  // 启用进度条
  initProgressBar()
}

export default install
