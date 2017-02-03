<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <UserPanel/>
      <SearchForm/>
      <Menu/>
    </section>
  </aside>
</template>

<script>
  import UserPanel from './slidebar/UserPanel'
  import SearchForm from './slidebar/SearchForm'
  import Menu from './slidebar/Menu'

  export default {
    name: 'MainSlidebar',
    components: {
      UserPanel,
      SearchForm,
      Menu
    }
  }
</script>
