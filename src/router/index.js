import Desktop from '../views/layout/Desktop'
import AddBidding from '../views/bidding/AddBidding'
import BiddingAudit from '../views/bidding/BiddingAudit'
import BiddingManage from '../views/bidding/BiddingManage'
import BiddingPermission from '../views/bidding/BiddingPermission'
import MyBidding from '../views/bidding/MyBidding'

import BiddingPermissionInfo from '../views/bidding/BiddingPermissionInfo'
import AuditProgress from '../views/bidding/AuditProgress'
import BiddingClarify from '../views/bidding/BiddingClarify'
import BiddingInfo from '../views/bidding/BiddingInfo'
import BiddingPreAward from '../views/bidding/BiddingPreAward'
import BiddingScene from '../views/bidding/BiddingScene'
import BiddingCompare from '../views/bidding/scence/BiddingCompare'

import ClarifyInfo from '../views/bidding/clarify/ClarifyInfo'

import PurchaseType from '../views/system/purchase/PurchaseType'
import ProfessionType from '../views/system/profession/ProfessionType'
import NoticeManage from '../views/system/notice/NoticeManage'
import NoticeTreeForm from '../views/system/notice/NoticeTreeForm'

const router = {
  routes: [
    { path: '/', component: Desktop },
    { path: '/add-bidding', component: AddBidding },
    { path: '/bidding-audit', component: BiddingAudit },
    { path: '/bidding-manage', component: BiddingManage },
    { path: '/bidding-permission', component: BiddingPermission },
    { path: '/my-bidding', component: MyBidding },
    { path: '/bidding-permission-info', component: BiddingPermissionInfo },
    { path: '/audit-progress', component: AuditProgress },
    { path: '/bidding-clarify', component: BiddingClarify },
    { path: '/bidding-clarify-info', component: ClarifyInfo },
    { path: '/bidding-info', component: BiddingInfo },
    { path: '/bidding-pre-award', component: BiddingPreAward },
    { path: '/bidding-scene', component: BiddingScene },
    { path: '/bidding-compare', component: BiddingCompare },

    { path: '/purchase-type', component: PurchaseType },
    { path: '/profession-type', component: ProfessionType },
    { path: '/notice-namage', component: NoticeManage },
    { path: '/notice-tree-form', component: NoticeTreeForm }
  ]
}

export default router
