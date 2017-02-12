<template>
  <Alert :config="alertConfig">
</template>

<script>
import Alert from './Alert'

export default {
  name: 'AlertBox',
  data: function () {
    return {
      alertConfig: {
        show: false,
        title: '驳回原因111111111'
      }
    }
  },
  methods: {

  }
}
</script>
