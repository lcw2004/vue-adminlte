<template>
  <div class="alert alert-success alert-dismissible" v-show="isShow">
    <button type="button" class="close btn-lg" data-dismiss="alert" aria-hidden="true" @click="close">×</button>
    <i class="icon fa fa-check"></i>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: false,
      default: 10000
    }
  },
  data: function () {
    return {
      isShow: true
    }
  },
  beforeMount () {
    this.init()
  },
  mounted: function () {
    this.timer = setTimeout(() => this.close(), this.duration)
  },
  methods: {
    init () {
      let parent = document.querySelector(`.notifications`)
      if (!parent) {
        parent = document.createElement('div')
        parent.classList.add('notifications')
        document.body.appendChild(parent)
      }
      parent.appendChild(this.$el)
    },
    close: function () {
      console.log('close')
      this.isShow = false
      this.$destroy()
      this.$el.remove()
      clearTimeout(this.timer)
    }
  },
  computed: {
    style: function () {
      return {
      }
    }
  }
}
</script>

<style>
.notifications{
  position: fixed;
  top: 60px;
  right: 10px;
  width: 300px;
  z-index: 1257;
  pointer-events: none;
}
</style>
