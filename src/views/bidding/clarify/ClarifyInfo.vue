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
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">标题</label>
              <div class="col-md-9">
                <p class="form-control-static">关于某某项目的澄清</p>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">发布人</label>
              <div class="col-md-9">
                <p class="form-control-static">李四</p>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">发布时间</label>
              <div class="col-md-9">
                <p class="form-control-static">2017-01-16 00:00:00</p>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">备注</label>
              <div class="col-md-9">
                <Editor></Editor>
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">附件</label>
              <div class="col-md-9">
                <p class="form-control-static"><a><i class="fa fa-paperclip"></i> 附件一（点击下载）</a></p>
              </div>
            </div>
          </form>
        </div>

        <div class="box-footer">
          <div class="col-md-2"></div>
          <div class="col-md-2">
            <button type="submit" class="btn btn-block btn-default">
              <router-link to="/bidding-clarify">返回</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Editor from '../../../components/base/Editor'

export default {
  name: 'ClarifyInfo',
  components: {
    Editor
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
