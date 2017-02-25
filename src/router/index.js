import Desktop from '../views/layout/Desktop'

import bidding from './bidding'
import system from './system'
import user from './user'

const router = {
  routes: [
    { path: '/', component: Desktop },

    ...bidding,
    ...system,
    ...user
  ]
}

export default router
