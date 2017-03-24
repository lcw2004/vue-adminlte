<template>
<section class="content">
  <div class="box">
    <div class="box-body">
      <div class="row row-margin-bottom">
        <div class="col-md-12">
          <div class="pull-right">
            <a class="btn btn-primary" @click="toggleAll()"><span v-if="toggleStatus">收缩</span><span v-else>展开</span>全部</a>
            <a class="btn btn-primary" @click="config.show = true">添加</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>名称</th>
                <th>链接</th>
                <th>排序</th>
                <th>可见</th>
                <th>权限标识</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="obj of dataList" v-show="obj.isShowInTable" :key="obj.id">
                <td>
                  <TreeTableColPrefix :obj="obj" @toggle="toggle(obj)"></TreeTableColPrefix>
                  <span @click="toggle(obj)" v-text="obj.name"></span>
                </td>
                <td><span v-text="obj.href"></span></td>
                <td><span v-text="obj.sort"></span></td>
                <td><span v-text="obj.isShowCN"></span></td>
                <td><span v-text="obj.permission"></span></td>
                <td>
                  <router-link :to='"/system/menu/" + obj.id + "/form"'>修改</router-link>
                  <a>删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import TreeTableMiXin from '../../../mixins/TreeTableMiXin'
import TreeTableColPrefix from '../../../components/tree/TreeTableColPrefix'

export default {
  mixins: [TreeTableMiXin],
  components: {
    TreeTableColPrefix
  },
  data: function () {
    return {
      topElement: {}
    }
  },
  mounted () {
    var actions = {
      getMenuTree: { method: 'get', url: '/one/a/rest/sys/menu/tree' },
      delete: { method: 'delete', url: '/one/a/rest/sys/menu{/id}' }
    }
    this.resource = this.$resource(null, {}, actions)
    this.loadTreeTable()
  },
  methods: {
    loadTreeTable: function () {
      this.resource.getMenuTree().then(function (response) {
        this.topElement = response.body
      })
    }
  }
}
</script>
