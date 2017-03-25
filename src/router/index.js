import VueRouter from 'vue-router'
import Desktop from '../views/layout/Desktop'

import bidding from './bidding'
import biddingOfSupplier from './bidding-of-supplier'
import biddingOfExpert from './bidding-of-expert'
import biddingOfSupervisor from './bidding-of-supervisor'
import system from './system'
import user from './user'
import personal from './personal'

const router = {
  routes: [
    { path: '/', component: Desktop },

    ...bidding,
    ...biddingOfSupplier,
    ...biddingOfSupervisor,
    ...biddingOfExpert,
    ...system,
    ...user,
    ...personal
  ]
}

// 构建VueRouter对象
let vueRouter = new VueRouter(router)

// 拦截路由，进行授权判断
vueRouter.beforeEach((to, from, next) => {
  // TODO 验证用户是否登录，以及用户是否有访问该路由的权限
  // TODO 如果没有登录，则跳转到登录界面
  console.log(to)
  console.log(from)
  next()
})

export default vueRouter
