<template>
  <textarea>
    {{ value }}
  </textarea>
</template>

<script>
export default {
  name: 'Editor'
  props: ['value']
  data: function() {
    return {

    }
  }
}
</script>
