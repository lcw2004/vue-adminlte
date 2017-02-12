<template>
  <div class="box box-solid">
    <div class="box-header with-border">
      <h3 class="box-title">安徽三联泵业股份有限公司</h3>
    </div>
    <form class="form-horizontal">
      <div class="box-body">

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">标书费</label>
              <div class="col-md-2">
                <div class="controls">
                  <div class="radio inline">
                    <label><input type="radio" value="1">已收</label>
                  </div>
                  <div class="radio inline">
                    <label><input type="radio" value="2">未收</label>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <select class="form-control">
                  <option>现金</option>
                  <option>支票</option>
                  <option>汇票</option>
                </select>
              </div>
              <div class="col-md-2">
                <div class="input-group">
                  <span class="input-group-addon">￥</span>
                  <input type="text" class="form-control" placeholder="金额">
                  <span class="input-group-addon">元</span>
                </div>
              </div>
              <div class="col-md-3">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="备注">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="inputEmail3" class="col-md-2 control-label">投标保证金</label>
              <div class="col-md-2">
                <div class="controls">
                  <div class="radio inline">
                    <label><input type="radio" value="1">已收</label>
                  </div>
                  <div class="radio inline">
                    <label><input type="radio" value="2">未收</label>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <select class="form-control">
                  <option>现金</option>
                  <option>支票</option>
                  <option>汇票</option>
                </select>
              </div>
              <div class="col-md-2">
                <div class="input-group">
                  <span class="input-group-addon">￥</span>
                  <input type="text" class="form-control" placeholder="金额">
                  <span class="input-group-addon">元</span>
                </div>
              </div>
              <div class="col-md-3">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="备注">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import BSwitch from '../../../components/base/BSwitch'

export default {
  name: 'UserBiddingPermissionInfo',
  components: {
    BSwitch
  }
}
</script>
