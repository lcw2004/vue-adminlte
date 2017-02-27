<template>
<div class="progress" style="margin: 0px;">
  <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
    <span class="sr-only">80% Complete</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Progress',
  components: {
  },
  data: function () {
    return {
    }
  },
  beforeMount () {
    this.init()
  },
  methods: {
    init () {
      document.body.insertBefore(this.$el, document.body.firstElementChild)
    },
    close () {
      this.$destroy()
      this.$el.remove()
    }
  }
}
</script>
