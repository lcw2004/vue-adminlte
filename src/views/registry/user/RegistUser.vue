<template>
<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-8">
    <div class="box box-solid">
      <div class="box-header">
        <div class="text-center registry-title">
          <h3 class="box-title">供应商注册</h3>
        </div>
      </div>

      <div class="box-body">
        <div class="row row-margin-bottom">
          <div class="col-md-12">
            <Step>
              <StepItem index="1" name="注册账户" width="49" :is-active="stepId == 1" />
              <StepItem index="2" name="完善机构信息" width="49" :is-active="stepId == 2" />
            </Step>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <UserInfo v-if="stepId == 1" @next="nextStep(arguments[0])"/>
            <OrgInfo v-if="stepId == 2" :user-id="userId"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Step from '../step/Step'
import StepItem from '../step/StepItem'
import UserInfo from './UserInfo'
import OrgInfo from './OrgInfo'

export default {
  components: {
    Step,
    StepItem,
    UserInfo,
    OrgInfo
  },
  data: function () {
    return {
      stepId: 1,
      maxStep: 2,
      userId: ''
    }
  },
  methods: {
    next (userId) {
      this.userId = userId
      this.nextStep()
    },
    lastStep () {
      if (this.stepId > 1) {
        this.stepId = this.stepId - 1
      }
    },
    nextStep () {
      if (this.stepId < this.maxStep) {
        this.stepId = this.stepId + 1
      }
    },
    argee () {
    },
    submit () {
      this.$notify.info('提交成功，请等待工作人员审核')
    }
  }
}
</script>
