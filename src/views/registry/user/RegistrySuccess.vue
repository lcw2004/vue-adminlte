<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="box box-solid">
        <div class="box-header">
          <div class="text-center registry-title">
            <h1 class="box-title">注册成功</h1>
          </div>
        </div>

        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              恭喜您注册成功，请登录系统继续完善信息，完善信息并审核通过之后即可参与投标。<br>
              <a class="btn btn-info" href="login.html">
                登录并完善信息
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Step from '../step/Step'
  import StepItem from '../step/StepItem'
  export default {
    components: {
      Step,
      StepItem
    },
    data: function () {
      return {
        leftTime: 0,
        defaultLeftTime: 10,
        validCodeMessage: '',

        user: {
          supplierName: '',
          account: '',
          password: '',
          passwordConfirm: '',
          userName: '',
          mobile: '',
          phone: '',
          email: '',
          validCode: ''
        }
      }
    },
    methods: {
      sendVerifyCode () {
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
        if (!this.user.supplierName.trim()) {
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
        if (!this.user.account.trim()) {
          return
        }
        this.$http.get('/one/a/rest/user/supplierRegistry/validAccount?account=' + this.user.account).then(function (response) {
          let result = response.body
          if (result.ok) {
            this.errors.remove('', 'is_exist')
          } else {
            this.errors.add('注册帐号', '账户已经存在', 'is_exist')
          }
        })
      },
      registry () {
        this.$validator.validateAll().then(() => {
          this.$http.post('/one/a/rest/user/supplierRegistry/registryUserInfo', JSON.stringify(this.user)).then(function (response) {
            let result = response.body
            if (result.ok && result.data) {
              this.$router.push('/registry/success')
            } else {
              this.handlerError(result)
            }
          })
        }).catch(() => {
        })
      },
      handlerError (result) {
        if (result.code === '0001') {
          this.errors.add('供应商全称', result.message, 'api_valid')
        } else if (result.code === '0002') {
          this.errors.add('注册帐号', result.message, 'api_valid')
        } else if (result.code === '0003') {
          this.errors.add('验证码', result.message, 'api_valid')
        }
      }
    }
  }
</script>
