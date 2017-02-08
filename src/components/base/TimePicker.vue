<template>
  <div>
      <input type="text" name="daterange" value="01/01/2015 - 01/31/2015" />
  </div>
</template>

<script>
let $ = require('jquery')

export default {
  name: 'TimePicker',
  mounted: function () {
    console.log($('input[name="daterange"]'))
    $('input[name="daterange"]').daterangepicker()
  }
}
</script>
