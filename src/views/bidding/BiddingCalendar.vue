<template>
<section class="content">
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">
        <button type="button" class="btn btn-info" @click="test">
          测试
        </button>
      </h3>
    </div>
    <div class="box-body">
      <div class="row">
        <div class="col-md-12">
          <Calendar :events="events"></Calendar>
        </div>
      </div>
    </div>
    <div class="box-footer">
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: {},
  data: function () {
    return {
      events: []
    }
  },
  mounted () {
    this.loadEvents()
  },
  methods: {
    loadEvents () {
      let date = new Date()
      let d = date.getDate()
      let m = date.getMonth()
      let y = date.getFullYear()

      let events = [
        {
          title: 'All Day Event 1',
          start: new Date(y, m, 1),
          backgroundColor: '#f56954', // red
          borderColor: '#f56954' // red
        },
        {
          title: 'Long Event',
          start: new Date(y, m, d - 5),
          end: new Date(y, m, d - 2),
          backgroundColor: '#f39c12', // yellow
          borderColor: '#f39c12' // yellow
        },
        {
          title: 'Meeting',
          start: new Date(y, m, d, 10, 30),
          allDay: false,
          backgroundColor: '#0073b7', // Blue
          borderColor: '#0073b7' // Blue
        },
        {
          title: 'Lunch',
          start: new Date(y, m, d, 12, 0),
          end: new Date(y, m, d, 14, 0),
          allDay: false,
          backgroundColor: '#00c0ef', // Info (aqua)
          borderColor: '#00c0ef' // Info (aqua)
        },
        {
          title: 'Birthday Party',
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          backgroundColor: '#00a65a', // Success (green)
          borderColor: '#00a65a' // Success (green)
        },
        {
          title: 'Click for Google',
          start: new Date(y, m, 28),
          end: new Date(y, m, 29),
          url: 'http://google.com/',
          backgroundColor: '#3c8dbc', // Primary (light-blue)
          borderColor: '#3c8dbc' // Primary (light-blue)
        }
      ]

      this.events = events
    },
    test () {
      let length = this.events.length
      let date = new Date()
      let d = date.getDate()
      let m = date.getMonth()
      let y = date.getFullYear()
      let randomEvent = {
        title: 'Birthday Party',
        start: new Date(y, m, d + length, 19, 0),
        end: new Date(y, m, d + length, 22, 30),
        allDay: false,
        backgroundColor: '#00a65a', // Success (green)
        borderColor: '#00a65a' // Success (green)
      }
      this.events.push(randomEvent)
    }
  }
}
</script>
