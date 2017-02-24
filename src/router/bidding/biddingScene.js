import BiddingScene from '../../views/bidding/BiddingScene'
import BiddingCompare from '../../views/bidding/scence/BiddingCompare'
import Home from '../../views/bidding/scence/Home'

export default [
  {
    path: '/bidding-scene',
    component: BiddingScene,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'compare',
        component: BiddingCompare
      }
    ]
  }
]
