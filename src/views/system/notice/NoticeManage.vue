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
                    <label class="control-label">须知</label>
                    <input type="text" placeholder="编号/名称" class="form-control inline-block">
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-info btn-sm pull-right">
                      <i class="fa fa-plus"></i>
                      <router-link to='/notice-form' tag='span'>添加须知</router-link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="box-body">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>名称</th>
                  <th>编号</th>
                  <th>最后修改日期</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><a>投标须知</a></td>
                  <td>001</td>
                  <td>2017-01-16</td>
                  <td>
                    <router-link to='/notice-form'>编辑</router-link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><a>竞价须知</a></td>
                  <td>002</td>
                  <td>2017-01-16</td>
                  <td>
                    <router-link to='/notice-form'>编辑</router-link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><a>供应商注册须知</a></td>
                  <td>002</td>
                  <td>2017-01-16</td>
                  <td>
                      <router-link to='/notice-form'>编辑</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
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
export default {
  name: 'NoticeManage',
  components: {
  },
  data: function () {
    return {
    }
  }
}
</script>
