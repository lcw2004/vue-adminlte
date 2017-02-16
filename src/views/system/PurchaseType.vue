<template>
  <div>
    PurchaseType
    {{ value }}
    <Tree :element="topElement" v-model="value" select-type="radio"></Tree>
  </div>
</template>

<script>
import Tree from '../../components/tree/Tree'

export default {
  name: 'PurchaseType',
  components: {
    Tree
  },
  data: function () {
    return {
      value: {}
    }
  },
  computed: {
    topElement: function () {
      return this.$store.state.data.area
    }
  }
}
</script>
