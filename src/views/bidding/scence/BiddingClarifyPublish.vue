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
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label col-md-2">澄清类型</label>
                    <div class="col-md-7">
                      <div class="controls">
                        <div class="radio inline">
                          <label><input type="radio" :value="1" v-model="type">公开澄清</label>
                        </div>
                        <div class="radio inline">
                          <label><input type="radio" :value="2" v-model="type">选择供应商</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12" v-show="type == 2">
                  <div class="form-group">
                    <label class="control-label col-md-2">供应商</label>
                    <div class="col-md-7">
                      <div class="controls">
                        <div class="checkbox inline">
                          <label>
                            <input type="checkbox">
                            供应商1
                          </label>
                        </div>
                        <div class="checkbox inline">
                          <label>
                            <input type="checkbox">
                            供应商2
                          </label>
                        </div>
                        <div class="checkbox inline">
                          <label>
                            <input type="checkbox">
                            供应商3
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label col-md-2">回应截止时间</label>
                    <div class="col-md-4">
                      <TimePicker/>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="control-label col-md-2">附件</label>
                    <div class="col-md-7">
                      <a>
                        <p class="form-control-static">下载</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label class="control-label col-md-2">说明</label>
                <div class="col-md-9">
                  <Editor :height="100"></Editor>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default " data-dismiss="modal" @click="config.show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="select()">确认</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      type: '1'
    }
  },
  methods: {
  }
}
</script>
