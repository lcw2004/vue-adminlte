<template>
<div class='row'>
  <div class='col-md-6'>
    <ul class='pagination'>
      <li>
        <a @click='pageNo = lastPageNo'>上一页</a>
      </li>
      <li v-for='showPageNo of showPageNos' :class="{'active': showPageNo == page.pageNo}">
        <a @click='pageNo = showPageNo'>{{ showPageNo }}</a>
      </li>
      <li>
        <a @click='pageNo = nextPageNo'>下一页</a>
      </li>
    </ul>
  </div>
  <div class='col-md-6'>
    <ul class='pagination pull-right navbar-static-top'>
      <li>
        共 {{ page.count }} 条，每页
        <div class='btn-group dropup'>
          <button class='btn btn-default btn-sm dropdown-toggle' type='button' data-toggle='dropdown'>{{ pageSize }}<span class='caret'></span></button>
          <ul class='dropdown-menu' role='menu'>
            <li><a @click='pageSize = 10'>10</a></li>
            <li><a @click='pageSize = 25'>25</a></li>
            <li><a @click='pageSize = 50'>50</a></li>
            <li><a @click='pageSize = 100'>100</a></li>
          </ul>
        </div>
        条
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      offset: 3
    }
  },
  computed: {
    pageNo: {
      get: function () {
        let pageNo = 1
        if (this.page) {
          pageNo = this.page.pageNo
        }
        return pageNo
      },
      set: function (newValue) {
        this.$emit('page-no', newValue)
      }
    },
    pageSize: {
      get: function () {
        let pageSize = 1
        if (this.page) {
          pageSize = this.page.pageSize
        }
        return pageSize
      },
      set: function (newValue) {
        this.$emit('page-size', newValue)
      }
    },
    lastPageNo: function () {
      // 上一页
      if (this.page.pageNo === 1) {
        return 1
      } else {
        return this.page.pageNo - 1
      }
    },
    nextPageNo: function () {
      // 下一页
      if (this.page.pageNo < this.page.pageCount) {
        return this.page.pageNo + 1
      } else {
        return this.page.pageCount
      }
    },
    showPageNos: function () {
      var from = this.page.pageNo - this.offset
      if (from < 1) {
        from = 1
      }

      var to = from + (this.offset * 2)
      if (to >= this.page.pageCount) {
        to = this.page.pageCount
      }

      var showPageNos = []
      for (var i = from; i <= to; i++) {
        showPageNos.push(i)
      }
      return showPageNos
    }
  }
}
</script>
