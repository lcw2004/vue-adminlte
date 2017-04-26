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
    this.loadMenu()
    this.loadDict()
    this.loadUserInfo()
  },
  methods: {
    loadMenu () {
      this.$http.get('/one/a/rest/userMenu').then(function (response) {
        let result = response.body
        if (result.ok) {
          let topMenu = result.data
          this.$store.dispatch('initMenu', topMenu)
          if (topMenu && topMenu.childList.length > 0) {
            this.$store.dispatch('activeMenu', topMenu.childList[0])
          }
        }
      })
    },
    loadDict () {
      this.$http.get('/one/a/rest/sys/dict/group').then(function (response) {
        let result = response.body
        if (result.ok) {
          this.$store.dispatch('initDict', result.data)
        }
      })
    },
    loadUserInfo () {
      this.$http.get('/one/a/rest/userInfo').then(function (response) {
        let result = response.body
        if (result.ok) {
          this.$store.dispatch('initUserInfo', result.data)
        }
      })
    }
  }
}
</script>
