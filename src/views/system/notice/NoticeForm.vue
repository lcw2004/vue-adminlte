<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <div class="row">
              <div class="col-md-12">
                <form class="form-inline">
                  <div class="col-md-6">
                    <label class="control-label">模板名称</label>
                    <input type="text" class="form-control" value="模板1">
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-info pull-right">
                      <router-link to='/notice-form' tag='span'>保存</router-link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="box-body">
            <NoticeChapterInfo></NoticeChapterInfo>
          </div>
        </div>
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
            <p class="text-muted">该模块功能与我的招标项目相同，这个地方显示所有的可查看的数据，按钮不再单独列出</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NoticeChapterInfo from './NoticeChapterInfo'

export default {
  name: 'NoticeForm',
  components: {
    NoticeChapterInfo
  },
  data: function () {
    return {}
  }
}
</script>
