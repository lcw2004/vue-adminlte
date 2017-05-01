<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <section>
        <h4 class="page-header">基本信息</h4>
        <form class="form-horizontal">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="col-md-3 control-label">登录账号</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.account }}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">姓名</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.name }}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">最后登录时间</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.lastLoginTime }}</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="col-md-3 control-label">注册IP</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.createIp }}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">注册时间</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.createTime }}</p>
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
                <label class="col-md-3 control-label">手机号码</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.userContactInfo.mobile }}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">座机号码</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.userContactInfo.phone }}</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label class="col-md-3 control-label">电子邮箱</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.userContactInfo.email }}</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">用户地址</label>
                <div class="col-md-9">
                  <p class="form-control-static">{{ obj.principalUser.userContactInfo.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
