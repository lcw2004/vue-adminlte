import * as types from './mutation-types'

export default {
  [types.INIT_MENU] (state, menu) {
    console.log('initMenu')
    console.log(menu)
    state.topMenu = menu
  },
  [types.ACTIVE_MENU] (state, menu) {
    console.log('activeMenu')
    console.log(menu)
    state.activedMenu = menu
  }
}
