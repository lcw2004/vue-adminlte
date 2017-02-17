<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header">
          <form class="form-inline">
            <div class="col-md-3">
              <a class="btn btn-primary" @click="toggleAll()"><span v-if="toggleStatus">收缩</span><span v-else>展开</span>全部</a>
              <a class="btn btn-primary" @click="config.show = true">添加</a>
            </div>
          </form>
        </div>
        <div class="box-body">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>名称</th>
                <th>编码</th>
                <th>备注</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="obj of dataList" v-show="obj.isShowInTable" :key="obj.id">
                <td>
                  <TreeTableColPrefix :obj="obj" @toggle="toggle(obj)"></TreeTableColPrefix>
                  <span @click="toggle(obj)" v-text="obj.name"></span>
                </td>
                <td><span v-text="obj.code"></span></td>
                <td></td>
                <td>
                  <a :href="'${ctx}/sys/menu/form?id=' + obj.id">修改</a>
                  <a @click="deleteData(obj.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- <form class="form-horizontal"> -->
    <PurchaseTypeModal :config="config"></PurchaseTypeModal>
  <!-- </form> -->
</section>
</template>

<script>
import TreeTableMiXin from '../../mixins/TreeTableMiXin'
import TreeTableColPrefix from '../../components/tree/TreeTableColPrefix'
import PurchaseTypeModal from './PurchaseTypeModal'

export default {
  mixins: [TreeTableMiXin],
  name: 'PurchaseType',
  components: {
    TreeTableColPrefix,
    PurchaseTypeModal
  },
  data: function () {
    return {
      config: {
        show: false,
        title: '添加采购类别'
      }
    }
  },
  computed: {
    /**
     * 需要提供给 TreeTableMiXin 调用，用于 mixin 初始化数据
     */
    topElement: function () {
      return this.$store.state.data.purchaseType
    }
  }
}
</script>
