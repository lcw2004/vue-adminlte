<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <form class="form-inline">
              <div class="col-md-3"><label class="control-label">姓名</label> <input type="text" placeholder="姓名" class="form-control inline-block"></div>
            </form>
          </div>

          <div class="box-body">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>供应商名称</th>
                  <th>注册时间</th>
                  <th>联系人</th>
                  <th>状态</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><a>某某有限公司</a></td>
                  <td>2017-01-01</td>
                  <td><a>张三</a></td>
                  <td>
                    <span class="label label-warning">待审核</span>
                  </td>
                  <td>
                    <a @click="ok">通过</a>
                    <a @click="config.show = true">驳回</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <AuditReject :config="config"></AuditReject>
  </section>
</template>

<script>
import AuditReject from '../../modal/AuditReject'

export default {
  components: {
    AuditReject
  },
  data: function () {
    return {
      config: {
        show: false,
        title: '驳回原因'
      }
    }
  },
  methods: {
    ok () {
      this.$confirm('确认审核通过吗？', () => this.$notify.success('提交成功，请等待审核！'))
    }
  }
}
</script>
