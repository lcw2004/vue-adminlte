<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="box box-solid">
        <div class="box-header">
          <div class="text-center registry-title">
            <h3 class="box-title">信息完善</h3>
          </div>
        </div>

        <div class="box-body">
          <div class="row row-margin-bottom">
            <div class="col-md-12">
              <div class="callout callout-warning">
                <h4>提示!</h4>
                <p>请先完善供应商信息，审核通过之后方可参与投标。请尽可能完善您的信息。</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <form class="form-horizontal">

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">公司信息</h3>
                  </div>
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">公司名称</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.name" maxlength="50" disabled>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6" v-render.r="'统一社会信用代码'">
                        <div class="form-group">
                          <label class="control-label col-md-4">统一社会信用代码</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.officeCode" v-validate="'required'" name="统一社会信用代码">
                            <p class="help-block"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">公司曾用户名称</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.usedName" maxlength="50">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">公司简称</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.shortName" maxlength="50">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6" v-render.r="'法人姓名'">
                        <div class="form-group">
                          <label class="control-label col-md-4">法人姓名</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.legalPersonName" v-validate="'required'" name="法人姓名" maxlength="50">
                            <p class="help-block"></p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6" v-render.r="'法人身份证'">
                        <div class="form-group">
                          <label class="control-label col-md-4">法人身份证</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.legalPersonNumber" v-validate="'required'" name="法人身份证" maxlength="20">
                            <p class="help-block"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">开户银行</label>
                          <div class="col-md-8">
                            <DictSelect v-model="supplier.bankName" type="supplier_bank"></DictSelect>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">银行账户</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.bankAccount">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">所属地区</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">供货区域</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.supplyArea">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">通讯地址</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.officeAddress">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">邮政编码</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.zipCode">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">公司电话</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.telephone">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">公司邮箱</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.email">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">单位类型</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.officeType">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">单位性质</label>
                          <div class="col-md-8">
                            <DictSelect v-model="supplier.officeNature" type="supplier_office_nature"></DictSelect>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">所属行业</label>
                          <div class="col-md-8">
                            <DictSelect v-model="supplier.businessType" type="supplier_business_type"></DictSelect>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">注册类型</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.registerType">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">注册资金</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.registerCapital">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">从业人数</label>
                          <div class="col-md-8">
                            <DictSelect v-model="supplier.emploeeCount" type="supplier_emploee_count"></DictSelect>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">企业规模</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.enterpriseScale">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">主营业务</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.mainBusiness">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label col-md-2">业绩简介</label>
                          <div class="col-md-10">
                            <textarea class="form-control" rows="3" v-model="supplier.businessProfile"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">联系人信息</h3>
                  </div>
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">姓名</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUser.name" disabled>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">电子邮箱</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUser.userContactInfo.email" disabled>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">身份证号</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUser.identityNumber">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">性别</label>
                          <div class="col-md-8">
                            <div>
                              <label class="radio-inline"><input type="radio" value="1" v-model="supplier.principalUser.gender"> 男</label>
                              <label class="radio-inline"><input type="radio" value="2" v-model="supplier.principalUser.gender"> 女</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">所属部门</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUserInfo.department">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">职位</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUserInfo.position">
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">手机号码</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUser.userContactInfo.mobile">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="control-label col-md-4">电话号码</label>
                          <div class="col-md-8">
                            <input type="text" class="form-control" v-model="supplier.principalUser.userContactInfo.phone">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">投标类别</h3>
                  </div>
                  <div class="panel-body">

                  </div>
                </div>





                <!--
                <div class="form-group">
                  <label class="control-label col-md-2">三证合一</label>
                  <div class="col-md-4">
                    <select class="form-control">
                      <option value="1">是</option>
                      <option value="2">否</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label required col-md-2">统一社会信用代码</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label required col-md-2">组织机构代码证</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label required col-md-2">营业执照注册</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control">
                  </div>
                </div>

                <div class="form-group">
                  <label class="control-label required col-md-2">税务登记证</label>
                  <div class="col-md-4">
                    <input type="text" class="form-control">
                  </div>
                </div>
                -->




              </form>
            </div>
          </div>
        </div>

        <div class="box-footer">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-5"></div>
              <div class="col-md-2">
                <button type="button" class="btn btn-block btn-primary" @click="save">
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
  export default {
    data: function () {
      return {
        actions: {
          get: { method: 'get', url: '/one/a/rest/supplierInfo' },
          save: { method: 'post', url: '/one/a/rest/user/supplierRegistry/saveUserSupplierEO' }
        },
        supplier: {
        }
      }
    },
    mounted: function () {
      this.resource = this.$resource(null, {}, this.actions)
      this.load()
    },
    methods: {
      load: function () {
        this.resource.get().then(function (response) {
          var result = response.body
          if (result.ok && result.data) {
            this.supplier = result.data
          }
        })
      },
      save: function () {
        this.$validator.validateAll().then(() => {
          this.resource.save(null, JSON.stringify(this.supplier)).then(function (response) {
            var result = response.body
            if (result.ok) {
              /* eslint-disable */
              alert('保存成功')
            }
          })
        }).catch(() => {
        })
      }
    }
  }
</script>
