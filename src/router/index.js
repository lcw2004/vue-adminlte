import Desktop from '../views/layout/Desktop'
import AddBidding from '../views/bidding/AddBidding'
import AuditBidding from '../views/bidding/AuditBidding'
import ManageBidding from '../views/bidding/ManageBidding'
import BiddingPermission from '../views/bidding/BiddingPermission'
import MyBidding from '../views/bidding/MyBidding'

import BiddingPermissionInfo from '../views/bidding/BiddingPermissionInfo'

const router = {
  routes: [
    {path: '/', component: Desktop},
    { path: '/add-bidding', component: AddBidding },
    { path: '/audit-bidding', component: AuditBidding },
    { path: '/manage-bidding', component: ManageBidding },
    { path: '/bidding-permission', component: BiddingPermission },
    { path: '/my-bidding', component: MyBidding },
    { path: '/bidding-permission-info', component: BiddingPermissionInfo }
  ]
}

export default router
