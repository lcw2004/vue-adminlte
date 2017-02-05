import Desktop from '../components/layout/Desktop'
import AddBidding from '../components/bidding/AddBidding'
import AuditBidding from '../components/bidding/AuditBidding'
import ManageBidding from '../components/bidding/ManageBidding'
import ManageBiddingPerm from '../components/bidding/ManageBiddingPerm'
import MyBidding from '../components/bidding/MyBidding'

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
