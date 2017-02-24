<template>
  <button type="button" class="btn btn-box-tool" data-widget="collapse" @click="toggoleFullScreen()">
    <i class="fa" :class="faClass"></i> {{width}}
  </button>
</template>

<script>
import $ from 'jquery'
import {isInFullScreen, toggleFullScreen} from '../../../utils/fullscreen'

export default {
  name: 'FullScreenBtn',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
  },
  data: function () {
    return {
      isFullScreen: false,
      width: 0,
      height: 0
    }
  },
  mounted: function () {
    let self = this
    let elmt = document.getElementById(self.id)
    self.width = elmt.style.width
    self.height = elmt.style.height

    // 绑定全屏切换事件，以适应esc退出全屏的情况
    $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
      self.isFullScreen = isInFullScreen()
      if (self.isFullScreen) {
        elmt.style.width = document.body.clientWidth
        elmt.style.height = document.body.clientHeight
      } else {
        elmt.style.width = self.width
        elmt.style.height = self.height
      }
    })
  },
  methods: {
    // 全屏切换
    toggoleFullScreen: function () {
      toggleFullScreen(document.getElementById(this.id))
    }
  },
  computed: {
    // 根据不同状态显示不同的按钮
    faClass: function () {
      return this.isFullScreen ? 'fa-compress' : 'fa-arrows-alt'
    }
  }
}
</script>
