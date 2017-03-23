<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">字典信息</h3>
    </div>
    <div class="box-body">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label">类型</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.type" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">描述</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.description" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">标签</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.label" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">键值</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" v-model="obj.value" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">排序</label>
          <div class="col-sm-4">
            <input type="number" class="form-control" v-model="obj.sort" />
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
      obj: {}
    }
  },
  mounted () {
    let actions = {
      get: {method: 'get', url: '/one/a/rest/sys/dict{/id}'},
      save: {method: 'post', url: '/one/a/rest/sys/dict'}
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
