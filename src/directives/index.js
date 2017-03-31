import Vue from 'vue'
import validReder from './valid-render'

function initDirectives () {
  Vue.directive('render', validReder)
}

export default initDirectives
