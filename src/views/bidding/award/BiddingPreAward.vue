<template>
  <section class="content" :id="id">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">某某招标项目（ZB201701150003）</h3>
            <div class="box-tools pull-right">
              <FullScreenBtn :id="id"></FullScreenBtn>
            </div>
          </div>

          <div class="box-body">
            <CompareDetail></CompareDetail>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CompareDetail from '../scence/CompareDetail'

export default {
  name: 'BiddingPreAward',
  components: {
    CompareDetail
  },
  data () {
    return {
      id: Math.random() + ''
    }
  }
}
</script>
