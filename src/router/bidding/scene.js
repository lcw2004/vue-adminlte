import BiddingScene from '../../views/bidding/scence/BiddingScene'
import BiddingQuotesContains from '../../views/bidding/scence/quotes/BiddingQuotesContains'
import Index from '../../views/bidding/scence/Index'
import BiddingClarify from '../../views/bidding/scence/clarify/BiddingClarify'

export default [
  {
    path: '/bidding/scene',
    component: BiddingScene,
    children: [
      { path: '', component: Index },
      { path: 'quotes', component: BiddingQuotesContains },
      { path: 'clarify', component: BiddingClarify }
    ]
  }
]
