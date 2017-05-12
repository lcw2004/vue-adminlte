<template>
  <form class="form-horizontal">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="col-md-3 control-label">单位名称</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.name }}
              <span v-if="obj.status == -1">{{ obj.statusCn }}</span>
              <span v-if="obj.status == 1" class="label label-primary">{{ obj.statusCn }}</span>
              <span v-if="obj.status == 2" class="label label-success">{{ obj.statusCn }}</span>
              <span v-if="obj.status == 3" class="label label-warning">{{ obj.statusCn }}</span>
              <span v-if="obj.status == 4" class="label label-default">{{ obj.statusCn }}</span>
              <span v-if="obj.status == 5">{{ obj.statusCn }}</span>
            </p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">单位简称</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.shortName }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">曾用名称</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.usedName }}</p>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label">公司法人姓名</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.legalPersonName }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">公司法人身份证</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.legalPersonNumber }}</p>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-3 control-label">开户银行名称</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.bankName }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">开户银行账号</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.bankAccount }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-group">
          <label class="col-md-3 control-label">所属地区</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.areaId }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">单位地址</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.officeAddress }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">邮编</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.zipCode }}</p>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">供货区域</label>
          <div class="col-md-9">
            <p class="form-control-static">{{ obj.supplyArea }}</p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
}
</script>
