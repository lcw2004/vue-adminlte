<template>
  <section class="content" id="scence">
    <div class="row" >
      <div class="col-md-8">
        <button type="button" class="btn btn-info btn-sm pull-right" @click="toggoleFullScreen">
          <i class="fa fa-plus"></i> 全屏显示
        </button>
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
import toggoleFullScreen from '../../utils/fullscreen'

export default {
  name: 'BiddingScene',
  components: {
    Chat,
    ProjectInfo
  },
  data () {
    return {}
  },
  methods: {
    toggoleFullScreen: function () {
      toggoleFullScreen(document.getElementById('scence'))
    }
  }
}
</script>
