<template>
  <section class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-body">
            <UserBiddingPermissionInfo/>
            <UserBiddingPermissionInfo/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserBiddingPermissionInfo from './permission/UserBiddingPermissionInfo'
export default {
  components: {
    UserBiddingPermissionInfo
  }
}
</script>
