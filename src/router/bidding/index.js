import AddBidding from '../../views/bidding/AddBidding'
import BiddingAudit from '../../views/bidding/BiddingAudit'
import BiddingManage from '../../views/bidding/BiddingManage'
import BiddingPermission from '../../views/bidding/BiddingPermission'
import BiddingOfManager from '../../views/bidding/BiddingOfManager'
import BiddingOfSupplier from '../../views/bidding/BiddingOfSupplier'
import BiddingOfExpert from '../../views/bidding/BiddingOfExpert'

import BiddingPermissionInfo from '../../views/bidding/BiddingPermissionInfo'
import AuditProgress from '../../views/bidding/AuditProgress'

import BiddingInfo from '../../views/bidding/BiddingInfo'
import BiddingPreAward from '../../views/bidding/award/BiddingPreAward'
import BiddingTimeManage from '../../views/bidding/BiddingTimeManage'

import scene from './scene'
import expert from './expert'
import clarify from './clarify'
export default [
  { path: '/bidding/create', component: AddBidding },
  { path: '/bidding/audit', component: BiddingAudit },
  { path: '/bidding/manage', component: BiddingManage },
  { path: '/bidding/permission', component: BiddingPermission },
  { path: '/bidding/of-manager', component: BiddingOfManager },
  { path: '/bidding/of-supplier', component: BiddingOfSupplier },
  { path: '/bidding/of-expert', component: BiddingOfExpert },
  { path: '/bidding/permission-info', component: BiddingPermissionInfo },
  { path: '/bidding/audit-progress', component: AuditProgress },
  { path: '/bidding/info', component: BiddingInfo },
  { path: '/bidding/pre-award', component: BiddingPreAward },
  { path: '/bidding/time-manage', component: BiddingTimeManage },

  ...scene,
  ...expert,
  ...clarify
]
