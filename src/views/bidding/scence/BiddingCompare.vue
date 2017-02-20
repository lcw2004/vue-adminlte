<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              <div style="overflow:auto;" id="flagDiv">
                <table id="myTable" class="table table-bordered" style="width: 4500px">
                  <thead>
                    <tr>
                      <td rowspan="2">委托时间</td>
                      <td rowspan="2">交易代码</td>
                      <td rowspan="2">产品名称</td>
                      <td rowspan="2">委托类型</td>
                      <td rowspan="2">委托买入数量</td>
                      <td rowspan="2">委托卖出数量</td>
                      <td rowspan="2">成交数量</td>
                      <td rowspan="2">成交单价</td>
                      <td rowspan="2">委托买入单号</td>
                      <td rowspan="2">成交单号</td>
                      <td rowspan="2">委托卖出单号</td>
                      <td rowspan="2">成交时间</td>
                      <td rowspan="2">成交序号</td>
                      <td rowspan="2">成交金额</td>
                      <td rowspan="2">交易手续费比例(%)</td>
                      <td rowspan="2">印花税比例(%)</td>
                      <td colspan="11">卖方</td>
                      <td colspan="10">买方</td>
                      <td rowspan="2">实收手续费合计</td>
                      <td rowspan="2">盈余合计</td>
                      <td rowspan="2">经纪会员编号</td>
                      <td rowspan="2">经纪会员名称</td>
                    </tr>
                    <tr>
                      <td>会员编号</td>
                      <td>会员姓名</td>
                      <td>系统应收手续费</td>
                      <td>应收手续费</td>
                      <td>实收手续费</td>
                      <td>盈余手续费</td>
                      <td>应收印花税</td>
                      <td>实收印花税</td>
                      <td>盈余印花税</td>
                      <td>盈余小计</td>
                      <td>IP地址</td>
                      <td>会员编号</td>
                      <td>会员姓名</td>
                      <td>应收手续费</td>
                      <td>实收手续费</td>
                      <td>盈余手续费</td>
                      <td>应收印花税</td>
                      <td>实收印花税</td>
                      <td>盈余印花税</td>
                      <td>盈余小计</td>
                      <td>IP地址</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2017-02-20 10:41:12</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>328</td>
                      <td>282</td>
                      <td>70</td>
                      <td>10.2</td>
                      <td>1814875584720100000</td>
                      <td>5214875584741680000</td>
                      <td>414875583538200000</td>
                      <td>2017-02-20 10:41:14</td>
                      <td>849857</td>
                      <td>714</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>4147443871</td>
                      <td>李俊智</td>
                      <td>2.142</td>
                      <td>2.142</td>
                      <td>2.15</td>
                      <td>0.008</td>
                      <td>0.357</td>
                      <td>0.36</td>
                      <td>0.003</td>
                      <td>0.011</td>
                      <td>192.168.70.6</td>
                      <td>1914760957</td>
                      <td>交易</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>2.15</td>
                      <td>0.011</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:41:12</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>328</td>
                      <td>255</td>
                      <td>255</td>
                      <td>10.2</td>
                      <td>1814875584720100000</td>
                      <td>5514875584734970000</td>
                      <td>414875583482810000</td>
                      <td>2017-02-20 10:41:13</td>
                      <td>849856</td>
                      <td>2601</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>8147426919</td>
                      <td>许逸美</td>
                      <td>7.803</td>
                      <td>7.803</td>
                      <td>7.81</td>
                      <td>0.007</td>
                      <td>1.3005</td>
                      <td>1.31</td>
                      <td>0.0095</td>
                      <td>0.0165</td>
                      <td>192.168.70.6</td>
                      <td>1914760957</td>
                      <td>交易</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>7.81</td>
                      <td>0.0165</td>
                      <td>1147381922</td>
                      <td>达美科技</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:41:12</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>328</td>
                      <td>382</td>
                      <td>3</td>
                      <td>10.12</td>
                      <td>1814875584720100000</td>
                      <td>5914875584729430000</td>
                      <td>214875582566940001</td>
                      <td>2017-02-20 10:41:12</td>
                      <td>849855</td>
                      <td>30.36</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>1147374846</td>
                      <td>大家好</td>
                      <td>0.0911</td>
                      <td>0.0911</td>
                      <td>0.09</td>
                      <td>-0.0011</td>
                      <td>0.0152</td>
                      <td>0.02</td>
                      <td>0.0048</td>
                      <td>0.0037</td>
                      <td>192.168.70.6</td>
                      <td>1914760957</td>
                      <td>交易</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>0.09</td>
                      <td>0.0037</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:41:11</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>302</td>
                      <td>382</td>
                      <td>97</td>
                      <td>10.12</td>
                      <td>1314875584719310000</td>
                      <td>5914875584725780000</td>
                      <td>214875582566940001</td>
                      <td>2017-02-20 10:41:12</td>
                      <td>849854</td>
                      <td>981.64</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>1147374846</td>
                      <td>大家好</td>
                      <td>2.9449</td>
                      <td>2.9449</td>
                      <td>2.94</td>
                      <td>-0.0049</td>
                      <td>0.4908</td>
                      <td>0.49</td>
                      <td>-0.0008</td>
                      <td>-0.0057</td>
                      <td>192.168.70.6</td>
                      <td>2147513913</td>
                      <td>麓谷高新</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>2.94</td>
                      <td>-0.0057</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:41:11</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>302</td>
                      <td>366</td>
                      <td>205</td>
                      <td>10.02</td>
                      <td>1314875584719310000</td>
                      <td>5414875584721380000</td>
                      <td>114875583339300000</td>
                      <td>2017-02-20 10:41:12</td>
                      <td>849853</td>
                      <td>2054.1</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>1147374846</td>
                      <td>大家好</td>
                      <td>6.1623</td>
                      <td>6.1623</td>
                      <td>6.17</td>
                      <td>0.0077</td>
                      <td>1.027</td>
                      <td>1.03</td>
                      <td>0.003</td>
                      <td>0.0107</td>
                      <td>192.168.70.6</td>
                      <td>2147513913</td>
                      <td>麓谷高新</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>6.17</td>
                      <td>0.0107</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:40:44</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>269</td>
                      <td>368</td>
                      <td>198</td>
                      <td>9.96</td>
                      <td>1314875584442200000</td>
                      <td>5814875584677420000</td>
                      <td>314875584668310000</td>
                      <td>2017-02-20 10:41:07</td>
                      <td>849852</td>
                      <td>1972.08</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>1147374846</td>
                      <td>大家好</td>
                      <td>5.9163</td>
                      <td>5.9163</td>
                      <td>5.92</td>
                      <td>0.0037</td>
                      <td>0.9861</td>
                      <td>0.99</td>
                      <td>0.0039</td>
                      <td>0.0076</td>
                      <td>192.168.70.6</td>
                      <td>4147513664</td>
                      <td>褚戈雅</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>5.92</td>
                      <td>0.0076</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:40:42</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>230</td>
                      <td>368</td>
                      <td>170</td>
                      <td>9.96</td>
                      <td>1514875584426610000</td>
                      <td>5814875584669840000</td>
                      <td>314875584668310000</td>
                      <td>2017-02-20 10:41:06</td>
                      <td>849851</td>
                      <td>1693.2</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>1147374846</td>
                      <td>大家好</td>
                      <td>5.0796</td>
                      <td>5.0796</td>
                      <td>5.08</td>
                      <td>0.0004</td>
                      <td>0.8466</td>
                      <td>0.85</td>
                      <td>0.0034</td>
                      <td>0.0038</td>
                      <td>192.168.70.6</td>
                      <td>2147513913</td>
                      <td>麓谷高新</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>5.08</td>
                      <td>0.0038</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:40:44</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>345</td>
                      <td>366</td>
                      <td>161</td>
                      <td>10.02</td>
                      <td>1814875584449200000</td>
                      <td>5114875584659610000</td>
                      <td>114875583339300000</td>
                      <td>2017-02-20 10:41:05</td>
                      <td>849850</td>
                      <td>1613.22</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>1147374846</td>
                      <td>大家好</td>
                      <td>4.8397</td>
                      <td>4.8397</td>
                      <td>4.84</td>
                      <td>0.0003</td>
                      <td>0.8067</td>
                      <td>0.81</td>
                      <td>0.0033</td>
                      <td>0.0036</td>
                      <td>192.168.70.6</td>
                      <td>6914835229</td>
                      <td>何馨香</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>4.84</td>
                      <td>0.0036</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:40:44</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>345</td>
                      <td>368</td>
                      <td>184</td>
                      <td>10.02</td>
                      <td>1814875584449200000</td>
                      <td>5914875584617170000</td>
                      <td>814875583124300000</td>
                      <td>2017-02-20 10:41:01</td>
                      <td>849849</td>
                      <td>1843.68</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>8914763479</td>
                      <td>Like</td>
                      <td>5.531</td>
                      <td>5.531</td>
                      <td>5.53</td>
                      <td>-0.001</td>
                      <td>0.9218</td>
                      <td>0.92</td>
                      <td>-0.0018</td>
                      <td>-0.0028</td>
                      <td>192.168.70.6</td>
                      <td>6914835229</td>
                      <td>何馨香</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>5.53</td>
                      <td>-0.0028</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>

                    <tr>
                      <td>2017-02-20 10:40:46</td>
                      <td>600156</td>
                      <td>CF手游一批</td>
                      <td>普通</td>
                      <td>246</td>
                      <td>368</td>
                      <td>184</td>
                      <td>10.02</td>
                      <td>1714875584469400000</td>
                      <td>5714875584579910000</td>
                      <td>814875583124300000</td>
                      <td>2017-02-20 10:40:57</td>
                      <td>849848</td>
                      <td>1843.68</td>
                      <td>0.3</td>
                      <td>0.05</td>
                      <td>8914763479</td>
                      <td>Like</td>
                      <td>5.5311</td>
                      <td>5.5311</td>
                      <td>5.54</td>
                      <td>0.0089</td>
                      <td>0.9219</td>
                      <td>0.93</td>
                      <td>0.0081</td>
                      <td>0.017</td>
                      <td>192.168.70.6</td>
                      <td>4147513413</td>
                      <td>张小</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>192.168.70.6</td>
                      <td>5.54</td>
                      <td>0.017</td>
                      <td>777777</td>
                      <td>创无限</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <th style="width: 10px">#</th>
                      <th>投标单位</th>
                      <th>投标状态</th>
                      <th>开标状态</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>投标单位1</td>
                      <td><span class="label label-success">已投标</span></td>
                      <td><span class="label label-success">开标成功</span></td>
                      <td>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>投标单位2</td>
                      <td><span class="label label-success">已投标</span></td>
                      <td><span class="label label-warning">未开标</span></td>
                      <td>
                        <a>开标</a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>投标单位3 </td>
                      <td><span class="label label-danger">未投标</span></td>
                      <td><span class="label label-danger">开标失败</span></td>
                      <td>
                        <a>开标</a>
                      </td>
                    </tr>
                  </tbody>
                </table> -->
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
    fixTable('myTable', 3, width, heigth)
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
