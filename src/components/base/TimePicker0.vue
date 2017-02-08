<template>
  <div id="reportrange" class="input-group">
    <input type="text" class="form-control" :id="id">
    <span class="input-group-addon"><i class="fa fa-calendar"></i></span>
  </div>
</template>

<script>
import $ from 'jquery'
import 'moment'
import 'eonasdan-bootstrap-datetimepicker'

export default {
  name: 'TimePicker',
  data: function () {
    return {
      id: new Date().getTime()
    }
  },
  mounted: function () {
    // $(this.$el).datetimepicker()
    this.picker = $('#' + this.id)
    this.picker.datetimepicker()
  }
}
</script>
