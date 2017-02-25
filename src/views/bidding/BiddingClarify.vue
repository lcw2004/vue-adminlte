<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <div class="row">
              <div class="col-md-12">
                <form class="form-inline">
                  <div class="col-md-6">
                    <label class="control-label">标题</label>
                    <input type="text" placeholder="标题" class="form-control inline-block">
                  </div>
                  <div class="col-md-6">
                    <button type="button" class="btn btn-info btn-sm pull-right" @click="configOfAdd.show = true">
                      <i class="fa fa-plus"></i>  添加澄清
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="box-body">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>标题</th>
                  <th>发布人</th>
                  <th>发布时间</th>
                  <th>附件</th>
                  <th>阅读次数</th>
                  <th>操作</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><a><router-link to="/bidding/clarify/form">关于某某项目的澄清</router-link></a></td>
                  <td>李四</td>
                  <td>2017-01-16 00:00:00</td>
                  <td>
                    <a><i class="fa fa-paperclip"></i> 附件一（点击下载）</a>
                  </td>
                  <td>5</td>
                  <td>
                    <a>删除</a>
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
              <li>项目有如下几种状态
                <ol>
                  <li>0 - 待提交</li>
                  <li>1 - 已提交审核（提交之后进入审核流程）</li>
                  <li>2 - 审核通过，等待开标（审核通过之后进入发布状态，发布状态可以澄清说明）</li>
                  <li>3 - 开标中（招标主持人签到之后，进入开标现场，将状态改为开标中，其他用户的状态也改为开标中，可以进入开标现场）</li>
                  <li>4 - 开标结束，预售标</li>
                  <li>5 - 授标结束（定了结果，开始发布中标公告，进入中标公示期）</li>
                  <li>6 - 项目归档</li>
                  <li>-1 - 流标</li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <ClarifyAddModal :config="configOfAdd"></ClarifyAddModal>
  </section>
</template>

<script>
import ClarifyAddModal from './clarify/ClarifyAddModal'
import ClarifyInfo from './clarify/ClarifyInfo'

export default {
  name: 'BiddingClarify',
  components: {
    ClarifyAddModal,
    ClarifyInfo
  },
  data () {
    return {
      configOfAdd: {
        show: false,
        title: '添加澄清'
      }
    }
  }
}
</script>
