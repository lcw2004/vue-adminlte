import Vue from 'vue'
import validReder from './valid-render'
import focus from './focus'

function initDirectives () {
  Vue.directive('render', validReder)
  Vue.directive('focus', focus)
}

export default initDirectives
