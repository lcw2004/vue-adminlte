<template>
  <div class="row">
    <div class="col-md-8">
      <BiddingOpen></BiddingOpen>
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col-md-12">
          <ProjectInfo></ProjectInfo>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <Chat></Chat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from './chat/Chat'
import ProjectInfo from './ProjectInfo'
import BiddingOpen from './BiddingOpen'

export default {
  components: {
    Chat,
    ProjectInfo,
    BiddingOpen
  },
  data: function () {
    return {
    }
  }
}
</script>
