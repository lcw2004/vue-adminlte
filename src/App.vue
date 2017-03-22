<template>
  <Home></Home>
</template>

<script>
import Home from './views/layout/Home'

export default {
  components: {
    Home
  },
  mounted () {
    this.$http.get('/one/a/rest/sys/menu/user').then(function (response) {
      this.$store.dispatch('initMenu', response.body)
    })
  }
}
</script>
