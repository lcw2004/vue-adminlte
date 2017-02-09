<template>
  <textarea style="width:800px" rows="5" name="editor1" id="editor1"></textarea>
</template>

<script>
window.CKEDITOR_BASEPATH = 'node_modules/ckeditor/'
import $ from 'jquery'
require('ckeditor')

export default {
  name: 'Editor',
  props: ['value'],
  beforeCreate: function () {
    $('#editor1').ckeditor()
  }
}
</script>
