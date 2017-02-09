<template>
  <section class="content">
    <div class="row">
      <TimeRangePicker></TimeRangePicker>
    </div>
    <div class="row">
      <Editor v-model="content" ></Editor>
    </div>
    <div class="row">
     <!-- <ckeditor v-model="content" id="editor" :height="'300px'" :toolbar="[['Format']]"></ckeditor> -->
    </div>
    <div class="row">
      {{ content }}
    </div>
  </section>
</template>

<script>
import TimeRangePicker from '../base/TimeRangePicker'
import TimePicker from '../base/TimePicker'
import Editor from '../base/Editor'
import Ckeditor from '../base/ckeditor.vue'

export default {
  name: 'MyBidding',
  components: {
    TimeRangePicker,
    TimePicker,
    Editor,
    Ckeditor
  },
  data: function () {
    return {
      content: '123123123'
    }
  }
}
</script>
