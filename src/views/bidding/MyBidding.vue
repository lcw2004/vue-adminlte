<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <div class="box-header">
          <form class="form-inline">
            <div class="col-md-3"><label class="control-label">名称</label> <input type="text" placeholder="角色名称" class="form-control inline-block"></div>
          </form>
        </div>

        <div class="box-body">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th style="width: 10px">#</th>
                <th>项目编号</th>
                <th>项目名称</th>
                <th>项目类型</th>
                <th>发布日期</th>
                <th>状态</th>
                <th>审核状态</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>1</td>
                <td><a>ZB201701160009</a></td>
                <td>测试1</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>待提交</td>
                <td><!--<span class="label label-success">审核通过</span>--></td>
                <td>
                  <a><router-link to='/add-bidding'>编辑</router-link></a>
                  <a>删除</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td><a>ZB201701160009</a></td>
                <td>测试2</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>已提交</td>
                <td><span class="label label-warning">审核驳回</span>（悬浮驳回原因）</td>
                <td>
                  <a>删除</a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td><a>ZB201701160009</a></td>
                <td>测试3</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>已发布</td>
                <td></td>
                <td>
                  <a>删除</a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td><a>ZB201701160009</a></td>
                <td>测试4</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>开标中</td>
                <td></td>
                <td>
                  <a>删除</a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td><a>ZB201701160009</a></td>
                <td>测试5</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>开标结束，预售标</td>
                <td><span class="label label-success">审核通过</span></td>
                <td>
                  <a>删除</a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td><a>ZB201701160009</a></td>
                <td>测试5</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>授标结束，待归档</td>
                <td></td>
                <td>
                  <a>删除</a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td><a>ZB201701160009</a></td>
                <td>测试5</td>
                <td>邀请招标</td>
                <td>2017-01-16</td>
                <td>已归档</td>
                <td></td>
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
</section>
</template>

<script>
import TimeRangePicker from '../../components/base/TimeRangePicker'
import TimePicker from '../../components/base/TimePicker'
import Editor from '../../components/base/Editor'
import InlineEditor from '../../components/base/InlineEditor'

export default {
  name: 'MyBidding',
  components: {
    TimeRangePicker,
    TimePicker,
    Editor,
    InlineEditor
  },
  data: function () {
    return {
      content: '123123123'
    }
  }
}
</script>
