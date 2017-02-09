<template>
  <section class="content">
    <div class="row">
      <TimeRangePicker></TimeRangePicker>
    </div>
    <div class="row">
      <TimePicker></TimePicker>
    </div>
    <div class="row">
      <Ckeditor v-model="content"></Ckeditor>
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
