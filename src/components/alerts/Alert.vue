<template>
  <div class="alert alert-success alert-dismissible" v-show="isShow" style="position: fixed; right: 10px; z-index: 1000; width:300px" :style="style">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="close">×</button>
    <i class="icon fa fa-check"></i>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    // 模态窗属性配置
    message: {
      type: String,
      required: true
    },
    top: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: false
    },
    index: {
      type: Number,
      required: false
    },
    onClose: {
      type: Function,
      required: false
    }
  },
  data: function () {
    return {
      isShow: true
    }
  },
  mounted: function () {
    this.timer = setTimeout(() => this.close(), this.duration)
  },
  methods: {
    close: function () {
      this.isShow = false
      // this.$destroy()
      // this.$el.remove()
      clearTimeout(this.timer)
      this.onClose(this.index)
    }
  },
  computed: {
    style: function () {
      return {
        'top': this.top + 'px'
      }
    }
  }
}
</script>
