<template>
<div>
  <section>
    <h4 class="page-header">基本信息</h4>
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-4 control-label">姓名</label>
            <div class="col-md-8">
              <div class="input-group">
                <input type="text" class="form-control" value="张三">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">登录账号</label>
            <div class="col-md-8">
              <p class="form-control-static">1234567890</p>
            </div>
          </div>

        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-4 control-label">注册IP</label>
            <div class="col-md-8">
              <p class="form-control-static">10.11.11.12</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">注册时间</label>
            <div class="col-md-8">
              <p class="form-control-static">2017-01-01 11:01:01</p>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">最后登录时间</label>
            <div class="col-md-8">
              <p class="form-control-static">2017-02-01 11:01:01</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>

  <section>
    <h4 class="page-header">联系方式</h4>
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-4 control-label">手机号码</label>
            <div class="col-md-8">
              <div class="input-group">
                <input type="text" class="form-control" value="1234567890">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">座机号码</label>
            <div class="col-md-8">
              <div class="input-group">
                <input type="text" class="form-control" value="1234567890">
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-4 control-label">电子邮箱</label>
            <div class="col-md-8">
              <div class="input-group">
                <input type="text" class="form-control" value="test@163.com">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label">用户地址</label>
            <div class="col-md-8">
              <div class="input-group">
                <input type="text" class="form-control" value="湖南省，长沙市 某地">
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</div>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {}
  }
}
</script>
