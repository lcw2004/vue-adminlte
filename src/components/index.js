import Vue from 'vue'

// base
import BSwitch from './base/BSwitch'
import Editor from './base/Editor'
import InlineEditor from './base/InlineEditor'
import TimePicker from './base/TimePicker'
import TimeRangePicker from './base/TimeRangePicker'

// tree
import Tree from './tree/Tree'
import TreeTableColPrefix from './tree/TreeTableColPrefix'

function initGlobalComponents () {
  // base
  Vue.component(BSwitch.name, BSwitch)
  Vue.component(Editor.name, Editor)
  Vue.component(InlineEditor.name, InlineEditor)
  Vue.component(TimePicker.name, TimePicker)
  Vue.component(TimeRangePicker.name, TimeRangePicker)

  // tree
  Vue.component(Tree.name, Tree)
  Vue.component(TreeTableColPrefix.name, TreeTableColPrefix)

  // message

  // Vue.prototype
  Vue.prototype.$alert = function (msg) {
    console.log(msg)
  }
}

export default initGlobalComponents
