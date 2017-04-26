<template>
<div class="modal" v-show="config.show" style="display: block">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="config.show = false">
          <span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title" v-text="config.title"></h4>
      </div>
      <div class="modal-body modal-scrollable">
        <div class="row">
          <div class="col-md-12 icon"  v-for="icons of iconList">
            <h2>{{ icons.type }}</h2>
            <span class="col-sm-2 icon-span" v-for="icon of icons.iconList" >
              <i :class="['fa', icon]" @click="selected = icon"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="pull-left">
          选中 <span v-if="selected" style="color: red; font-size: 20px"><i :class="['fa', selected]"></i></span>
        </div>
        <button type="button" class="btn btn-default " data-dismiss="modal" @click="config.show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="ok()">确认</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import iconList from './icons'

export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      iconList: iconList,
      selected: ''
    }
  },
  methods: {
    ok () {
      this.config.show = false
      if (this.selected) {
        this.$emit('input', 'fa ' + this.selected)
      }
    }
  }
}
</script>

<style>
.icon {
}
.icon span {
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #ecf0f5;
}
.icon span :hover {
  background-color: red;
}
</style>
