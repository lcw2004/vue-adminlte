<template>
<div class="row">
  <div class="col-md-12">
    <Step>
      <StepItem index="1" name="Account setup" :is-active="stepId == 1" />
      <StepItem index="2" name="Profile setup" :is-active="stepId == 2" />
      <StepItem index="3" name="Billing setup" :is-active="stepId == 3" />
      <StepItem index="4" name="fffff setup" :is-active="stepId == 4" />
    </Step>
  </div>
</div>
</template>

<script>
import Step from './Step'
import StepItem from './StepItem'

export default {
  components: {
    Step,
    StepItem
  },
  data: function () {
    return {
      stepId: 1
    }
  },
  methods: {}
}
</script>
