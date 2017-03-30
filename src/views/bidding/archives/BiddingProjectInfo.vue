<template>
<form class="form-horizontal">
  <h4 class="page-header">项目基本信息</h4>
  <div class="row">
    <div class="col-md-6">
      <FormGroup label="采购类别">
        <FormControlStatic>原材料</FormControlStatic>
      </FormGroup>
      <FormGroup label="项目编号">
        <FormControlStatic>1234567890</FormControlStatic>
      </FormGroup>
      <FormGroup label="项目名称">
        <FormControlStatic>什么什么招标项目</FormControlStatic>
      </FormGroup>
      <FormGroup label="采购部门">
        <FormControlStatic>某某采购部</FormControlStatic>
      </FormGroup>
      <FormGroup label="报名联系人">
        <FormControlStatic>张三</FormControlStatic>
      </FormGroup>
    </div>

    <div class="col-md-6">
      <FormGroup label="项目类型">
        <FormControlStatic>邀请招标</FormControlStatic>
      </FormGroup>
      <FormGroup label="决标方式">
        <FormControlStatic>专家决标</FormControlStatic>
      </FormGroup>
      <FormGroup label="执行策略">
        <FormControlStatic>网上招标</FormControlStatic>
      </FormGroup>
      <FormGroup label="是否唱标">
        <FormControlStatic>否</FormControlStatic>
      </FormGroup>
      <FormGroup label="报价类型">
        <FormControlStatic>含税价</FormControlStatic>
      </FormGroup>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <FormGroup label="投标资格要求" width="2">
        <FormControlStatic>无</FormControlStatic>
      </FormGroup>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <FormGroup label="项目概况" width="2">
        <FormControlStatic>无</FormControlStatic>
      </FormGroup>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <FormGroup label="备注" width="2">
        <FormControlStatic>无</FormControlStatic>
      </FormGroup>
    </div>
  </div>

  <h4 class="page-header">招标概要</h4>
  <div class="row">
    <div class="col-md-6">
      <FormGroup label="正式发布时间">
        <FormControlStatic>2017-01-01 12:00:00</FormControlStatic>
      </FormGroup>
      <FormGroup label="投标截止时间">
        <FormControlStatic>2017-01-03 12:00:00</FormControlStatic>
      </FormGroup>
      <FormGroup label="标书售价">
        <FormControlStatic>￥ 300 元</FormControlStatic>
      </FormGroup>
    </div>
    <div class="col-md-6">
      <FormGroup label="购买标书截止时间">
        <FormControlStatic>2017-01-02 12:00:00</FormControlStatic>
      </FormGroup>
      <FormGroup label="开标时间">
        <FormControlStatic>2017-01-04 12:00:00 - 2017-01-05 12:00:00</FormControlStatic>
      </FormGroup>
      <FormGroup label="投标保证金">
        <FormControlStatic>￥ 0 元</FormControlStatic>
      </FormGroup>
    </div>
  </div>
</form>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
