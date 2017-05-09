<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="box box-solid">
        <div class="box-header">
          <div class="text-center registry-title">
            <h3 class="box-title">供应商注册</h3>
          </div>
        </div>

        <div class="box-body">
          <div class="row row-margin-bottom">
            <div class="col-md-12">
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <form class="form-horizontal">


              </form>
            </div>
          </div>
        </div>

        <div class="box-footer">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-5"></div>
              <div class="col-md-2">
                <button type="button" class="btn btn-block btn-primary" @click="save">
                  提 交
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        actions: {
          get: { method: 'get', url: '/one/a/rest/user/supplierRegistry/getUserSupplierInfo?id={id}' },
          save: { method: 'post', url: '/one/a/rest/user/supplierRegistry/saveUserSupplierEO' }
        },

        supplier: {

        }
      }
    },
    mounted: function () {
      this.resource = this.$resource(null, {}, this.actions)
      this.load()
    },
    methods: {
      load: function () {
        let id = this.$route.params.id
        if (id) {
          this.resource.get({id: id}).then(function (response) {
            var result = response.body
            if (result.ok && result.data) {
              this.supplier = result.data
            }
          })
        }
      },
      save: function () {
        this.$validator.validateAll().then(() => {
          let id = this.$route.params.id
          if (id) {
            this.resource.save(null, JSON.stringify(this.supplier)).then(function (response) {
              var result = response.body
              if (result.ok) {
                /* eslint-disable */
                alert('保存成功')
              }
            })
          }
        }).catch(() => {
        })
      }
    }
  }
</script>
