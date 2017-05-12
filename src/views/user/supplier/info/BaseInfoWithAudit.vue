<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <section>
          <h4 class="page-header">基本信息</h4>
          <form class="form-horizontal">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">单位名称</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.name }}
                      <span v-if="obj.status == -1">{{ obj.statusCn }}</span>
                      <span v-if="obj.status == 1" class="label label-primary">{{ obj.statusCn }}</span>
                      <span v-if="obj.status == 2" class="label label-success">{{ obj.statusCn }}</span>
                      <span v-if="obj.status == 3" class="label label-warning">{{ obj.statusCn }}</span>
                      <span v-if="obj.status == 4" class="label label-default">{{ obj.statusCn }}</span>
                      <span v-if="obj.status == 5">{{ obj.statusCn }}</span>
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">单位简称</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.shortName }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">曾用名称</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.usedName }}</p>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">公司法人姓名</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.legalPersonName }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">公司法人身份证</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.legalPersonNumber }}</p>
                  </div>
                </div>

                <div class="form-group">
                  <label class="col-md-3 control-label">开户银行名称</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.bankName }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">开户银行账号</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.bankAccount }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">所属地区</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.areaId }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">单位地址</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.officeAddress }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">邮编</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.zipCode }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-md-3 control-label">供货区域</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.supplyArea }}</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section>
          <h4 class="page-header">联系人</h4>
          <form class="form-horizontal">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">姓名</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.principalUser.name }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">登录账号</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.principalUser.account }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">手机号码</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.principalUser.userContactInfo.mobile }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">座机号码</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.principalUser.userContactInfo.phone }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">电子邮箱</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.principalUser.userContactInfo.email }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-3 control-label">用户地址</label>
                  <div class="col-md-9">
                    <p class="form-control-static">{{ obj.principalUser.userContactInfo.address }}</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section>
          <h4 class="page-header">可参与投标类别</h4>
          <form class="form-horizontal">
            <div class="row">
              <div class="col-md-12">
                <table class="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>投标类别</th>
                      <th>审核人</th>
                      <th>审核状态</th>
                      <th>驳回理由</th>
                      <th>操作</th>
                    </tr>
                    <tr v-for="(purchaseType, index) of obj.purchaseTypeList">
                      <td>{{ index + 1}}</td>
                      <td>{{ purchaseType.basePurchaseType.name }}</td>
                      <td>{{ purchaseType.userInfoEO == null ? '' : purchaseType.userInfoEO.name }}</td>
                      <td>
                        <span v-if="purchaseType.status == 1" class="label label-success">{{ purchaseType.statusCN }}</span>
                        <span v-if="purchaseType.status == 2" class="label label-primary">{{ purchaseType.statusCN }}</span>
                        <span v-if="purchaseType.status == 3" class="label label-warning">{{ purchaseType.statusCN }}</span>
                      </td>
                      <td>{{ purchaseType.remark }}</td>
                      <td>
                        <template v-if="purchaseType.status == 1 && purchaseType.canAudit">
                          <a @click="pass(purchaseType)">通过</a>
                          <a @click="reject(purchaseType)">驳回</a>
                        </template>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>

    <AuditReject :config="config" />
  </section>
</template>

<script>
import AuditReject from '../../../modal/AuditReject'

export default {
  components: {
    AuditReject
  },
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      config: {
        title: '供应商审核',
        show: false,
        callback: Function
      },
      actions: {
        audit: { method: 'post', url: '/one/a/rest/user/supplier/audit{/supplierId}{/purchaseTypeId}?auditResult={auditResult}&remark={remark}' }
      }
    }
  },
  mounted () {
    this.resource = this.$resource(null, {}, this.actions)
  },
  methods: {
    pass (purchaseType) {
      let data = {
        supplierId: this.obj.supplierId,
        purchaseTypeId: purchaseType.purchaseTypeId,
        auditResult: true
      }
      this.$confirm('确认审核通过吗？', () => {
        this.resource.audit(data, null).then(function (response) {
          this.$notify.info('审核成功')
          this.$emit('reload')
        })
      })
    },
    reject (purchaseType) {
      this.config.show = true
      let self = this
      this.config.callback = function (remark) {
        let data = {
          supplierId: self.obj.supplierId,
          purchaseTypeId: purchaseType.purchaseTypeId,
          auditResult: false,
          remark: remark
        }
        self.resource.audit(data, null).then(function (response) {
          self.$notify.info('审核成功')
          self.$emit('reload')
        })
      }
    }
  }
}
</script>
