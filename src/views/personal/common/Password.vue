<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-solid">
          <div class="box-header">
            <h3 class="box-title">修改密码</h3>
          </div>
          <div class="box-body">
            <form class="form-horizontal">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-4 control-label">当前密码</label>
                    <div class="col-md-8">
                      <input type="password" class="form-control" placeholder="请填写当前登录密码">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-4 control-label">新密码</label>
                    <div class="col-md-8">
                      <input type="password" class="form-control" placeholder="请填写新的登录密码">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-md-4 control-label">确认密码</label>
                    <div class="col-md-8">
                      <input type="password" class="form-control" placeholder="再次输入新的登录密码">
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="box-footer">
            <div class="row">
              <div class="col-md-2 col-md-offset-2">
                <button type="button" class="btn btn-block btn-primary">
                  确认修改密码
                </button>
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
    return {}
  }
}
</script>
