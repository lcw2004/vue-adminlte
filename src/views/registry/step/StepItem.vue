<template>
<li :class="{active : isActive}">
  <a>
    <span class="number">{{ index }}</span>
    <span class="desc">
      <label>{{ name }}</label>
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
