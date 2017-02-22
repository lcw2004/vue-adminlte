<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-body">
          <div class="row">
            <div class="col-md-12" style="overflow:auto;" id="flagDiv">
              <table id="myTable" class="table table-bordered" style="width: 1500px">
                <thead>
                  <tr>
                    <td rowspan="2">序号</td>
                    <td rowspan="2">标的名称</td>
                    <td rowspan="2">标的编码</td>
                    <td rowspan="2">标的数量</td>
                    <td rowspan="2">计量单位</td>
                    <td rowspan="2">规格型号</td>

                    <template v-for="supplier of supplierPricesSorted.suppliers">
                    <td colspan="4">{{ supplier.name }}</td>
                    </template>
                  </tr>
                  <tr>
                    <template v-for="supplier of supplierPricesSorted.suppliers">
                      <td>最终报价</td>
                      <td>含税价</td>
                      <td>剔税价</td>
                      <td>税率</td>
                    </template>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(supplierPrice, index) of supplierPricesSorted.prices">
                    <td>{{ index + 1 }}</td>
                    <td>{{ supplierPrice.subjectInfo.name }}</td>
                    <td>{{ supplierPrice.subjectInfo.code }}</td>
                    <td>{{ supplierPrice.subjectInfo.number }}</td>
                    <td>{{ supplierPrice.subjectInfo.unit }}</td>
                    <td></td>

                    <template v-for="(value, key, index) of supplierPrice.supplierPrices">
                    <td>
                      {{ value.containTax }}<SupplierPriceUnit :value="value.sortNum"></SupplierPriceUnit>
                    </td>
                    <td>{{ value.containTax }}</td>
                    <td>{{ value.notContainTax }}</td>
                    <td>{{ value.tax }}</td>
                    </template>
                  </tr>

                  <tr>
                    <td></td>
                    <td>总金额</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    <template v-for="supplier of supplierPricesSorted.suppliers">
                      <td>{{ totalMoneySorted.get(supplier.id).total }}<span class="label label-default">{{ totalMoneySorted.get(supplier.id).sortNum }}</span></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import $ from 'jquery'
import fixTable from '../../../utils/fixTable'
import SupplierPriceUnit from './SupplierPriceUnit'

export default {
  name: 'BiddingCompare',
  components: {
    SupplierPriceUnit
  },
  data: function () {
    return {
    }
  },
  mounted: function () {
    var width = $('#flagDiv').width()
    var heigth = $('#flagDiv').height() + 20
    fixTable('myTable', 2, width, heigth)
  },
  computed: {
    supplierPrices: function () {
      return this.$store.state.data.supplierPrice
    },
    supplierPricesSorted: function () {
      let prices = this.supplierPrices

      for (let value of prices.prices) {
        let supplierPrices = value.supplierPrices

        let supplierPricesValues = Object.values(supplierPrices)
        supplierPricesValues.sort(function (a, b) {
          let aTotal = a.containTax
          let bTotal = b.containTax
          if (aTotal < bTotal) return -1
          if (aTotal > bTotal) return 1
          return 0
        })
        let index = 1
        for (let price of supplierPricesValues) {
          if (price) {
            price.sortNum = index++
          }
        }
      }
      return prices
    },
    totalMoney: function () {
      let prices = this.supplierPrices.prices
      let suppliers = this.supplierPrices.suppliers

      let totalMoney = new Map()
      for (let value of prices) {
        let number = value.subjectInfo.number

        for (let supplier of suppliers) {
          let supplierId = supplier.id
          let containTax = value.supplierPrices[supplierId].containTax
          let subjectPrice = number * containTax
          let totalMoneyOfThisSupplier = totalMoney.get(supplierId)
          if (!totalMoneyOfThisSupplier) {
            totalMoneyOfThisSupplier = {}
            totalMoneyOfThisSupplier.total = 0
          } else {
            totalMoneyOfThisSupplier = totalMoney.get(supplierId)
          }
          totalMoneyOfThisSupplier.total += subjectPrice
          totalMoney.set(supplierId, totalMoneyOfThisSupplier)
        }
      }
      return totalMoney
    },
    totalMoneySorted: function () {
      let totalMoney = this.totalMoney
      let totalMoneyArray = Array.from(totalMoney.values())

      totalMoneyArray.sort(function (a, b) {
        let aTotal = a.total
        let bTotal = b.total
        if (aTotal < bTotal) return -1
        if (aTotal > bTotal) return 1
        return 0
      })

      let index = 1
      for (let money of totalMoneyArray) {
        money.sortNum = index++
      }
      return totalMoney
    }
  }
}

</script>
