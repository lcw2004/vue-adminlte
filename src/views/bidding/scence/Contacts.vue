<template>
  <!-- Contacts are loaded here -->
  <div class="direct-chat-contacts">
    <ul class="contacts-list">
      <li>
        <a href="#">
          <img class="contacts-list-img" src="static/adminlte/img/user1-128x128.jpg" alt="Contact Avatar">
          <div class="contacts-list-info">
            <span class="contacts-list-name">
              Count Dracula
              <small class="contacts-list-date pull-right">2/28/2015</small>
            </span>
            <span class="contacts-list-msg">How have you been? I was...</span>
          </div>
          <!-- /.contacts-list-info -->
        </a>
      </li>
      <!-- End Contact Item -->
    </ul>
    <!-- /.contatcts-list -->
  </div>
  <!-- /.direct-chat-pane -->
</template>

<script>
export default {
  name: 'Contacts',
  data: function () {
    return {}
  }
}
</script>
