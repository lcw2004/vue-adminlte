<template>
  <section class="content">
    <div class="row">
      <div class="col-md-8">

      </div>
      <div class="col-md-4">
        <div class="row">
          <ProjectInfo></ProjectInfo>
        </div>
        <div class="row">
          <Chat></Chat>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chat from './scence/chat/Chat'
import ProjectInfo from './scence/ProjectInfo'

export default {
  name: 'BiddingScene',
  components: {
    Chat,
    ProjectInfo
  },
  data () {
    return {}
  }
}
</script>
