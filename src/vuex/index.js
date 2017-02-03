import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'

const state = {
  config: {
    version: '1.0',
    productName: 'AdminLTE',
    productShortName: 'ALT'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
