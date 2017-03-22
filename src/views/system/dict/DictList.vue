<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-body">
          <div class="row row-margin-bottom">
            <div class="col-md-12">
              <form class="form-inline">
                <div class="col-md-3">
                  <label class="control-label">类型</label>
                  <select class="form-control inline-block" v-model="param.type">
									<option value="">全部</option>
									<option v-for="dictType of dictTypeList" :value="dictType">{{ dictType }}</option>
								</select>
                </div>
                <div class="col-md-3">
                  <label class="control-label">描述</label>
                  <input class="form-control inline-block" type="text" v-model="param.description">
                </div>
                <div class="col-md-6">
                  <div class="pull-right">
                    <router-link to="/system/dict/add" class="btn btn-primary">添加</router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>类型</th>
                    <th>描述</th>
                    <th>标签</th>
                    <th>键值</th>
                    <th>排序</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="obj of page.list">
                    <td><a @click="param.type = obj.type"><span v-text="obj.type"></span></a></td>
                    <td><span v-text="obj.description"></span></td>
                    <td><span v-text="obj.label"></span></td>
                    <td><span v-text="obj.value"></span></td>
                    <td><span v-text="obj.sort"></span></td>
                    <td>
                      <router-link :to='"/system/dict/" + obj.id'>修改</router-link>
                      <a @click="deleteData(obj.id)">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <Pagination :page="page" @page-no="param.pageNo = arguments[0]" @page-size="param.pageSize = arguments[0]"></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
      param: {
        pageNo: 0,
        pageSize: 10,
        type: '',
        description: ''
      },
      page: {},
      dictTypeList: []
    }
  },
  mounted () {
    let actions = {
      list: {
        method: 'get',
        url: '/one/a/rest/sys/dict'
      },
      listType: {
        method: 'get',
        url: '/one/a/rest/sys/dict/type'
      },
      delete: {
        method: 'delete',
        url: '/one/a/rest/sys/dict{/id}'
      }
    }
    this.resource = this.$resource(null, {}, actions)

    // 设置页码
    this.param.pageNo = 1

    // 加载字典列表
    this.resource.listType().then(function (response) {
      this.dictTypeList = response.body
    })
  },
  methods: {
    query () {
      this.resource.list(this.param).then(function (response) {
        this.page = response.body
      })
    },
    deleteData (id) {
      let self = this
      this.$confirm('确认删除吗？', function () {
        self.resource.delete({id: id}).then(function (response) {
          self.query()
          self.$notify.success('删除成功！')
        })
      })
    }
  },
  watch: {
    'param': {
      handler: function () {
        // 监听查询条件对象，如果有更改就查询数据
        this.query()
      },
      deep: true
    }
  }
}
</script>

<style>
.row-margin-bottom {
  margin-bottom: 10px;
}
</style>
