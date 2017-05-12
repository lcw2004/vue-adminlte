<template>
  <PopoverContainer :title="user.name">
    <form class="form-horizontal">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-5 control-label">姓名</label>
            <div class="col-md-7">
              <p class="form-control-static">{{ user.name }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-5 control-label">登录账号</label>
            <div class="col-md-7">
              <p class="form-control-static">{{ user.account }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-5 control-label">手机</label>
            <div class="col-md-7">
              <p class="form-control-static">{{ user.userContactInfo.mobile }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-5 control-label">电话</label>
            <div class="col-md-7">
              <p class="form-control-static">{{ user.userContactInfo.phone }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="col-md-5 control-label">邮箱</label>
            <div class="col-md-7">
              <p class="form-control-static">{{ user.userContactInfo.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </PopoverContainer>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
