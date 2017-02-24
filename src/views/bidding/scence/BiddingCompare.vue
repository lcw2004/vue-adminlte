<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <div class="box-title">
            开标一览表
          </div>
        </div>
        <div class="col-md-3">
          <div class="control-group pull-right">
            <label class="control-label">标的详情</label>
            <div class="radio inline">
              <label>
                <input type="radio" value="1" v-model="showSubjectInfo">
                是
              </label>
            </div>
            <div class="radio inline">
              <label>
                <input type="radio" value="0" v-model="showSubjectInfo">
                否
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="control-group pull-right">
            <label class="control-label">报价</label>
            <div class="checkbox inline">
              <label>
                <input type="checkbox" value="1" v-model="showPrices">
                含税价
              </label>
            </div>
            <div class="checkbox inline">
              <label>
                <input type="checkbox" value="2" v-model="showPrices">
                剔税价
              </label>
            </div>
            <div class="checkbox inline">
              <label>
                <input type="checkbox" value="3" v-model="showPrices">
                税率
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12" style="overflow:auto;" id="flagDiv">
          <table id="myTable" class="table table-bordered">
            <thead>
              <tr>
                <td rowspan="2">序号</td>
                <td rowspan="2">标的名称</td>

                <template v-if="showSubjectInfo == '1'">
                <td rowspan="2">标的编码</td>
                <td rowspan="2">标的数量</td>
                <td rowspan="2">计量单位</td>
                <td rowspan="2">规格型号</td>
                </template>

                <template v-for="supplier of supplierPricesSorted.suppliers">
                <td :colspan="showPrices.length + 1">{{ supplier.name }}</td>
                </template>
              </tr>
              <tr>
                <template v-for="supplier of supplierPricesSorted.suppliers">
                  <td>最终报价</td>
                  <td v-if="showPriceType('1')">含税价</td>
                  <td v-if="showPriceType('2')">剔税价</td>
                  <td v-if="showPriceType('3')">税率</td>
                </template>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(supplierPrice, index) of supplierPricesSorted.prices">
                <td>{{ index + 1 }}</td>
                <td>{{ supplierPrice.subjectInfo.name }}</td>

                <template v-if="showSubjectInfo == '1'">
                <td>{{ supplierPrice.subjectInfo.code }}</td>
                <td>{{ supplierPrice.subjectInfo.number }}</td>
                <td>{{ supplierPrice.subjectInfo.unit }}</td>
                <td></td>
                </template>

                <template v-for="(value, key, index) of supplierPrice.supplierPrices">
                <td>
                  {{ value.containTax }}
                  <span class="label label-success" v-if="value.sortNum == 1">低</span>
                </td>
                <td v-if="showPriceType('1')">{{ value.containTax }}</td>
                <td v-if="showPriceType('2')">{{ value.notContainTax }}</td>
                <td v-if="showPriceType('3')">{{ value.tax }}</td>
                </template>
              </tr>

              <tr>
                <td></td>
                <td>总金额</td>

                <template v-if="showSubjectInfo == '1'">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </template>

                <template v-for="supplier of supplierPricesSorted.suppliers">
                  <td>{{ totalMoneySorted.get(supplier.id).total }}
                    <SupplierPriceUnit :value="totalMoneySorted.get(supplier.id).sortNum"></SupplierPriceUnit>
                  </td>
                  <td v-if="showPriceType('1')"></td>
                  <td v-if="showPriceType('2')"></td>
                  <td v-if="showPriceType('3')"></td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row" >
        <div class="col-md-5">
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-info btn-sm btn-block" @click="back()">
            返回
          </button>
        </div>
        <div class="col-md-5">
        </div>
      </div>
    </div>
  </div>
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
      showSubjectInfo: 0,
      showPrices: []
    }
  },
  mounted: function () {
  },
  methods: {
    initTable: function () {
      // 样式切换的时候错乱，暂时屏蔽
      let width = $('#flagDiv').width()
      let heigth = $('#flagDiv').height() + 20
      fixTable('myTable', 2, width, heigth)
    },
    showPriceType: function (index) {
      return $.inArray(index, this.showPrices) !== -1
    },
    back: function () {
      console.log(this.$route)
      this.$router.go(-1)
      console.log('go -1 ok')
    }
  },
  computed: {
    supplierPrices: function () {
      return this.$store.state.data.supplierPrice
    },
    supplierPricesSorted: function () {
      let prices = this.supplierPrices
      for (let value of prices.prices) {
        let supplierPrices = value.supplierPrices

        // 排序
        let supplierPricesValues = Object.values(supplierPrices)
        supplierPricesValues.sort(function (a, b) {
          let aTotal = a.containTax
          let bTotal = b.containTax
          if (aTotal < bTotal) return -1
          if (aTotal > bTotal) return 1
          return 0
        })

        // 根据顺序设置排名
        for (let i = 0; i < supplierPricesValues.length; i++) {
          supplierPricesValues[i].sortNum = i + 1
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

        // 计算产品总价，并存到map中
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
      // 对总价进行排名
      let totalMoneyArray = Array.from(totalMoney.values())
      totalMoneyArray.sort(function (a, b) {
        let aTotal = a.total
        let bTotal = b.total
        if (aTotal < bTotal) return -1
        if (aTotal > bTotal) return 1
        return 0
      })

      // 设置名次
      for (let i = 0; i < totalMoneyArray.length; i++) {
        totalMoneyArray[i].sortNum = i + 1
      }
      return totalMoney
    }
  }
}

</script>

<style type="text/css">
td {
  word-break: keep-all;
  white-space:nowrap;
}
</style>
