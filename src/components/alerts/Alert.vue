<template>
  <div class="alert alert-success alert-dismissible" v-show="config.show" style="position: fixed; top: 100px; right: 10px; z-index: 1000; width:300px">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="config.show = false">×</button>
    <i class="icon fa fa-check"></i>
    {{ config.msg }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    // 模态窗属性配置
    config: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  methods: {
    select: function () {

    }
  }
}
</script>
