<template>
  <section class="content" :id="id">
    <div class="row" >
      <div class="col-md-8">

      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-12">
            <FullScreenBtn :id="id"></FullScreenBtn>
          </div>
        </div>
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
  </section>
</template>

<script>
import Chat from './scence/chat/Chat'
import ProjectInfo from './scence/ProjectInfo'
import FullScreenBtn from './scence/FullScreenBtn'

export default {
  name: 'BiddingScene',
  components: {
    Chat,
    ProjectInfo,
    FullScreenBtn
  },
  data () {
    return {
      id: Math.random() + ''
    }
  }
}
</script>
