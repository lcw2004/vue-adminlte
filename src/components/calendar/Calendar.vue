<template>
<div></div>
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
    },
    editable: {
      type: Boolean,
      default: false
    },
    droppable: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.init()
  },
  data: function () {
    return {
      id: '123',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: '今天',
        month: '月',
        week: '周',
        day: '日'
      }
    }
  },
  watch: {
    events: {
      handler: function () {
        this.cal.fullCalendar('refetchEvents')
      },
      deep: true
    }
  },
  methods: {
    init () {
      // 初始化
      this.cal = $(this.$el).fullCalendar(this.calendarOption)
    },
    refresh () {
      // 刷新元素
      this.cal.fullCalendar('refetchEvents')
    }
  },
  computed: {
    calendarOption: function () {
      let self = this
      return {
        locale: 'zh-cn',
        header: this.header,
        buttonText: this.buttonText,
        events: function (start, end, timezone, callback) {
          callback(self.events)
        },
        editable: this.editable,
        droppable: this.droppable
      }
    }
  }
}
</script>
