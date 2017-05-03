<template>
  <form class="form-horizontal">
    <div class="form-group" v-render.r="'供应商全称'">
      <label class="control-label col-md-2">供应商全称</label>
      <div class="col-md-4">
        <input type="text" class="form-control" v-model="user.supplierName" v-validate="'required'" name="供应商全称" maxlength="50" @blur="validSupplierName">
      </div>
      <div class="col-md-6">
        <p class="help-block">供应商全称必须与公司公章相符，不得含其它字符!</p>
        <p class="help-block" v-if="errors.has('供应商全称:is_exist')">
          该机构已经注册过了，点此 <a href="login.html">登录系统</a>。</br>
          如果您不记得账号，点此 <router-link to="/forget-account">找回账户</router-link>。</br>
          如果您不记得密码，点此 <router-link to="/forget-password">重置密码</router-link>。
        </p>
      </div>
    </div>

    <div class="form-group" v-render.r="'注册帐号'">
      <label class="control-label col-md-2">注册帐号</label>
      <div class="col-md-4">
        <input type="text" class="form-control" v-model="user.account" v-validate="'required'" name="注册帐号" @blur="validAccount">
      </div>
      <div class="col-md-6">
        <p class="help-block">只能输入3-20个字母或者数字的组合字串且不包含空格</p>
      </div>
    </div>

    <div class="form-group" v-render.r="'密码'">
      <label class="control-label col-md-2">密码</label>
      <div class="col-md-4">
        <input type="password" class="form-control" v-model="user.password" v-validate="'required'" name="密码" >
      </div>
      <div class="col-md-6">
        <p class="help-block">请输入6-20位字母加数字或符号!</p>
      </div>
    </div>

    <div class="form-group" v-render.r="'确认密码'">
      <label class="control-label col-md-2">确认密码</label>
      <div class="col-md-4">
        <input type="password" class="form-control" v-model="user.passwordConfirm" v-validate="'required|confirmed:密码'" name="确认密码" >
      </div>
      <div class="col-md-6">
        <p class="help-block">请再次输入密码!</p>
      </div>
    </div>

    <div class="form-group" v-render.r="'联系电话'">
      <label class="control-label col-md-2">联系电话</label>
      <div class="col-md-4">
        <input type="text" class="form-control" v-model="user.mobile" v-validate="'required'" name="联系电话">
      </div>
      <div class="col-md-6">
        <p class="help-block"></p>
      </div>
    </div>

    <div class="form-group" v-render.r="'邮箱'">
      <label class="control-label col-md-2">邮箱</label>
      <div class="col-md-4">
        <input type="text" class="form-control" v-model="user.email" v-validate="'required|email'" name="邮箱">
      </div>
      <div class="col-md-6">
        <p class="help-block">请输入验证邮箱，您可通过该邮箱找回账号或者密码!</p>
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
        <p class="help-block" v-if="validCodeMessage">{{ validCodeMessage }}</p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      leftTime: 0,
      defaultLeftTime: 10,

      validCodeMessage: ''
    }
  },
  methods: {
    sendVarifyCode () {
      if (this.leftTime > 0) {
        return
      }

      // 发送验证码
      this.send()
      this.validSupplierName()

      // 倒计时
      this.leftTime = this.defaultLeftTime
      let interval = setInterval(() => {
        if (this.leftTime > 0) {
          this.leftTime--
        } else {
          clearInterval(interval)
        }
      }, 1000)
    },
    send () {
      let email = this.user.email
      this.$http.get('/one/a/rest/user/supplierRegistry/sendValidCode?email=' + email).then(function (response) {
        console.log(response.body)
        if (response.body.ok) {
          this.validCodeMessage = '验证码发送成功！'
        } else {
          this.validCodeMessage = response.body.message
        }
      })
    },
    validSupplierName () {
      if (!this.user.supplierName) {
        return
      }
      this.$http.get('/one/a/rest/user/supplierRegistry/validName?name=' + this.user.supplierName).then(function (response) {
        let result = response.body
        if (result.ok) {
          this.errors.remove('供应商全称', 'is_exist')
        } else {
          this.errors.add('供应商全称', '供应商已经存在', 'is_exist')
        }
      })
    },
    validAccount () {
      if (!this.user.account) {
        return
      }
      this.$http.get('/one/a/rest/user/supplierRegistry/validAccount?account=' + this.user.account).then(function (response) {
        let result = response.body
        if (result.ok) {
          this.errors.remove('注册帐号', 'is_exist')
        } else {
          this.errors.add('注册帐号', '账户已经存在', 'is_exist')
        }
      })
    }
  }
}
</script>

<style>
.required:before {
  font-family: 'Times New Roman';
  font-size: 14px;
  content: "* ";
  color: #dd4b39;
  position: relative;
  top: 3px;
  right: 3px;
}
</style>
