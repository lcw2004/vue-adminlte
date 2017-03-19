<template>
  <div class="row">
    <div class="col-md-12">

      <BiddingQuotes></BiddingQuotes>

      <div class="row" >
        <div class="col-md-5">
        </div>
        <div class="col-md-2">
          <button type="button" class="btn btn-info">
            导出Excel
          </button>
          <button type="button" class="btn btn-info" @click="$router.go(-1)">
            返回
          </button>
        </div>
        <div class="col-md-5">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BiddingQuotes from './BiddingQuotes'

export default {
  components: {
    BiddingQuotes
  }
}
</script>
