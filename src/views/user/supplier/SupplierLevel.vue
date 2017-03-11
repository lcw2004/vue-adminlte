<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header">
          <form class="form-horizontal">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <label class="control-label col-md-4">姓名</label>
                  <div class="col-md-8">
                    <div class="input-group">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label class="control-label col-md-4">等级</label>
                  <div class="col-md-8">
                    <select class="form-control">
                      <option>全部</option>
                      <option>不合格供应商</option>
                      <option>预备供应商</option>
                      <option>合格供应商</option>
                      <option>战略合作供应商</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="box-body">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>供应商名称</th>
                <th>注册时间</th>
                <th>联系人</th>
                <th>等级</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>1</td>
                <td><a>某某有限公司1</a></td>
                <td>2017-01-01</td>
                <td><a>张三</a></td>
                <td>
                  <span class="label label-danger">不合格供应商</span>
                </td>
                <td>
                  <a @click="config.show = true">修改等级</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td><a>某某有限公司2</a></td>
                <td>2017-01-01</td>
                <td><a>王五</a></td>
                <td>
                  <span class="label label-warning">预备供应商</span>
                </td>
                <td>
                  <a @click="config.show = true">修改等级</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td><a>某某有限公司3</a></td>
                <td>2017-01-01</td>
                <td><a>张三</a></td>
                <td>
                  <span class="label label-primary">合格供应商</span>
                </td>
                <td>
                  <a @click="config.show = true">修改等级</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td><a>某某有限公司4</a></td>
                <td>2017-01-01</td>
                <td><a>张三</a></td>
                <td>
                  <span class="label label-success">战略合作供应商</span>
                </td>
                <td>
                  <a @click="config.show = true">修改等级</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <SupplierLevelUpdate :config="config"></SupplierLevelUpdate>
</section>
</template>

<script>
import SupplierLevelUpdate from './SupplierLevelUpdate'

export default {
  components: {
    SupplierLevelUpdate
  },
  data: function () {
    return {
      config: {
        title: '修改供应商等级',
        show: false
      }
    }
  },
  methods: {}
}
</script>
