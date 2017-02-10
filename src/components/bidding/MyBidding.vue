<template>
  <section class="content">
    <div class="row">
      <TimeRangePicker></TimeRangePicker>
    </div>
    <div class="row">
      <Editor v-model="content" :height="'300px'" :toolbar="[['Format']]"></Editor>
    </div>
    <div class="row">
     <InlineEditor v-model="content" ></InlineEditor>
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
import InlineEditor from '../base/InlineEditor'
import Ckeditor from '../base/ckeditor.vue'

export default {
  name: 'MyBidding',
  components: {
    TimeRangePicker,
    TimePicker,
    Editor,
    InlineEditor,
    Ckeditor
  },
  data: function () {
    return {
      content: '123123123'
    }
  }
}
</script>
