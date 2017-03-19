<template>
  <span class="label" :class="labelClass">{{value}}</span>
</template>
<script>
export default {
  name: 'SupplierPriceUnit',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    labelClass: function () {
      let value = this.value
      return {
        'label-success': value === 1,
        'label-warning': value === 2,
        'label-default': value === 3
      }
    }
  }
}
</script>
