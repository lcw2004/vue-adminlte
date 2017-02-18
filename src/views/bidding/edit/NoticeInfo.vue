<template>
<div class="box-body">
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label class="control-label col-md-3">投标须知模板</label>
        <div class="col-md-7">
          <select class="form-control">
            <option>模板 1</option>
            <option>模板 2</option>
            <option>模板 3</option>
            <option>模板 4</option>
            <option>模板 5</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div class="row" v-for="chapter of notice.chapterList">
    <div class="col-md-12">
      <section>
        <h4 class="page-header">{{ chapter.title }}</h4>
        <Editor :toolbar="[['Format']]" v-model="chapter.content"></Editor>
      </section>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NoticeInfo',
  components: {
  },
  data: function () {
    return {
    }
  },
  computed: {
    notice: function () {
      return this.$store.state.data.notice
    }
  }
}
</script>
