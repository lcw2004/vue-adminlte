<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">菜单信息</h3>
    </div>
    <div class="box-body">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">上级区域</label>
          <div class="col-sm-4">
            <div class="input-group">
              <input type="text" class="form-control" v-model="obj.parent.name" />
              <span class="input-group-btn">
									<button class="btn btn-info" type="button" @click="areaTreeModalConfig.show = true">选择</button>
								</span>
            </div>
            <area-tree-modal :config="areaTreeModalConfig" v-model="obj.parent"></area-tree-modal>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">区域名称</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.name" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">区域编码</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.code" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">区域类型</label>
          <div class="col-sm-4">
            <DictSelector v-model="obj.type" type="sys_area_type"></DictSelector>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">备注</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.remarks" />
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
  components: {},
  data: function () {
    return {
      obj: {
        parent: {},
        area: {},
        name: '',
        code: '',
        type: 1,
        grade: 1,
        address: '',
        zipCode: '',
        master: '',
        phone: '',
        fax: '',
        email: '',
        remarks: ''
      },

      officeTreeModalConfig: {
        show: false,
        title: '选择上级机构'
      },
        // 模态窗属性
      areaTreeModalConfig: {
        show: false,
        title: '选择归属区域'
      }
    }
  },
  mounted () {
    let actions = {
      get: { method: 'get', url: '/one/a/rest/sys/area{/id}' },
      save: { method: 'post', url: '/one/a/rest/sys/area' }
    }
    this.resource = this.$resource(null, {}, actions)
    this.load()
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
    save: function () {
      this.resource.save(null, JSON.stringify(this.obj)).then(function (response) {
        this.$notify.success('保存成功')
        this.$router.go(-1)
      })
    }
  }
}
</script>
