<template>
<div class="direct-chat-contacts">
  <ul class="contacts-list">
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
    <Contact></Contact>
  </ul>
</div>
</template>

<script>
import Contact from './Contact'

export default {
  name: 'Contacts',
  components: {
    Contact
  },
  data: function () {
    return {}
  }
}
</script>
