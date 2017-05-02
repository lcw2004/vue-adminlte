<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <div class="pull-right">
        <a class="btn btn-primary" @click="toggleAll()"><span v-if="toggleStatus">收缩</span><span v-else>展开</span>全部</a>
        <router-link class="btn btn-primary" to="/system/menu/add">添加</router-link>
      </div>
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
              <a @click="config.show = true">添加下级元素</a>
              <a :href="'${ctx}/sys/menu/form?id=' + obj.id">修改</a>
              <a @click="deleteData(obj.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <PurchaseTypeModal :config="config"></PurchaseTypeModal>
</section>
</template>

<script>
import TreeTableMiXin from '../../../mixins/TreeTableMiXin'
import PurchaseTypeModal from './PurchaseTypeModal'

export default {
  mixins: [TreeTableMiXin],
  components: {
    PurchaseTypeModal
  },
  data: function () {
    return {
      topElement: {},
      config: {
        show: false,
        title: '添加采购类别'
      }
    }
  },
  mounted () {
    let actions = {
      getMenuTree: { method: 'get', url: '/one/a/rest/base/purchaseType/tree' },
      delete: { method: 'delete', url: '/one/a/rest/base/purchaseType{/id}' }
    }
    this.resource = this.$resource(null, {}, actions)
    this.loadTreeTable()
  },
  methods: {
    loadTreeTable: function () {
      this.resource.getMenuTree().then(function (response) {
        let result = response.body
        if (result.ok) {
          this.topElement = result.data
        }
      })
    },
    deleteObj: function (obj) {
      this.$confirm('确认删除[ ' + obj.name + ' ]吗？', () => {
        this.resource.delete({id: obj.id}).then(function (response) {
          if (response.body.ok) {
            this.$notify.success('删除成功')
            this.removeElement(obj)
          }
        })
      })
    }
  }
}
</script>
