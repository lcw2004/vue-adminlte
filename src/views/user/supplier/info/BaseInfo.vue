<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <section>
          <h4 class="page-header">基本信息</h4>
          <SupplierBaseInfo :obj="obj" />
        </section>

        <section>
          <h4 class="page-header">联系人</h4>
          <PrincipalUserInfo :obj="obj" />
        </section>

        <section>
          <h4 class="page-header">可参与投标类别</h4>
          <PurchaseTypeInfo :obj="obj" />
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import SupplierBaseInfo from './baseInfo/SupplierBaseInfo'
import PrincipalUserInfo from './baseInfo/PrincipalUserInfo'
import PurchaseTypeInfo from './baseInfo/PurchaseTypeInfo'

export default {
  components: {
    SupplierBaseInfo,
    PrincipalUserInfo,
    PurchaseTypeInfo
  },
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
