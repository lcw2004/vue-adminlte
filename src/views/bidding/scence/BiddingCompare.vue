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
                      <td colspan="4">某某公司一</td>
                      <td colspan="4">某某公司二</td>
                      <td colspan="4">某某公司三</td>
                    </tr>
                    <tr>
                      <td>最终报价</td>
                      <td>含税价</td>
                      <td>剔税价</td>
                      <td>税率</td>

                      <td>最终报价</td>
                      <td>含税价</td>
                      <td>剔税价</td>
                      <td>税率</td>

                      <td>最终报价</td>
                      <td>含税价</td>
                      <td>剔税价</td>
                      <td>税率</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>钢铁</td>
                      <td>001</td>
                      <td>123</td>
                      <td>吨</td>
                      <td></td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>铝材</td>
                      <td>002</td>
                      <td>111</td>
                      <td>吨</td>
                      <td></td>
                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>木材</td>
                      <td>003</td>
                      <td>222</td>
                      <td>吨</td>
                      <td></td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>

                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>17</td>
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
