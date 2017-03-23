import * as types from './mutation-types'

export default {
  initMenu ({ commit }, menu) {
    commit(types.INIT_MENU, menu)
  },
  activeMenu ({ commit }, menu) {
    commit(types.ACTIVE_MENU, menu)
  },
  activeThirdMenu ({ commit }, menu) {
    commit(types.ACTIVE_THIRD_MENU, menu)
  },
  initDict ({ commit }, dictList) {
    commit(types.INIT_DICT, dictList)
  }
}
