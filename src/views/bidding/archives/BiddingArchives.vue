<template>
<section class="content">
  <div class="nav-tabs-custom">
    <ul class="nav nav-tabs">
      <template v-for="nav of navs">
        <li :class="{active : activeNav == nav.component}" @click="activeNav = nav.component"><a>{{ nav.name }}</a></li>
      </template>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active">
        <component :is="activeNav"></component>
      </div>
    </div>
    <div class="box-footer">
      <div class="col-md-4 col-sm-0"></div>
      <div class="col-md-2 col-sm-2"><button class="btn btn-block btn-default" @click="$router.go(-1)">返回</button></div>
    </div>
  </div>
</section>
</template>

<script>
import BiddingTimeLine from './BiddingTimeLine'
import BiddingFileInfo from './BiddingFileInfo'

export default {
  components: {
    BiddingTimeLine,
    BiddingFileInfo
  },
  data () {
    return {
      navs: [
        {
          component: 'BiddingTimeLine',
          name: '项目时间线'
        },
        {
          component: 'BiddingFileInfo',
          name: '项目文件'
        }
      ],
      activeNav: 'BiddingTimeLine'
    }
  }
}
</script>
