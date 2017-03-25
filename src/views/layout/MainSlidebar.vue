<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <UserPanel/>
      <SearchForm/>
      <LeftMenu v-if="activedMenu.id != null"/>
      <LeftMenuStatic v-if="activedMenu.id == null"/>
    </section>
  </aside>
</template>

<script>
  import UserPanel from './slidebar/UserPanel'
  import SearchForm from './slidebar/SearchForm'
  import LeftMenu from './slidebar/LeftMenu'
  import LeftMenuStatic from './slidebar/LeftMenuStatic'

  export default {
    components: {
      UserPanel,
      SearchForm,
      LeftMenu,
      LeftMenuStatic
    },
    computed: {
      activedMenu: function () {
        return this.$store.state.system.activedMenu
      }
    }
  }
</script>
