<template>
<img :src="imageUrl" @click="refresh">
</template>

<script>
export default {
  name: 'VerifyCodeImg',
  props: {
    timestamp: {}
  },
  data: function () {
    return {
      t: ''
    }
  },
  methods: {
    refresh () {
      this.t = Math.random() + ''
    }
  },
  computed: {
    t: function () {
      return this.timestamp
    },
    imageUrl: function () {
      return '/one/a/rest/verifyCode' + '?t=' + this.t
    }
  }
}
</script>
