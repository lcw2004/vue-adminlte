<template>
<div class="row">
  <div class="col-md-2"></div>
  <div class="col-md-8">
    <div class="box box-solid">
      <div class="box-body">
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
            <NoticeInfo v-if="stepId == 1"/>
            <UserInfo v-if="stepId == 2"/>
            <OrgInfo v-if="stepId == 3"/>
          </div>
        </div>
      </div>
      <div class="box-footer">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-4"></div>
            <div class="col-md-2" v-if="stepId == 1">
              <button type="button" class="btn btn-block btn-primary" @click="argee">
                同 意
              </button>
            </div>
            <div class="col-md-2" v-if="stepId != 1">
              <button type="button" class="btn btn-block btn-default" @click="lastStep">
                上一步
              </button>
            </div>
            <div class="col-md-2" v-if="stepId < maxStep">
              <button type="button" class="btn btn-block btn-primary"  @click="nextStep">
                下一步
              </button>
            </div>
            <div class="col-md-2" v-if="stepId == maxStep">
              <button type="button" class="btn btn-block btn-primary" @click="submit">
                提 交
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Step from './step/Step'
import StepItem from './step/StepItem'
import NoticeInfo from './NoticeInfo'
import UserInfo from './UserInfo'
import OrgInfo from './OrgInfo'

export default {
  components: {
    Step,
    StepItem,
    NoticeInfo,
    UserInfo,
    OrgInfo
  },
  data: function () {
    return {
      stepId: 2,
      maxStep: 3
    }
  },
  methods: {
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
