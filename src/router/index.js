import Desktop from '../views/layout/Desktop'

import bidding from './bidding'
import system from './system'

const router = {
  routes: [
    { path: '/', component: Desktop },

    ...bidding,
    ...system
  ]
}

export default router
