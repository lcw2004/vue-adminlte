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

export default router
