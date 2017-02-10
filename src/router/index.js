import Desktop from '../views/layout/Desktop'
import AddBidding from '../views/bidding/AddBidding'
import AuditBidding from '../views/bidding/AuditBidding'
import ManageBidding from '../views/bidding/ManageBidding'
import ManageBiddingPerm from '../views/bidding/ManageBiddingPerm'
import MyBidding from '../views/bidding/MyBidding'

const router = {
  routes: [
    {path: '/', component: Desktop},
    { path: '/add-bidding', component: AddBidding },
    { path: '/audit-bidding', component: AuditBidding },
    { path: '/manage-bidding', component: ManageBidding },
    { path: '/manage-bidding-perm', component: ManageBiddingPerm },
    { path: '/my-bidding', component: MyBidding }
  ]
}

export default router
