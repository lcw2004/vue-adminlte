import Vue from 'vue'
import ProgressBar from './ProgressBar'

let progressBar = null
let start = function () {
  let propsData = {
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
