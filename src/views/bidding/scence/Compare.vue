<template>
  <div class="row">
    <div class="col-md-12">

      <CompareDetail></CompareDetail>

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
import CompareDetail from './CompareDetail'

export default {
  name: 'Compare',
  components: {
    CompareDetail
  }
}
</script>
