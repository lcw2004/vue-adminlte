<template>
  <form class="form-horizontal">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label class="control-label col-md-2">供应商全称</label>
          <div class="col-md-4">
            <p class="form-control-static">某某科技有限公司</p>
          </div>
          <div class="col-md-6">
            <p class="help-block">供应商全称必须与公司公章相符，不得含其它字符!</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">公司曾用户名称</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">公司简称</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label required col-md-4">法人姓名</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label required col-md-4">法人身份证号码</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">开户银行</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">银行账户</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">所属地区</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">供货区域</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">通讯地址</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">邮政编码</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label required col-md-4">联系电话</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">公司邮箱</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label required col-md-2">统一社会信用代码</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2">三证合一</label>
      <div class="col-md-4">
        <select class="form-control">
          <option value="1">是</option>
          <option value="2">否</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label required col-md-2">统一社会信用代码</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
    </div>

    <div class="form-group">
      <label class="control-label required col-md-2">组织机构代码证</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
    </div>

    <div class="form-group">
      <label class="control-label required col-md-2">营业执照注册</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
    </div>

    <div class="form-group">
      <label class="control-label required col-md-2">税务登记证</label>
      <div class="col-md-4">
        <input type="text" class="form-control" >
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">单位类型</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">单位性质</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">所属行业</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">注册类型</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">注册资金</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">从业人数</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">企业规模</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">主营业务</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">业绩简介</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">业务联系人</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">性别</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">业务联系人</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">身份证号</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">部门</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">职位</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">性别</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">手机</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">电话</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">部门</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="control-label col-md-4">电子邮件</label>
          <div class="col-md-8">
            <input type="text" class="form-control" >
          </div>
        </div>
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
