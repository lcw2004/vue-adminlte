import Vue from 'vue'

// base
import FullScreenBtn from './base/FullScreenBtn'
import RightPanel from './base/RightPanel'
import DictSelect from './base/DictSelect'
import FixedContainer from './container/FixedContainer'

// 分页
import Pagination from './pagination/Pagination'

// button
import FullButton from './button/FullButton'

// Calendar
import Calendar from './calendar/Calendar'

// switch
import BootstrapSwitch from './switch/BootstrapSwitch'

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
import TimeItemBody from './timeline/TimeItemBody'
import TimeItemFooter from './timeline/TimeItemFooter'

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
  Vue.component(DictSelect.name, DictSelect)
  Vue.component(FixedContainer.name, FixedContainer)

  // pagination
  // Vue.component(Pagination.name, Pagination)
  Vue.component(Pagination.name, Pagination)

  // button
  Vue.component(FullButton.name, FullButton)

  // Calendar
  Vue.component(Calendar.name, Calendar)

  // switch
  Vue.component(BootstrapSwitch.name, BootstrapSwitch)

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
  Vue.component(TimeItemBody.name, TimeItemBody)
  Vue.component(TimeItemFooter.name, TimeItemFooter)

  // tree
  Vue.component(Tree.name, Tree)
  Vue.component(TreeTableColPrefix.name, TreeTableColPrefix)

  // message
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.prototype.$progress = progress
}

export default initGlobalComponents
