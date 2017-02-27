<template>
<div class="modal" v-show="isShow" style="display: block" :class="modalStyle">
  <div class="modal-dialog" :class="modelSize">
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
        <button type="button" class="btn" :class="cancelBtnStyle" data-dismiss="modal" @click="close()">取消</button>
        <button type="button" class="btn" :class="okBtnStyle" @click="ok()">确认</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
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
    },
    /**
    * 类型：取值范围：default\primary\warning\success\danger
    */
    type: {
      type: String,
      default: 'default'
    },
    /**
    * 大小：取值范围：sm\md\lg
    */
    size: {
      type: String,
      default: 'md'
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
  },
  computed: {
    modalStyle: function () {
      return 'modal-' + this.type
    },
    modelSize: function () {
      return 'modal-' + this.size
    },
    okBtnStyle: function () {
      if (this.type === 'default') {
        return 'btn-primary'
      }
      return 'btn-' + this.type
    },
    cancelBtnStyle: function () {
      return 'btn-' + this.type
    }
  }
}
</script>
