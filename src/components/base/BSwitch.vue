<template>
  <div>
    <div class="switch switch-large">
      <input id="inputEmail" type="checkbox" checked :data-size="size"/>
    </div>
  </div>
</template>

<script>
require('bootstrap-switch')
let $ = require('jquery')

export default {
  name: 'BSwitch',
  props: {
    label: {
      type: String,
      required: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  data: function () {
    return {
    }
  },
  mounted: function () {
    $('#inputEmail').bootstrapSwitch()
  }
}
</script>
