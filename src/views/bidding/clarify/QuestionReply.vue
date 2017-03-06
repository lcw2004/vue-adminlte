<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">澄清详情</h3>
        </div>
        <div class="box-body">

          <form class="form-horizontal">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-4 control-label">问题</label>
                  <div class="col-md-8">
                    <p class="form-control-static">关于某某项目的澄清</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="col-md-4 control-label">供应商</label>
                  <div class="col-md-8">
                    <p class="form-control-static">李四</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="col-md-2 control-label">描述</label>
                  <div class="col-md-9">
                    <Editor></Editor>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="box-footer">
          <div class="col-md-2 col-sm-0"></div>
          <div class="col-md-2 col-sm-2"><button class="btn btn-block btn-default" @click="$router.go(-1)">返回</button></div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'ClarifyInfo',
  components: {
  },
  props: {
  },
  data: function () {
    return {}
  },
  methods: {
    select: function () {

    }
  }
}
</script>
