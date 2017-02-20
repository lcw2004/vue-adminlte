<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              <div style="overflow:auto;" id="flagDiv">
                <table id="myTable" class="table table-bordered" style="width: 1500px">
                  <thead>
                    <tr>
                      <td rowspan="2">序号</td>
                      <td rowspan="2">标的名称</td>
                      <td rowspan="2">标的编码</td>
                      <td rowspan="2">标的数量</td>
                      <td rowspan="2">计量单位</td>
                      <td rowspan="2">规格型号</td>

                      <template v-for="supplier of supplierPrices.suppliers">
                      <td colspan="4">{{ supplier.name }}</td>
                      </template>
                    </tr>
                    <tr>
                      <template v-for="supplier of supplierPrices.suppliers">
                        <td>最终报价</td>
                        <td>含税价</td>
                        <td>剔税价</td>
                        <td>税率</td>
                      </template>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(supplierPrice, index) of supplierPrices.prices">
                      <td>{{ index + 1 }}</td>
                      <td>{{ supplierPrice.subjectInfo.name }}</td>
                      <td>{{ supplierPrice.subjectInfo.code }}</td>
                      <td>{{ supplierPrice.subjectInfo.number }}</td>
                      <td>{{ supplierPrice.subjectInfo.unit }}</td>
                      <td></td>

                      <template v-for="(value, key, index) of supplierPrice.supplierPrices">
                      <td>{{ value.containTax }}</td>
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

                      <td>1282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>2282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>3282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default {
  name: 'BiddingCompare',
  components: {},
  data: function () {
    return {}
  },
  mounted: function () {
    var width = $('#flagDiv').width()
    var heigth = $('#flagDiv').height() + 20
    fixTable('myTable', 2, width, heigth)
  },
  computed: {
    supplierPrices: function () {
      return this.$store.state.data.supplierPrice
    }

  }
}

function fixTable (tableId, fixColumnNumber, width, height) {
  // 查找_tableLayout，如果没有，则添加
  var tableLayout = $('#' + tableId + '_tableLayout')
  if (tableLayout.length !== 0) {
    tableLayout.before($('#' + tableId))
    tableLayout.empty()
  } else {
    $('#' + tableId).after('<div id="' + tableId + '_tableLayout" style="overflow:hidden;height:' + height + 'px; width:' + width + 'px;"></div>')
  }
  $('<div id="' + tableId + '_tableFix"></div>' + '<div id="' + tableId + '_tableHead"></div>' + '<div id="' + tableId + '_tableColumn"></div>' + '<div id="' + tableId + '_tableData"></div>').appendTo('#' + tableId + '_tableLayout')

  // --------------
  // 旧table
  var oldtable = $('#' + tableId)

  var tableFixClone = oldtable.clone(true)
  tableFixClone.attr('id', tableId + '_tableFixClone')
  var tableFix = $('#' + tableId + '_tableFix')
  tableFix.append(tableFixClone)

  var tableHeadClone = oldtable.clone(true)
  tableHeadClone.attr('id', tableId + '_tableHeadClone')
  var tableHead = $('#' + tableId + '_tableHead')
  tableHead.append(tableHeadClone)

  var tableColumnClone = oldtable.clone(true)
  tableColumnClone.attr('id', tableId + '_tableColumnClone')
  var tableColumn = $('#' + tableId + '_tableColumn')
  tableColumn.append(tableColumnClone)
  var tableData = $('#' + tableId + '_tableData')
  tableData.append(oldtable)
  $('#' + tableId + '_tableLayout table').each(function () {
    $(this).css('margin', '0')
  })
  // --------------

  // 计算表格固定部分的宽度和高度
  var headHeight = $('#' + tableId + '_tableHead thead').height() + 2
  tableHead.css('height', headHeight)
  tableFix.css('height', headHeight)
  var columnsWidth = 0
  $('#' + tableId + '_tableColumn tr:last td:lt(' + fixColumnNumber + ')').each(function () {
    columnsWidth += $(this).outerWidth(true)
  })

  tableColumn.css('width', columnsWidth)
  tableFix.css('width', columnsWidth)
  tableData.scroll(function () {
    tableHead.scrollLeft(tableData.scrollLeft())
    tableColumn.scrollTop(tableData.scrollTop())
  })

  tableFix.css({
    'overflow': 'hidden',
    'position': 'relative',
    'z-index': '50',
    'background-color': '#f9f9f9'
  })
  tableHead.css({
    'overflow': 'hidden',
    'width': width - 17,
    'position': 'relative',
    'z-index': '45',
    'background-color': '#ffffff'
  })
  tableColumn.css({
    'overflow': 'hidden',
    'height': height - 17,
    'position': 'relative',
    'z-index': '40',
    'background-color': '#f9f9f9'
  })
  tableData.css({
    'overflow-x': 'scroll',
    'overflow-y': 'hidden',
    'width': width,
    'height': height,
    'position': 'relative',
    'z-index': '35'
  })

  if (tableHead.width() > $('#' + tableId + '_tableFix table').width()) {
    tableHead.css('width', $('#' + tableId + '_tableFix table').width())
    tableData.css('width', $('#' + tableId + '_tableFix table').width() + 17)
  }
  if (tableColumn.height() > $('#' + tableId + '_tableColumn table').height()) {
    tableColumn.css('height', $('#' + tableId + '_tableColumn table').height())
    tableData.css('height', $('#' + tableId + '_tableColumn table').height() + 17)
  }

  tableFix.offset($('#' + tableId + '_tableLayout').offset())
  tableHead.offset($('#' + tableId + '_tableLayout').offset())
  tableColumn.offset($('#' + tableId + '_tableLayout').offset())
  tableData.offset($('#' + tableId + '_tableLayout').offset())
}
</script>
