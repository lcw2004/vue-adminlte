<template>
  <section class="content">
    <div class="row">
      <TimeRangePicker></TimeRangePicker>
    </div>
    <div class="row">
      <Editor v-model="content" :height="'300px'" :toolbar="[['Format']]"></Editor>
    </div>
    <div class="row">
      <!-- <InlineEditor v-model="content" ></InlineEditor> -->
    </div>
    <div class="row">
      {{ content }}
    </div>
  </section>
</template>

<script>
import TimeRangePicker from '../../components/base/TimeRangePicker'
import TimePicker from '../../components/base/TimePicker'
import Editor from '../../components/base/Editor'
import InlineEditor from '../../components/base/InlineEditor'

export default {
  name: 'MyBidding',
  components: {
    TimeRangePicker,
    TimePicker,
    Editor,
    InlineEditor
  },
  data: function () {
    return {
      content: '123123123'
    }
  }
}
</script>
