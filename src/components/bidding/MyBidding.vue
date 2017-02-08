<template>
  <section class="content">
    <div class="row">
      <TimeRangePicker></TimeRangePicker>
    </div>
    <div class="row">
      <TimePicker></TimePicker>
    </div>
  </section>
</template>

<script>
import TimeRangePicker from '../base/TimeRangePicker'
import TimePicker from '../base/TimePicker'

export default {
  name: 'MyBidding',
  components: {
    TimeRangePicker,
    TimePicker
  }
}
</script>
