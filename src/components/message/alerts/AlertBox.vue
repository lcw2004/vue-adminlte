<template>
  <Alert :config="alertConfig"></Alert>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'AlertBox',
  data: function () {
    return {
      alertConfig: {
        show: false,
        title: '驳回原因11111'
      }
    }
  },
  methods: {

  }
}
</script>
