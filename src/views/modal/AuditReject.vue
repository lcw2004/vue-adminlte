<template>
<div class="modal" v-show="config.show" style="display: block">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="config.show = false">
          <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title" v-text="config.title"></h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12">
            <textarea class="form-control" placeholder="请输入原因" v-model="remark"></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default " data-dismiss="modal" @click="config.show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="ok()">确认</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    // 模态窗属性配置
    config: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      remark: ''
    }
  },
  methods: {
    ok: function () {
      if (!this.remark) {
        this.$notify.warn('请输入驳回理由')
        return
      }
      this.config.show = false
      if (this.config.callback) {
        this.config.callback(this.remark)
      }
    }
  }
}
</script>
