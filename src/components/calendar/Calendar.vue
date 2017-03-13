<template>
<div :id="id">
</div>
</template>

<script>
import $ from 'jquery'
require('fullcalendar')

export default {
  name: 'Calendar',
  props: {
    events: {
      type: Array,
      require: false
    }
  },
  mounted () {
    this.init()
  },
  data: function () {
    return {
      id: 'Calendar'
    }
  },
  watch: {
    events: {
      handler: function () {
        this.init()
      },
      deep: true
    }
  },
  methods: {
    init () {
      console.log('init ')
      let self = this
      $('#' + this.id).fullCalendar({
        locale: 'zh-cn',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        buttonText: {
          today: 'today',
          month: 'month',
          week: 'week',
          day: 'day'
        },
        events: self.events,
        editable: false,
        droppable: false
      })
    }
  }
}
</script>
