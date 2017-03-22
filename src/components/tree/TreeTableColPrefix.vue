<template>
  <span>
    <a :style="{paddingLeft : (obj.level -1) * 20 + 'px'}"
        @click="toggle(obj)">
      <i :class="expandStyle"></i>
    </a>
    <i v-if="obj.icon" :class="obj.icon" style="font-size: 16px"></i>
    {{ (obj.level -1) * 20 + 'px' }}
  </span>
</template>

<script>
export default {
  name: 'TreeTableColPrefix',
  props: ['obj'],
  methods: {
    toggle: function () {
      console.log(1)
      this.$emit('toggle')
    }
  },
  computed: {
    expandStyle: function () {
      let style = ['fa', 'fa-caret-down']
      if (this.obj.isExpanded) {
        style = ['fa', 'fa-caret-right']
      }
      return style
    },
    hasChild: function () {
      return this.obj.childList !== null && this.obj.childList.length > 0
    }
  }
}
</script>
