<template>
<div>
  <form class="form-horizontal query">
    <div class="row">
      <div class="col-md-4">
        <label class="control-label col-md-4">供应商</label>
        <div class="col-md-8">
          <input type=" text" class="form-control" placeholder="公司名/简称/曾用名称">
        </div>
      </div>
      <div class="col-md-8">
        <div class="pull-right">
          <a @click="isShow = true" v-if="!isShow">
            <p class="form-control-static">高级查询 <i class="fa fa-fw fa-chevron-down"></i></p>
          </a>
          <a @click="isShow = false" v-if="isShow">
            <p class="form-control-static">基本查询 <i class="fa fa-fw fa-chevron-up"></i></p>
          </a>
        </div>
      </div>
    </div>

    <div class="row" v-if="isShow">
      <div class="col-md-4">
        <label class="control-label col-md-4">法人</label>
        <div class="col-md-8">
          <input type=" text" class="form-control" placeholder="姓名/身份证">
        </div>
      </div>
      <div class="col-md-4">
        <label class="control-label col-md-4">联系人</label>
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="姓名/身份证/登录名">
        </div>
      </div>
      <div class="col-md-4">
        <label class="control-label col-md-4">信用代码</label>
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="统一社会信用代码">
        </div>
      </div>

      <div class="col-md-4">
        <label class="control-label col-md-4">状态</label>
        <div class="col-md-8">
          <select class="form-control inline-block input-sm">
            <option>全部</option>
            <option></option>
          </select>
        </div>
      </div>

      <div class="col-md-4">
        <label class="control-label col-md-4">注册时间</label>
        <div class="col-md-8">
          <TimeRangePicker></TimeRangePicker>
        </div>
      </div>

      <div class="col-md-4">
        <label class="control-label col-md-4">公司地址</label>
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="公司地址">
        </div>
      </div>

      <div class="col-md-4">
        <label class="control-label col-md-4">供货区域</label>
        <div class="col-md-8">
          <input type="text" class="form-control" placeholder="供货区域">
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'SupplierQueryCondition',
  components: {
  },
  data: function () {
    return {
      isShow: false
    }
  },
  methods: {
  }
}
</script>
