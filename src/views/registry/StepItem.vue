<template>
<li :class="{current : isActive}">
  <a>
    <span class="number">{{ index }} </span>
    <span class="desc">
      {{ name }}
    </span>
  </a>
</li>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    index: {},
    name: {}
  }
}
</script>
