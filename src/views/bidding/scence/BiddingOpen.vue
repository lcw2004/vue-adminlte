<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row" >
        <div class="col-md-12">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>投标单位</th>
                <th>投标时间</th>
                <th>投标状态</th>
                <th>开标状态</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>1</td>
                <td>投标单位1</td>
                <td>2017-01-01 11:11:11</td>
                <td><span class="label label-success">已投标</span></td>
                <td><span class="label label-success">开标成功</span></td>
                <td>
                  <a>废标</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>投标单位2</td>
                <td>2017-01-01 11:11:11</td>
                <td><span class="label label-success">已投标</span></td>
                <td><span class="label label-warning">未开标</span></td>
                <td>
                  <a>废标</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>投标单位3 </td>
                <td></td>
                <td><span class="label label-danger">未投标</span></td>
                <td><span class="label label-danger">开标失败</span></td>
                <td>
                  <a>废标</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <button type="button" class="btn btn-info">开标</button>
          <router-link to='/bidding/scene/compare' tag='button' class="btn btn-info">开标一览表</router-link>
        </div>
        <div class="col-md-4">
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="box box-solid">
            <div class="box-header with-border">
              <i class="fa fa-text-width"></i>
              <h3 class="box-title">备注</h3>
            </div>
            <div class="box-body">
              <p class="text-muted">点击开标之后才出现"废标"、"开标一览表"按钮</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BiddingOpen',
  components: {
  },
  data: function () {
    return {
    }
  }
}
</script>
