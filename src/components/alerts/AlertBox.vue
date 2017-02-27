<template>
  <div>
    <Alert :message="message" v-for="(message, index) of messages" :top="top + index * space" :duration="duration" :index="index" :on-close="handlerClose"></Alert>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'AlertBox',
  components: {
    Alert
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      // 第一个消息距离顶部的距离
      top: 60,
      // 每一个消息的间隔距离
      space: 65,
      // 每一个消息的存活时间
      duration: 3000
    }
  },
  methods: {
    /**
    * 初始化NotifyBox组件
    */
    init () {
      let parent = document.querySelector(`#notifyBox`)
      if (!parent) {
        parent = document.createElement('div')
        parent.classList.add('#notifyBox')
        document.body.appendChild(parent)
        parent.appendChild(this.$el)
      }
    },
    handlerClose: function (index) {
      console.log(index)
      this.messages.splice(index, 1)
    }
  },
  beforeMount () {
    this.init()
  }
}
</script>
