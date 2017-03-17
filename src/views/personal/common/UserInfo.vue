<template>
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header">
          <h3 class="box-title">个人信息</h3>
        </div>
        <div class="box-body">
          <UserInfoView v-show="!editMode"></UserInfoView>
          <UserInfoEdit v-show="editMode"></UserInfoEdit>
        </div>
        <div class="box-footer">
          <div class="row">
            <div class="col-md-2 col-md-offset-2">
              <button type="button" class="btn btn-block btn-primary" v-if="!editMode" @click="editMode = true">
                修改
              </button>
              <button type="button" class="btn btn-block btn-primary" v-if="editMode" @click="editMode = false">
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import UserInfoEdit from './UserInfoEdit'
import UserInfoView from './UserInfoView'

export default {
  components: {
    UserInfoEdit,
    UserInfoView
  },
  data: function () {
    return {
      editMode: false
    }
  }
}
</script>
