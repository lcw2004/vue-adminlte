<template>
<div>
  <div class="row">
    <div class="col-md-6">
      <div class="box-title">
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
              <td>{{ value.containTax }}<span class="label label-success" v-if="value.sortNum == 1">低</span></td>
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
      </table>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import fixTable from '../../../utils/fixTable'
import SupplierPriceUnit from './SupplierPriceUnit'
import { sortTotalMoney, sortSupplierPrices, totalMoney } from './supplier'

export default {
  name: 'CompareDetail',
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
    }
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

<style type="text/css">
td {
  word-break: keep-all;
  white-space:nowrap;
}
</style>
