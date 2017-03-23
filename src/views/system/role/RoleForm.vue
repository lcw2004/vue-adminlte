<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">字典信息</h3>
    </div>
    <div class="box-body">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">归属机构</label>
          <div class="col-sm-4">
            <div class="input-group">
              <input type="text" class="form-control" v-model="obj.office.name" />
              <span class="input-group-btn">
									<button class="btn btn-info" type="button" @click="companyTreeModalConfig.show = true">选择</button>
								</span>
            </div>
            <office-tree-modal :config="companyTreeModalConfig" v-model="obj.office"></office-tree-modal>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">角色名称</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.name" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">数据范围</label>
          <div class="col-sm-4">
            <select class="form-control" v-model="obj.dataScope">
								<c:forEach var="dict" items="${fns:getDictList('sys_data_scope')}">
									<option value="${dict.value}">${dict.label}</option>
								</c:forEach>
							</select> 特殊情况下，设置为“按明细设置”，可进行跨机构授权
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">角色授权</label>
          <div class="col-sm-4">
            <tree :element="topMenu" v-model="obj.menuIdList" select-type="checkbox"></tree>
          </div>
        </div>
      </form>
    </div>
    <div class="box-footer">
      <div class="row">
        <div class="col-md-2 col-md-offset-2">
          <a class="btn btn-block btn-primary" @click="save()">保存</a>
        </div>
        <div class="col-md-2">
          <a class="btn btn-block btn-default" @click="$router.go(-1)">返回</a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      obj: {
        office: {},
        name: '',
        dataScope: '',
        menuIdList: []
      },
      topMenu: {},
      companyTreeModalConfig: {
        show: false,
        title: '选择所属机构'
      }
    }
  },
  mounted () {
    let actions = {
      get: {method: 'get', url: '/one/a/rest/sys/role{/id}'},
      getMenuTree: {method: 'get', url: '/one/a/rest/sys/menu/tree'},
      save: {method: 'post', url: '/one/a/rest/sys/role'}
    }
    this.resource = this.$resource(null, {}, actions)
    this.load()
    this.loadMenu()
  },
  methods: {
    load: function () {
      let id = this.$route.params.id
      if (id) {
        this.resource.get({id: id}).then(function (response) {
          this.obj = response.body
        })
      }
    },
    loadMenu: function () {
      this.resource.getMenuTree().then(function (response) {
        this.topMenu = response.body
      })
    },
    save: function () {
      this.resource.save(null, JSON.stringify(this.obj)).then(function (response) {
        this.$notify.success('保存成功')
        this.$router.go(-1)
      })
    }
  }
}
</script>
