<template>
  <div>
    <Alert :config="alert" v-for="(alert, index) of alerts" :top="(index + 1) * 65"></Alert>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'AlertBox',
  components: {
    Alert
  },
  data: function () {
    return {
      alerts: [
        {
          show: true,
          msg: '驳回原因1'
        },
        {
          show: true,
          msg: '驳回原因2'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
