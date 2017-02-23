import BiddingScene from '../../views/bidding/BiddingScene'
import BiddingCompare from '../../views/bidding/scence/BiddingCompare'

export default [
  {
    path: '/bidding-scene',
    component: BiddingScene,
    children: [
      {
        path: '/compare',
        component: BiddingCompare
      }
    ]
  },
  {
    path: '/bidding-compare',
    component: BiddingCompare
  }
]
