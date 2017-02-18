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
                    <label class="control-label">须知模板</label>
                    <select class="form-control">
                      <option>模板 1</option>
                      <option>模板 2</option>
                      <option>模板 3</option>
                      <option>模板 4</option>
                      <option>模板 5</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-info btn-sm pull-right">
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
