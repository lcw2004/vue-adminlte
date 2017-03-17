import BiddingOfSupplier from '../../views/bidding-of-supplier/BiddingOfSupplier'
import BiddingCanJoin from '../../views/bidding-of-supplier/BiddingCanJoin'
import BiddingInfo from '../../views/bidding-of-supplier/BiddingInfo'
import Questions from '../../views/bidding-of-supplier/clarify/Questions'
import Clarifies from '../../views/bidding-of-supplier/clarify/Clarifies'
import SubmitBidding from '../../views/bidding-of-supplier/submit/SubmitBidding'

export default [
  { path: '/bidding/bidding-of-supplier', component: BiddingOfSupplier },
  { path: '/bidding/bidding-can-join', component: BiddingCanJoin },
  { path: '/bidding/bidding-info', component: BiddingInfo },
  { path: '/bidding/s/questions', component: Questions },
  { path: '/bidding/s/clarifies', component: Clarifies },
  { path: '/bidding/s/submit-bidding', component: SubmitBidding }

]
