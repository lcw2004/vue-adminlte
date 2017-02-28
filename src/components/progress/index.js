import Vue from 'vue'
import ProgressBar from './ProgressBar'

let progressBar = null
let start = function () {
  // 具体的样式可以参考adminlte的进度条示例
  let propsData = {
    size: ['progress-xxs', 'active'],
    class: ['progress-bar-red', 'progress-bar-striped']
  }
  let ProgressBarComponent = Vue.extend(ProgressBar)
  progressBar = new ProgressBarComponent({
    el: document.createElement('div'),
    propsData
  })
  return progressBar
}

let done = function () {
  progressBar.done()
}

export default {start, done}
