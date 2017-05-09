import Home from '../views/layout/Home.vue'
import Desktop from '../views/layout/Desktop'
import bidding from './bidding'
import biddingOfSupplier from './bidding-of-supplier'
import biddingOfExpert from './bidding-of-expert'
import biddingOfSupervisor from './bidding-of-supervisor'
import system from './system'
import user from './user'
import personal from './personal'

export default {
  path: '/home',
  component: Home,
  children: [
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
