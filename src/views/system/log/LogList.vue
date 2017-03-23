<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">系统日志</h3>
    </div>
    <div class="box-body">
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>所在公司</th>
                <th>所在部门</th>
                <th>操作用户</th>
                <th>URI</th>
                <th>提交方式</th>
                <th>操作者IP</th>
                <th>创建时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="obj of page.list">
                <td><span v-text="obj.createBy.company.name"></span></td>
                <td><span v-text="obj.createBy.office.name"></span></td>
                <td><span v-text="obj.createBy.name"></span>（<span v-text="obj.createBy.loginName"></span>）</td>
                <td><span v-text="obj.requestUri"></span></td>
                <td><span v-text="obj.method"></span></td>
                <td><span v-text="obj.remoteAddr"></span></td>
                <td><span v-text="obj.createDate"></span></td>
              </tr>
            </tbody>
          </table>

          <pagination :page="page" @page-no="param.pageNo = arguments[0]" @page-size="param.pageSize = arguments[0]"></pagination>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data: function () {
    return {
      param: {
        pageNo: 1,
        pageSize: 10,
        requestUri: '',
        createByName: '',
        beginDate: '',
        endDate: ''
      },
      page: {}
    }
  },
  mounted: function () {
    let actions = {
      list: {method: 'get', url: '/one/a/rest/sys/log'}
    }
    this.resource = this.$resource(null, {}, actions)
    this.query()
  },
  methods: {
    query: function () {
      this.resource.list(this.param).then(function (response) {
        this.page = response.body
      })
    }
  },
  watch: {
    'param': {
      handler: function () {
        this.query()
      },
      deep: true
    }
  }
}
</script>
