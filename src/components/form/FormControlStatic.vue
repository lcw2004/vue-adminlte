<template>
  <p class="form-control-static"><slot></slot></p>
</template>

<script>
export default {
  name: 'FormControlStatic',
  props: {
    value: {
      type: String
    }
  }
}
</script>
