<!--
这个页面有以下几个地方用了，根据类型来区分开
1.  详情
2.  编辑
3.  审核
 -->

<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <section>
          <div class="page-header">
            <div class="row">
              <div class="col-md-4">
                <h4>基本信息</h4>
              </div>
              <div class="col-md-8" v-if="type == '2'">
                <button type="button" class="btn btn-primary btn-xs pull-right">
                  <i class="fa fa-fw fa-edit"></i>修改
                </button>
              </div>
            </div>
          </div>
          <SupplierBaseInfo :obj="obj" />
        </section>

        <section>
          <div class="page-header">
            <h4>联系人</h4>
          </div>
          <PrincipalUserInfo :obj="obj" />
        </section>

        <section>
          <div class="page-header">
            <h4>资质文件</h4>
          </div>
          <QualificationInfo :obj="obj" />
        </section>

        <section>
          <div class="page-header">
            <h4>可参与投标类别</h4>
          </div>
          <PurchaseTypeInfo :obj="obj" v-if="type != '3'"/>
          <PurchaseTypeInfoAudit :obj="obj" v-if="type == '3'"/>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import SupplierBaseInfo from './baseInfo/SupplierBaseInfo'
import PrincipalUserInfo from './baseInfo/PrincipalUserInfo'
import PurchaseTypeInfo from './baseInfo/PurchaseTypeInfo'
import PurchaseTypeInfoAudit from './baseInfo/PurchaseTypeInfoAudit'
import QualificationInfo from './baseInfo/QualificationInfo'

export default {
  components: {
    SupplierBaseInfo,
    PrincipalUserInfo,
    PurchaseTypeInfo,
    PurchaseTypeInfoAudit,
    QualificationInfo
  },
  props: {
    obj: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
