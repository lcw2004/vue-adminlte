<template>
<div>
  
</div>
</template>

<script>
import { sortTotalMoney, sortSupplierPrices, totalMoney } from '../scence/supplier'

export default {
  name: 'ChooseSupplier',
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
  },
  computed: {
    supplierPrices: function () {
      return this.$store.state.data.supplierPrice
    },
    supplierPricesSorted: function () {
      return sortSupplierPrices(this.supplierPrices)
    },
    totalMoney: function () {
      return totalMoney(this.supplierPrices)
    },
    totalMoneySorted: function () {
      return sortTotalMoney(this.totalMoney)
    }
  }
}
</script>
