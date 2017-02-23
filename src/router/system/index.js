import PurchaseType from '../../views/system/purchase/PurchaseType'
import ProfessionType from '../../views/system/profession/ProfessionType'
import NoticeManage from '../../views/system/notice/NoticeManage'
import NoticeTreeForm from '../../views/system/notice/NoticeTreeForm'

export default [
  { path: '/purchase-type', component: PurchaseType },
  { path: '/profession-type', component: ProfessionType },
  { path: '/notice-namage', component: NoticeManage },
  { path: '/notice-tree-form', component: NoticeTreeForm }
]
