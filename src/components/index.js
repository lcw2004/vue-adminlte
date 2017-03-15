import Vue from 'vue'

// base
import FullScreenBtn from './base/FullScreenBtn'
import RightPanel from './base/RightPanel'
import FixedContainer from './container/FixedContainer'

// button
import FullButton from './button/FullButton'

// Calendar
import Calendar from './calendar/Calendar'

// switch
import BSwitch from './switch/BSwitch'

// editor
import Editor from './editor/Editor'
import InlineEditor from './editor/InlineEditor'

// time
import TimePicker from './time/TimePicker'
import TimeRangePicker from './time/TimeRangePicker'

// Timeline
import TimeLine from './timeline/TimeLine'
import TimeLabel from './timeline/TimeLabel'
import TimeItem from './timeline/TimeItem'

// tree
import Tree from './tree/Tree'
import TreeTableColPrefix from './tree/TreeTableColPrefix'

import notify from './notify'
import confirm from './confirm'
import progress from './progress'

function initGlobalComponents () {
  // base
  Vue.component(FullScreenBtn.name, FullScreenBtn)
  Vue.component(RightPanel.name, RightPanel)
  Vue.component(FixedContainer.name, FixedContainer)

  // button
  Vue.component(FullButton.name, FullButton)

  // Calendar
  Vue.component(Calendar.name, Calendar)

  // switch
  Vue.component(BSwitch.name, BSwitch)

  // editor
  Vue.component(Editor.name, Editor)
  Vue.component(InlineEditor.name, InlineEditor)

  // time
  Vue.component(TimePicker.name, TimePicker)
  Vue.component(TimeRangePicker.name, TimeRangePicker)

  // Timeline
  Vue.component(TimeLine.name, TimeLine)
  Vue.component(TimeLabel.name, TimeLabel)
  Vue.component(TimeItem.name, TimeItem)

  // tree
  Vue.component(Tree.name, Tree)
  Vue.component(TreeTableColPrefix.name, TreeTableColPrefix)

  // message
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.prototype.$progress = progress
}

export default initGlobalComponents
