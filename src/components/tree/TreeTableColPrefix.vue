<template>
  <span>
    <span :style="{paddingLeft : (obj.level -1) * 20 + 'px'}"></span>
    <a @click="toggle(obj)" v-if="obj.childList != null && obj.childList.length > 0">
      <i v-show="!obj.isExpanded" class="fa fa-caret-right"></i>
      <i v-show="obj.isExpanded" class="fa fa-caret-down"></i>
    </a>
    <span v-else style="padding-left : 10px"></span>
    <i v-if="obj.icon" :class="obj.icon" style="font-size: 16px"></i>
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
  }
}
</script>
