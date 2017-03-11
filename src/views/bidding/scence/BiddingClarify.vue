<template>
  <div class="row">
    <div class="col-md-12">
      <BiddingClarifyDetail index="3" status="0"></BiddingClarifyDetail>
      <BiddingClarifyDetail index="2" status="1"></BiddingClarifyDetail>
      <BiddingClarifyDetail index="1" status="1"></BiddingClarifyDetail>

      <div class="row" >
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <button type="button" class="btn btn-primary" @click="config.show = true">
            发布澄清
          </button>
          <button type="button" class="btn btn-primary disabled">
            结束澄清，进入授标
          </button>
          <button type="button" class="btn btn-info" @click="$router.go(-1)">
            返回
          </button>
        </div>
        <div class="col-md-4">
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
                <li>只有所有的澄清都结束了才可以进入授标</li>
                <li>只有当前时间已经过了回应截止时间才可以结束本轮澄清（可以修改回应截止时间提前结束本轮澄清）</li>
                <li>只有所有的澄清都结束了才可以发布新的澄清</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <BiddingClarifyPublish :config="config"></BiddingClarifyPublish>
    </div>
  </div>
</template>

<script>
import BiddingClarifyDetail from './BiddingClarifyDetail'
import BiddingClarifyPublish from './BiddingClarifyPublish'

export default {
  components: {
    BiddingClarifyDetail,
    BiddingClarifyPublish
  },
  data: function () {
    return {
      config: {
        show: true,
        title: '发布澄清'
      }
    }
  }
}
</script>
