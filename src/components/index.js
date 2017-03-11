import Vue from 'vue'

// base
import BSwitch from './base/BSwitch'
import Editor from './base/Editor'
import InlineEditor from './base/InlineEditor'
import TimePicker from './base/TimePicker'
import TimeRangePicker from './base/TimeRangePicker'
import FullScreenBtn from './base/FullScreenBtn'
import RightPanel from './base/RightPanel'

// tree
import Tree from './tree/Tree'
import TreeTableColPrefix from './tree/TreeTableColPrefix'

// button
import FullButton from './button/FullButton'

import notify from './notify'
import confirm from './confirm'
import progress from './progress'

function initGlobalComponents () {
  // base
  Vue.component(BSwitch.name, BSwitch)
  Vue.component(Editor.name, Editor)
  Vue.component(InlineEditor.name, InlineEditor)
  Vue.component(TimePicker.name, TimePicker)
  Vue.component(TimeRangePicker.name, TimeRangePicker)
  Vue.component(FullScreenBtn.name, FullScreenBtn)
  Vue.component(RightPanel.name, RightPanel)

  // tree
  Vue.component(Tree.name, Tree)
  Vue.component(TreeTableColPrefix.name, TreeTableColPrefix)

  // button
  Vue.component(FullButton.name, FullButton)

  // message
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.prototype.$progress = progress
}

export default initGlobalComponents
