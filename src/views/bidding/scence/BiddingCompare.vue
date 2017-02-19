<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-body">
            <div class="row" >
              <div class="col-md-12">
                <table class="table table-bordered">
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
export default {
  name: 'BiddingCompare',
  components: {
  },
  data: function () {
    return {
    }
  }
}
</script>
