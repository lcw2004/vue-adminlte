<template>
<div class="row">
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-12">
        <Step>
          <StepItem index="1" name="注册条款" :is-active="stepId == 1" />
          <StepItem index="2" name="账户注册" :is-active="stepId == 2" />
          <StepItem index="3" name="机构信息" :is-active="stepId == 3" />
        </Step>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills nav-justified">
          <li role="presentation" class="active"><a href="#">注册条款</a></li>
          <li role="presentation"><a href="#">账户注册</a></li>
          <li role="presentation"><a href="#">机构信息</a></li>
        </ul>
      </div>
    </div>
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
      stepId: 2
    }
  },
  methods: {}
}
</script>
