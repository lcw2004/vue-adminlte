<template>
  <div class="switch switch-large">
    <input type="checkbox"/>
  </div>
</template>

<script>
require('bootstrap-switch')
let $ = require('jquery')

export default {
  name: 'BootstrapSwitch',
  props: {
    value: {
    },
    label: {
      type: String,
      required: false
    },
    size: {
      type: String,
      default: 'mini'
    },
    onText: {
      type: String,
      default: 'ON'
    },
    offText: {
      type: String,
      default: 'OFF'
    },
    labelText: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      offValue: 0, // 关闭的时候返回的值
      onValue: 1 // 打开的时候返回的值
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let self = this
      let ckbox = $(self.$el).find('input:eq(0)')
      ckbox.bootstrapSwitch(self.switchOption)
      ckbox.bootstrapSwitch('state', self.value === 1)
      ckbox.on('switchChange.bootstrapSwitch', function (event, state) {
        self.$emit('input', state ? self.onValue : self.offValue)
      })
    }
  },
  computed: {
    switchOption: function () {
      return {
        size: this.size,
        onText: this.onText,
        offText: this.offText,
        labelText: this.labelText,
        switchChange: this.onSwitchChange
      }
    }
  }
}
</script>
