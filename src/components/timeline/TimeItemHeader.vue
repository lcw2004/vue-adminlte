<template>
  <h3 class="timeline-header">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'TimeItemHeader'
}
</script>

<style>
.timeline-header > a {
  font-size: 15px;
  font-weight: normal;
}
</style>
