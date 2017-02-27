import Vue from 'vue'
import AlertBox from './AlertBox'

// NotifyBox单例组件
let notifyBox

// NotifyBox的消息列表
let propsData = {
  messages: []
}

// 创建NotifyBox单例
let installNotifyBox = function () {
  if (!notifyBox) {
    let AlertComponent = Vue.extend(AlertBox)
    notifyBox = new AlertComponent({
      el: document.createElement('div'),
      propsData
    })
  }
}

let alert = function (message) {
  propsData.messages.push(message)
  installNotifyBox()
  return notifyBox
}

export default alert
