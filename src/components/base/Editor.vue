<template>
  <textarea :id="id" :value="value"></textarea>
</template>

<script>
let CKEDITOR = window.CKEDITOR

export default {
  name: 'Editor',
  props: {
    value: {},
    config: {}
  },
  data: function () {
    return {
      id: new Date().getTime()
    }
  },
  beforeCreate: function () {
    this.ckeditor = CKEDITOR.instances[this.id]
  },
  mounted: function () {
    this.init()
  },
  destroyed: function () {
    if (this.ckeditor) {
      this.ckeditor.destroy()
    }
  },
  methods: {
    init: function () {
      var self = this
      // 设置初始值
      self.ckeditor.setData(self.value)

      // 替换掉textarea
      self.ckeditor.replace(self.id)

      // 绑定修改事件
      self.ckeditor.on('change', () => {
        self.$emit('input', self.ckeditor.getData())
      })
    }
  }
}
</script>
