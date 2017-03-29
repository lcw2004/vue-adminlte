<template>
  <li>
    <i :class="iconClass"></i>
    <div class="timeline-item">
      <span class="time" v-if="time"> <i class="fa fa-clock-o"></i> {{ time }}</span>

      <!-- timeline-header -->
      <slot name="header"></slot>

      <!-- timeline-body -->
      <slot name="body"></slot>

      <!-- timeline-footer -->
      <slot name="footer"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TimeItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      default: 'bg-gray'
    },
    time: {
      type: String,
      required: false
    }
  },
  data: function () {
    return {
      showDetail: false
    }
  },
  computed: {
    iconClass: function () {
      return [this.icon, this.iconColor]
    }
  }
}
</script>
