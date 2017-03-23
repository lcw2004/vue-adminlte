<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">字典信息</h3>
    </div>
    <div class="box-body">
      <form class="form-horizontal">
        <div class="form-group">
						<label class="col-sm-2 control-label">归属公司</label>
						<div class="col-sm-4">
							<div class="input-group">
								<input type="text" class="form-control" v-model="obj.company.name"/>
								<span class="input-group-btn">
									<button class="btn btn-info" type="button" @click="companyTreeModalConfig.show = true">选择</button>
								</span>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">归属部门</label>
						<div class="col-sm-4">
							<div class="input-group">
								<input type="text" class="form-control" v-model="obj.office.name"/>
								<span class="input-group-btn">
									<button class="btn btn-info" type="button" @click="officeTreeModalConfig.show = true">选择</button>
								</span>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">工号</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" v-model="obj.no"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">姓名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" v-model="obj.name"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">登录名</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" v-model="obj.loginName"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">邮箱</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" v-model="obj.email"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">电话</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" v-model="obj.phone"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">手机</label>
						<div class="col-sm-4">
							<input type="text" class="form-control" v-model="obj.mobile"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">角色</label>
						<div class="col-sm-8">
							<div class="checkbox">
								<label v-for="role of roles.list">
									<input type="checkbox" :value="role.id" v-model="obj.roleIdList"> {{ role.name }}
								</label>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">备注</label>
						<div class="col-sm-4">
							<textarea type="text" class="form-control" v-model="obj.remarks"></textarea>
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
        id: '',
        company: {},
        office: {},
        no: '',
        name: '',
        loginName: '',
        email: '',
        phone: '',
        mobile: '',
        remarks: '',
        roleIdList: []
      },
      roles: {},
      companyTreeModalConfig: {
        show: false,
        title: '选择所属机构'
      },
      officeTreeModalConfig: {
        show: false,
        title: '选择所属部门'
      }
    }
  },
  mounted () {
    let actions = {
      get: {method: 'get', url: '/one/a/rest/sys/user{/id}'},
      getRole: {method: 'get', url: '/one/a/rest/sys/role'},
      save: {method: 'post', url: '/one/a/rest/sys/user'},
      update: {method: 'put', url: '/one/a/rest/sys/user'}
    }
    this.resource = this.$resource(null, {}, actions)
    this.load()
    this.loadRole()
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
    loadRole: function () {
      this.resource.getRole().then(function (response) {
        this.roles = response.body
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
