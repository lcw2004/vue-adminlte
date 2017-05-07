<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header">
          <SupplierQueryCondition v-model="param"></SupplierQueryCondition>
        </div>

        <div class="box-body">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th style="width: 10px">#</th>
                <th>供应商名称</th>
                <th>注册时间</th>
                <th>联系人</th>
                <th>手机号码</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(obj, index) of page.list">
                <td>{{ index + 1}}</td>
                <td>
                  <router-link :to='"/user/supplier/" + obj.supplierId + "/view"'>{{ obj.name }}</router-link>
                </td>
                <td><span v-text="obj.createTime"></span></td>
                <td>
                  {{ obj.principalUser.name }}
                  <PopoverContainer :title="obj.principalUser.name">
                    <div class="box box-solid">
                      <div class="box-header with-border">
                        <i class="fa fa-text-width"></i>
                        <h3 class="box-title">Text Emphasis</h3>
                      </div>
                      <div class="box-body">
                        <p class="lead">Lead to emphasize importance</p>
                        <p class="text-green">Text green to emphasize success</p>
                        <p class="text-aqua">Text aqua to emphasize info</p>
                        <p class="text-light-blue">Text light blue to emphasize info (2)</p>
                        <p class="text-red">Text red to emphasize danger</p>
                        <p class="text-yellow">Text yellow to emphasize warning</p>
                        <p class="text-muted">Text muted to emphasize general</p>
                      </div>
                    </div>
                  </PopoverContainer>
                </td>
                <td><span v-text="obj.principalUser.userContactInfo.phone"></span></td>
                <td>
                  <span v-if="obj.status == -1">{{ obj.statusCn }}</span>
                  <span v-if="obj.status == 1" class="label label-primary">{{ obj.statusCn }}</span>
                  <span v-if="obj.status == 2" class="label label-success">{{ obj.statusCn }}</span>
                  <span v-if="obj.status == 3" class="label label-warning">{{ obj.statusCn }}</span>
                  <span v-if="obj.status == 4" class="label label-default">{{ obj.statusCn }}</span>
                  <span v-if="obj.status == 5">{{ obj.statusCn }}</span>
                </td>
                <td>
                  <router-link :to='"/user/supplier/" + obj.supplierId + "/form"'>修改</router-link>
                  <a @click="deleteData(obj)">删除</a>
                  <a v-if="obj.status == 4" @click="start(obj)">启用</a>
                  <a v-if="obj.status == 2" @click="stop(obj)">停用</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
          <ol>
            <li>用户有如下几种状态
              <ol>
                <li>1 - 正常（只有该状态的供应商可以参与投标），（修改资料 停用 删除 黑名单）</li>
                <li>2 - 待审核（修改资料 删除）</li>
                <li>3 - 审核驳回（修改资料 删除）</li>
                <li>-1 - 已删除</li>
                <li>-2 - 停用（ 修改资料 启用 删除）</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import PageMixin from '../../../mixins/PageMixin.js'

export default {
  mixins: [PageMixin],
  data: function () {
    return {
      actions: {
        list: { method: 'get', url: '/one/a/rest/user/supplier' },
        delete: { method: 'delete', url: '/one/a/rest/user/supplier{/id}' },
        stop: { method: 'put', url: '/one/a/rest/user/supplier{/id}/stop' },
        start: { method: 'put', url: '/one/a/rest/user/supplier{/id}/start' }
      },
      param: {
      },
      dictTypeList: []
    }
  },
  methods: {
    deleteData (obj) {
      this.$confirm('确认删除吗？', () => {
        this.resource.delete({id: obj.supplierId}).then(function (response) {
          if (response.body.ok) {
            this.query()
            this.$notify.success('删除成功！')
          }
        })
      })
    },
    stop (obj) {
      this.$confirm('确认停用供应商吗？', () => {
        this.resource.stop({id: obj.supplierId}, null).then(function (response) {
          if (response.body.ok) {
            this.query()
            this.$notify.success('停用成功！')
          }
        })
      })
    },
    start (obj) {
      this.$confirm('确认启用供应商吗？', () => {
        this.resource.start({id: obj.supplierId}, null).then(function (response) {
          if (response.body.ok) {
            this.query()
            this.$notify.success('启用成功！')
          }
        })
      })
    }
  },
  watch: {
    'param': {
      handler: function () {
        this.query()
      },
      deep: true
    }
  }
}
</script>

<style>
.one-tip {
  position: absolute;
  z-index: 100;
  width: 400px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 1px 0 6px rgba(0,0,0,.1);
  right: -200px;
  top: 9px;
}
</style>
