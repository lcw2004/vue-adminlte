<template>
<div class="modal" v-show="config.show" style="display: block;">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="config.show = false">
          <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title" v-text="config.title"></h4>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-5 scrollable">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th style="width: 10px"><input type="checkbox"/></th>
                  <th>编码</th>
                  <th>名称</th>
                  <th>数量</th>
                  <th>参考价</th>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>99.00</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-1 text-center">
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-primary btn-xs">全选 <i class="fa fa-fw fa-angle-double-right"></i></button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                &nbsp;
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-primary btn-xs">添加 <i class="fa fa-fw fa-angle-double-right"></i></button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                &nbsp;
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-primary btn-xs"><i class="fa fa-fw fa-angle-double-left"></i> 删除</button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                &nbsp;
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button type="button" class="btn btn-primary btn-xs"><i class="fa fa-fw fa-angle-double-left"></i> 清空</button>
              </div>
            </div>
          </div>
          <div class="col-md-5 scrollable">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th style="width: 10px"><input type="checkbox"/></th>
                  <th>编码</th>
                  <th>名称</th>
                  <th>数量</th>
                  <th>参考价</th>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>99.00</td>
                </tr>
                <tr>
                  <td><input type="checkbox"/></td>
                  <td>001</td>
                  <td>钢铁</td>
                  <td>1000</td>
                  <td>88.05</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default " data-dismiss="modal" @click="config.show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="select()">确认</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.scrollable {
  overflow-y: auto;
  height: 400px;
}
</style>
