<template>
  <span @click="toggle(obj)">
    <span class="treegrid-indent" v-for="index in obj.level - 1"></span>
    <span>
      <i :class="expandStyle"></i>
    </span>
    <i v-if="obj.icon" class="treegrid-expander" :class="obj.icon"></i>

    <!-- 挂载点 -->
    <span><slot></slot></span>
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
      if (!this.hasChild) {
        return ['treegrid-expander']
      }
      let style = ['treegrid-expander', 'fa', 'fa-plus-square-o']
      if (this.obj.isExpanded) {
        style = ['treegrid-expander', 'fa', 'fa-minus-square-o']
      }
      return style
    },
    hasChild: function () {
      return this.obj.childList !== null && this.obj.childList.length > 0
    }
  }
}
</script>

<style>
.treegrid-indent {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
}
.treegrid-expander {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
</style>
