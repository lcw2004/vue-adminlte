<template>
<section class="content">
  <div class="row">
    <div class="col-md-6">
      <TimeLine></TimeLine>

      <TimeLine1></TimeLine1>
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
import TimeLine1 from './TimeLine1'

export default {
  components: {
    ProjectInfo,
    TimeLine,
    TimeLine1
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
