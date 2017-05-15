<template>
  <div class="row">
    <div class="col-md-12">
      <div class="pull-right" style="margin-bottom: 10px;">
        <button type="button" class="btn btn-primary" @click="addQualification">
          添加资质文件
        </button>
      </div>
    </div>

    <div class="col-md-12">
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <th style="width: 10px">#</th>
            <th>资质类型</th>
            <th>颁发机构</th>
            <th>颁发日期</th>
            <th>有效日期</th>
            <th>影印件</th>
            <th>备注</th>
            <th>操作</th>
          </tr>
          <tr v-for="(q, index) of supplier.qualificationList">
            <td>{{ index + 1}}</td>
            <td>{{ q.type.qualificationName }}</td>
            <td>{{ q.issueAgency }}</td>
            <td>{{ q.issueDate }}</td>
            <td>{{ q.invalidDate }}</td>
            <td>
              <a>查看</a>
            </td>
            <td>{{ q.remark }}</td>
            <td>
              <a @click="q.editable = true">编辑</a>
              <a @click="deleteQualification(index)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    supplier: {}
  },
  data: function () {
    return {
      actions: {
        getQualificationType: { method: 'get', url: '/one/a/rest/qualificationType/supplier' }
      },
      qualificationTypeList: []
    }
  },
  mounted: function () {
    this.resource = this.$resource(null, {}, this.actions)
    this.loadQualificationType()
  },
  methods: {
    loadQualificationType () {
      this.resource.getQualificationType().then(function (response) {
        var result = response.body
        if (result.ok && result.data) {
          this.qualificationTypeList = result.data
        }
      })
    },
    addQualification () {
      let q = {
        type: {},
        issueAgency: '',
        issueDate: '',
        invalidDate: '',
        remark: '',
        fileId: '',
        editable: true
      }
      this.supplier.qualificationList.push(q)
    },
    deleteQualification (index) {
      this.supplier.qualificationList.splice(index, 1)
    }
  }
}
</script>
