<template>
<div class="modal" v-show="isShow" style="display: block">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
          <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title">{{ title }}</h4>
      </div>
      <div class="modal-body">
        {{ message }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default " data-dismiss="modal" @click="close()">取消</button>
        <button type="button" class="btn btn-primary" @click="ok()">确认</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    // 模态窗属性配置
    title: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: false
    },
    onOk: {
      type: Function,
      required: true
    }
  },
  data: function () {
    return {
      isShow: true
    }
  },
  beforeMount () {
    this.init()
  },
  methods: {
    init () {
      let parent = document.querySelector(`#confirm`)
      if (!parent) {
        parent = document.createElement('div')
        parent.classList.add('#confirm')
        document.body.appendChild(parent)
        parent.appendChild(this.$el)
      }
    },
    close () {
      this.isShow = false
      this.$destroy()
      this.$el.remove()
    },
    ok () {
      this.onOk()
      this.close()
    }
  }
}
</script>
