import Desktop from '../views/layout/Desktop'

import bidding from './bidding'
import biddingOfSupplier from './bidding-of-supplier'
import biddingOfExpert from './bidding-of-expert'
import system from './system'
import user from './user'

const router = {
  routes: [
    { path: '/', component: Desktop },

    ...bidding,
    ...biddingOfSupplier,
    ...biddingOfExpert,
    ...system,
    ...user
  ]
}

export default router
