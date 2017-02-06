<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-primary">
          <div class="box-header with-border">
            <div class="col-md-12">
              <div class="puastep_tab">
                <a class="puastep_tab_now">1.基本信息</a>
                <span>&gt;</span>
                <a>2.标的信息</a>
                <span>&gt;</span>
                <a>3.投标单位</a>
                <span>&gt;</span>
                <a>4.招标概要</a>
                <span>&gt;</span>
                <a>5.投标须知</a>
                <span>&gt;</span>
                <a>6.标书文件</a>
                <span>&gt;</span>
                <a>7.投标文件</a>
              </div>
            </div>
          </div>
          <form class="form-horizontal">
            <BaseInfo/>

            <div class="box-footer">
              <div class="col-md-4 col-sm-0"></div>
              <div class="col-md-2 col-sm-2"><button type="submit" class="btn btn-block btn-default">上一步</button></div>
              <div class="col-md-2 col-sm-2"><button type="submit" class="btn btn-block btn-primary">下一步</button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseInfo from './edit/BaseInfo'

export default {
  name: 'AddBidding',
  components: {
    BaseInfo
  }
}
</script>

<style>
.puastep_tab {
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
}
.puastep_tab:after {
    content: "";
    display: table;
    clear: both;
}
.puastep_tab a {
    float: left;
    font-size: 14px;
    color: #9c9c9c;
    cursor: default;
    padding: 0 20px 15px 20px;
}
.puastep_tab .puastep_tab_now {
    color: #3c8dbc;
    border-bottom: 3px solid #3c8dbc;
}
.puastep_tab span {
    float: left;
    font-size: 14px;
    color: #9c9c9c;
    cursor: default;
}
.puastep_box {
    margin: 20px 0 0 0;
}
</style>
