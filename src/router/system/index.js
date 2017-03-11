import PurchaseType from '../../views/system/purchase/PurchaseType'
import ProfessionType from '../../views/system/profession/ProfessionType'
import NoticeManage from '../../views/system/notice/NoticeManage'
import NoticeTreeForm from '../../views/system/notice/NoticeTreeForm'
import RoomManage from '../../views/system/room/RoomManage'

export default [
  { path: '/system/purchase-type', component: PurchaseType },
  { path: '/system/profession-type', component: ProfessionType },
  { path: '/system/notice', component: NoticeManage },
  { path: '/system/notice-tree-form', component: NoticeTreeForm },
  { path: '/system/room', component: RoomManage }
]
