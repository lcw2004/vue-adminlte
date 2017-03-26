<template>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="control-label col-md-2">供应商全称</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-6">
        <p class="help-block">供应商全称必须与公司公章相符，不得含其它字符!</p>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2">注册帐号</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-6">
        <p class="help-block">只能输入3-20个字母或者数字的组合字串且不包含空格</p>
      </div>
    </div>

    <div class="form-group has-error">
      <label class="control-label col-md-2">密码</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-6">
        <p class="help-block">请输入6-20位字母加数字或符号!</p>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2">重复密码</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-6">
        <p class="help-block">请再次输入密码!</p>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2">联系电话</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-6">
        <p class="help-block"></p>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2">验证邮箱</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-6">
        <p class="help-block"></p>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2">验证码</label>
      <div class="col-md-2">
        <input type="text" class="form-control" >
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-primary" @click="sendVarifyCode" :class="{ disabled : leftTime > 0}">
          发送验证码<template v-if="leftTime > 0">({{ leftTime }})</template>
        </button>
      </div>
      <div class="col-md-6">
        <p class="help-block"></p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="box box-solid">
          <div class="box-header with-border">
            <i class="fa fa-text-width"></i>
            <h3 class="box-title">备注</h3>
          </div>
          <div class="box-body">
            <ol>
              <li>1. </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      leftTime: 0,
      defaultLeftTime: 10
    }
  },
  methods: {
    sendVarifyCode () {
      let self = this

      if (self.leftTime > 0) {
        return
      }

      self.leftTime = self.defaultLeftTime
      let interval = setInterval(function () {
        if (self.leftTime > 0) {
          self.leftTime--
        } else {
          clearInterval(interval)
        }
      }, 1000)
    }
  }
}
</script>
