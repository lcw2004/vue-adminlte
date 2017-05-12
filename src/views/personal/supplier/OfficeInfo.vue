<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-solid">
          <div class="box-header">
            <h3 class="box-title">机构信息</h3>
          </div>
          <div class="box-body">
            <section>
              <h4 class="page-header">基本信息</h4>
              <form class="form-horizontal">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">单位名称</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.name }}
                          <span v-if="supplier.status == -1">{{ supplier.statusCn }}</span>
                          <span v-if="supplier.status == 1" class="label label-primary">{{ supplier.statusCn }}</span>
                          <span v-if="supplier.status == 2" class="label label-success">{{ supplier.statusCn }}</span>
                          <span v-if="supplier.status == 3" class="label label-warning">{{ supplier.statusCn }}</span>
                          <span v-if="supplier.status == 4" class="label label-default">{{ supplier.statusCn }}</span>
                          <span v-if="supplier.status == 5">{{ supplier.statusCn }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">单位简称</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.shortName }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">曾用名称</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.usedName }}</p>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-3 control-label">公司法人姓名</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.legalPersonName }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">公司法人身份证</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.legalPersonNumber }}</p>
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-md-3 control-label">开户银行名称</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.bankName }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">开户银行账号</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.bankAccount }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">所属地区</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.areaId }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">单位地址</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.officeAddress }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">邮编</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.zipCode }}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="col-md-3 control-label">供货区域</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.supplyArea }}</p>
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
                        <p class="form-control-static">{{ supplier.principalUser.name }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">登录账号</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.principalUser.account }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">手机号码</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.principalUser.userContactInfo.mobile }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">座机号码</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.principalUser.userContactInfo.phone }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">电子邮箱</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.principalUser.userContactInfo.email }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-md-3 control-label">用户地址</label>
                      <div class="col-md-9">
                        <p class="form-control-static">{{ supplier.principalUser.userContactInfo.address }}</p>
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
                        </tr>
                        <tr v-for="(purchaseType, index) of supplier.purchaseTypeList">
                          <td>{{ index + 1}}</td>
                          <td>{{ purchaseType.basePurchaseType.name }}</td>
                          <td>{{ purchaseType.userInfoEO == null ? '' : purchaseType.userInfoEO.name }}</td>
                          <td>
                            <span v-if="purchaseType.status == 1" class="label label-success">{{ purchaseType.statusCN }}</span>
                            <span v-if="purchaseType.status == 2" class="label label-primary">{{ purchaseType.statusCN }}</span>
                            <span v-if="purchaseType.status == 3" class="label label-warning">{{ purchaseType.statusCN }}</span>
                          </td>
                          <td>{{ purchaseType.remark }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="box-footer">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SupplierAddPurchaseTypeMixin from './SupplierAddPurchaseTypeMixin'
  import SupplierFormMixin from './SupplierFormMixin'

  export default {
    mixins: [SupplierAddPurchaseTypeMixin, SupplierFormMixin],
    data: function () {
      return {
        actions: {
          get: { method: 'get', url: '/one/a/rest/supplierInfo' },
          getQualificationType: { method: 'get', url: '/one/a/rest/qualificationType/supplier' },
          save: { method: 'post', url: '/one/a/rest/user/supplierRegistry/updateUserSupplierEO' }
        },
        qualificationTypeList: []
      }
    },
    mounted: function () {
      this.resource = this.$resource(null, {}, this.actions)
      this.load()
      this.loadQualificationType()
    },
    methods: {
      loadQualificationType () {
        this.resource.getQualificationType().then(function (response) {
          var result = response.body
          if (result.ok && result.data) {
            this.qualificationTypeList = result.data
          }
        })
      }
    }
  }
</script>
