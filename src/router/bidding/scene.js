import BiddingScene from '../../views/bidding/scence/BiddingScene'
import Compare from '../../views/bidding/scence/Compare'
import Home from '../../views/bidding/scence/Home'
import BiddingClarify from '../../views/bidding/scence/BiddingClarify'

export default [
  {
    path: '/bidding/scene',
    component: BiddingScene,
    children: [
      { path: '', component: Home },
      { path: 'compare', component: Compare },
      { path: 'clarify', component: BiddingClarify }
    ]
  }
]
