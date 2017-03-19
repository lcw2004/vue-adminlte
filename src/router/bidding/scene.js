import Index from '../../views/bidding/scence/Index'
import Home from '../../views/bidding/scence/Home'
import BiddingQuotesContains from '../../views/bidding/scence/quotes/BiddingQuotesContains'
import BiddingClarify from '../../views/bidding/scence/clarify/BiddingClarify'

export default [
  {
    path: '/bidding/scene',
    component: Index,
    children: [
      { path: '', component: Home },
      { path: 'quotes', component: BiddingQuotesContains },
      { path: 'clarify', component: BiddingClarify }
    ]
  }
]
