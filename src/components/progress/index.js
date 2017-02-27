import Vue from 'vue'
import ProgressBar from './ProgressBar'

let progressBar = null
let start = function () {
  console.log('start')

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
  console.log('done')
  progressBar.close()
}

export default {start, done}
