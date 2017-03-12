<template>
<section class="content">
  <div class="row">
    <div class="col-md-6">
      <TimeLine></TimeLine>
    </div>

    <div class="col-md-6">
      <ProjectInfo></ProjectInfo>
    </div>
  </div>
</section>
</template>

<script>
import ProjectInfo from './ProjectInfo'
import TimeLine from './TimeLine'

export default {
  components: {
    ProjectInfo,
    TimeLine
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
