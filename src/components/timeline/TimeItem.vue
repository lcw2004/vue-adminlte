<template>
  <li>
    <i :class="iconClass"></i>
    <div class="timeline-item">
      <span class="time"><i class="fa fa-clock-o"></i> {{ time }}</span>
      <h3 class="timeline-header">{{ title }}</h3>

      <!-- timeline-body -->
      <slot></slot>

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
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    iconClass: function () {
      return [this.icon, this.iconColor]
    }
  }
}
</script>
