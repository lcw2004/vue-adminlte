<template>
<div class="box box-primary box-solid direct-chat direct-chat-primary">
  <div class="box-header">
    <h3 class="box-title">消息</h3>
    <div class="box-tools pull-right">
      <span data-toggle="tooltip" title="3 New Messages" class="badge bg-light-blue">3</span>
      <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
      <button class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle"><i class="fa fa-comments"></i></button>
      <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
    </div>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <!-- Conversations are loaded here -->
    <div class="direct-chat-messages">
      <ChatMessage></ChatMessage>

      <!-- Message to the right -->
      <div class="direct-chat-msg right">
        <div class="direct-chat-info clearfix">
          <span class="direct-chat-name pull-right">Sarah Bullock</span>
          <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
        </div>
        <!-- /.direct-chat-info -->
        <img class="direct-chat-img" src="static/adminlte/img/user3-128x128.jpg" alt="message user image">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          You better believe it!
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
    </div>
    <!--/.direct-chat-messages-->

    <Contacts></Contacts>
  </div>
  <!-- /.box-body -->
  <div class="box-footer">
    <form action="#" method="post">
      <div class="input-group">
        <input type="text" name="message" placeholder="Type Message ..." class="form-control">
        <span class="input-group-btn">
          <button type="button" class="btn btn-primary btn-flat">发送</button>
        </span>
      </div>
    </form>
  </div>
  <!-- /.box-footer-->
</div>
</template>

<script>
import ChatMessages from './ChatMessages'
import Contacts from './Contacts'

export default {
  name: 'Chat',
  components: {
    ChatMessages,
    Contacts
  },
  data: function () {
    return {}
  }
}
</script>
