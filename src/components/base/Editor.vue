<template>
  <textarea :id="id" :value="value"></textarea>
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
      CKEDITOR.instances[ckeditorId].setData(this.value)
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    const ckeditorId = this.id
    if (CKEDITOR.instances[ckeditorId]) {
      CKEDITOR.instances[ckeditorId].destroy()
    }
  },
  methods: {
    init: function () {
      const ckeditorId = this.id
      const ckeditorConfig = {
        toolbar: this.toolbar,
        language: this.language,
        height: this.height,
        extraPlugins: this.extraplugins
      }

      CKEDITOR.replace(ckeditorId, ckeditorConfig)

      CKEDITOR.instances[ckeditorId].on('change', () => {
        let ckeditorData = CKEDITOR.instances[ckeditorId].getData()
        if (ckeditorData !== this.value) {
          this.$emit('input', ckeditorData)
        }
      })
    },
    getData: function () {
      const data = CKEDITOR.instances[this.id].getData()
      console.log(data)
    }
  }
}
</script>
