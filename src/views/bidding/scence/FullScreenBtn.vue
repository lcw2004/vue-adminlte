<template>
  <span>
    <i class="fa pull-right" :class="faClass" @click="toggoleFullScreen()"></i>
  </span>
</template>

<script>
import toggoleFullScreen from '../../../utils/fullscreen'

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
      isFullScreen: false
    }
  },
  methods: {
    toggoleFullScreen: function () {
      this.isFullScreen = toggoleFullScreen(document.getElementById(this.id))
    }
  },
  computed: {
    faClass: function () {
      return this.isFullScreen ? 'fa-compress' : 'fa-arrows-alt'
    }
  }
}
</script>
