<template>
  <select class="form-control" v-model="dictValue">
		<option v-for="dict of dictList" :value="dict.value">{{ dict.label }}</option>
  </select>
</template>

<script>
export default {
  name: 'DictSelector',
  props: {
    type: {
      type: String,
      required: true
    },
    value: {}
  },
  data: function () {
    return {
    }
  },
  methods: {
  },
  computed: {
    dictMap: function () {
      return this.$store.state.system.dictMap
    },
    dictList: function () {
      return this.dictMap[this.type]
    },
    dictValue: {
      get: function () {
        return this.value
      },
      set: function (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
