<template>
  <!-- Message. Default to the left -->
  <div class="direct-chat-msg">
    <div class="direct-chat-info clearfix">
      <span class="direct-chat-name pull-left">Alexander Pierce</span>
      <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
    </div>
    <!-- /.direct-chat-info -->
    <img class="direct-chat-img" src="static/adminlte/img/user1-128x128.jpg" alt="message user image">
    <!-- /.direct-chat-img -->
    <div class="direct-chat-text">
      Is this template really for free? That's unbelievable!
    </div>
    <!-- /.direct-chat-text -->
  </div>
  <!-- /.direct-chat-msg -->
</template>

<script>
export default {
  name: 'ChatMessage',
  data: function () {
    return {}
  }
}
</script>
