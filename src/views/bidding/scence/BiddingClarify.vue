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
          <button type="button" class="btn btn-primary" @click="$router.go(-1)">
            结束澄清，进入授标
          </button>
          <button type="button" class="btn btn-info" @click="$router.go(-1)">
            返回
          </button>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BiddingClarifyDetail from './BiddingClarifyDetail'

export default {
  components: {
    BiddingClarifyDetail
  }
}
</script>
