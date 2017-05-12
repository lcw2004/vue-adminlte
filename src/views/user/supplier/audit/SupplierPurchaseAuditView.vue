<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="nav-tabs-custom">
        <ul class="nav nav-tabs">
          <li :class="{active : step == 1}" @click="step = 1"><a>基础信息</a></li>
          <li :class="{active : step == 2}" @click="step = 2"><a>资质文件</a></li>
          <li :class="{active : step == 3}" @click="step = 3"><a>审核记录</a></li>
          <li :class="{active : step == 4}" @click="step = 4"><a>项目记录</a></li>
          <li :class="{active : step == 5}" @click="step = 5"><a>调查记录</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active">
            <BaseInfoWithAudit v-if="step == 1" :obj="obj" />
            <Qualifications v-if="step == 2" :obj="obj" />
            <AuditLog v-if="step == 3" :obj="obj" />
            <Biddings v-if="step == 4" :obj="obj" />
            <QuestionnaireInfo v-if="step == 5" :obj="obj" />
          </div>
        </div>
        <div class="box-footer">
          <div class="col-md-2 col-sm-0"></div>
          <div class="col-md-2 col-sm-2"><button class="btn btn-block btn-default" @click="$router.go(-1)">返回</button></div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import FormMixin from '../../../../mixins/FormMixin.js'
import BaseInfoWithAudit from '../info/BaseInfoWithAudit'
import Contracts from '../info/Contracts'
import AuditLog from '../info/AuditLog'
import Biddings from '../info/Biddings'
import Qualifications from '../info/Qualifications'
import QuestionnaireInfo from '../info/QuestionnaireInfo'

export default {
  mixins: [FormMixin],
  components: {
    BaseInfoWithAudit,
    Contracts,
    AuditLog,
    Biddings,
    Qualifications,
    QuestionnaireInfo
  },
  data: function () {
    return {
      actions: {
        get: { method: 'get', url: '/one/a/rest/user/supplier/audit{/id}' }
      },

      obj: {},

      step: 1
    }
  }
}
</script>
