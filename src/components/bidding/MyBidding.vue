<template>
  <section class="content">
    <div class="row">
      <TimeRangePicker></TimeRangePicker>
    </div>
    <div class="row">
      <TimePicker></TimePicker>
    </div>
    <div class="row">
      <Editor></Editor>
    </div>
  </section>
</template>

<script>
import TimeRangePicker from '../base/TimeRangePicker'
import TimePicker from '../base/TimePicker'
import Editor from '../base/Editor'

export default {
  name: 'MyBidding',
  components: {
    TimeRangePicker,
    TimePicker,
    Editor
  }
}
</script>
