<template>
  <span class="label" :class="labelClass" v-if="value == 1">低</span>
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
        'label-danger': value === 1,
        'label-warning': value === 2,
        'label-default': value === 3
      }
    }
  }
}
</script>
