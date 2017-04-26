<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">菜单信息</h3>
    </div>
    <div class="box-body">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">上级菜单</label>
          <div class="col-sm-4">
            <div class="input-group">
              <input type="text" class="form-control" />
              <span class="input-group-btn">
									<button class="btn btn-info" type="button" @click="menuTreeModalConfig.show = true">选择</button>
								</span>
            </div>
            <!-- <menu-tree-modal :config="menuTreeModalConfig" v-model="obj.parent"></menu-tree-modal> -->
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">名称</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.name" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">链接</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.href" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">排序</label>
          <div class="col-sm-4">
            <input type="number" class="form-control" v-model="obj.sort" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">图标</label>
          <div class="col-sm-4">
            <button class="btn btn-info" type="button" @click="iconModalConfig.show = true">选择</button>
            <i v-if="obj.icon" :class="obj.icon" style="font-size: 25px"></i>
            <!-- <icon-modal :config="iconModalConfig" v-model="obj.icon"></icon-modal> -->
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">可见</label>
          <div class="col-sm-4">
            <DictRadio type="show_hide" v-model="obj.isShow" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">权限标识</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.permission" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">备注</label>
          <div class="col-sm-4">
            <textarea class="form-control" v-model="obj.remarks"></textarea>
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
        isShow: 1,
        parent: {},
        name: '',
        href: '',
        sort: 0,
        icon: '',
        permission: '',
        remarks: ''
      },
      menuTreeModalConfig: {
        show: false,
        title: '选择上级菜单'
      },
      iconModalConfig: {
        show: false,
        title: '选择图标'
      }
    }
  },
  mounted () {
    let actions = {
      get: { method: 'get', url: '/one/a/rest/sys/menu{/id}' },
      save: { method: 'post', url: '/one/a/rest/sys/menu' }
    }
    this.resource = this.$resource(null, {}, actions)
    this.load()
  },
  methods: {
    load: function () {
      let id = this.$route.params.id
      if (id) {
        this.resource.get({id: id}).then(function (response) {
          let result = response.body
          if (result.ok) {
            this.obj = result.data
          }
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
