import BiddingScene from '../../views/bidding/BiddingScene'
import Compare from '../../views/bidding/scence/Compare'
import Home from '../../views/bidding/scence/Home'

export default [
  {
    path: '/bidding-scene',
    component: BiddingScene,
    children: [
      { path: '', component: Home },
      { path: 'compare', component: Compare }
    ]
  }
]
