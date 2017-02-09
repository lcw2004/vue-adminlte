<template>
  <div>
    <div :id="id">
      <h1>Hello world!</h1>
      <p>I'm an instance of <a href="http://ckeditor.com">CKEditor</a>.</p>
    </div>
    <input type="button" @click="getData" value="测试">
  </div>
</template>

<script>
let CKEDITOR = window.CKEDITOR

export default {
  name: 'Editor',
  props: {
    value: {},
    toolbar: {
      type: Array,
      default: () => [
        ['Format'],
        ['Bold', 'Italic'],
        ['Undo', 'Redo']
      ]
    },
    language: {
      type: String,
      default: 'en'
    },
    extraplugins: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      id: new Date().getTime() + ''
    }
  },
  beforeUpdate () {
    const ckeditorId = this.id

    if (this.value !== CKEDITOR.instances[ckeditorId].getData()) {
      // CKEDITOR.instances[ckeditorId].setData(this.value)
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    const ckeditor = CKEDITOR.instances[this.id]
    if (ckeditor) {
      ckeditor.destroy()
    }
  },
  methods: {
    init: function () {
      const ckeditorId = this.id
      const ckeditor = CKEDITOR.instances[ckeditorId]
      const ckeditorConfig = {
        toolbar: this.toolbar,
        language: this.language,
        height: this.height,
        extraPlugins: this.extraplugins
      }

      // 替换掉textarea
      CKEDITOR.inline(ckeditorId, ckeditorConfig)

      // 设置初始值
      // ckeditor.setData(this.value)

      // 绑定修改事件
      ckeditor.on('change', () => {
        let ckeditorData = ckeditor.getData()
        if (ckeditorData !== this.value) {
          this.$emit('input', ckeditorData)
        }
      })
    },
    getData: function () {
      const ckeditor = CKEDITOR.instances[this.id]
      console.log(ckeditor.getData())
    }
  }
}
</script>
