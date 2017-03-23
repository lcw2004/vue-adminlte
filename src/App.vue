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
  },
  methods: {
    loadMenu () {
      this.$http.get('/one/a/rest/sys/menu/user').then(function (response) {
        let topMenu = response.body
        this.$store.dispatch('initMenu', topMenu)
        if (topMenu && topMenu.childList.length > 0) {
          this.$store.dispatch('activeMenu', topMenu.childList[0])
        }
      })
    },
    loadDict () {
      this.$http.get('/one/a/rest/sys/dict/group', {params: {pageSize: 1000}}).then(function (response) {
        this.$store.dispatch('initDict', response.body)
      })
    }
  }
}
</script>
