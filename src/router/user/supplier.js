import SupplierAudit from '../../views/user/supplier/audit/SupplierAudit'
import SupplierPurchaseAudit from '../../views/user/supplier/audit/SupplierPurchaseAudit'
import SupplierPurchaseDetail from '../../views/user/supplier/audit/SupplierPurchaseDetail'
import SupplierManage from '../../views/user/supplier/SupplierManage'
import SupplierBlackList from '../../views/user/supplier/SupplierBlackList'
import SupplierInfo from '../../views/user/supplier/SupplierInfo'
import SupplierLevel from '../../views/user/supplier/SupplierLevel'
import Questionnaire from '../../views/user/supplier/Questionnaire'

export default [
  { path: '/supplier/audit', component: SupplierAudit },
  { path: '/supplier/purchase-audit', component: SupplierPurchaseAudit },
  { path: '/supplier/purchase-audit/detail', component: SupplierPurchaseDetail },
  { path: '/supplier/manage', component: SupplierManage },
  { path: '/supplier/blacklist', component: SupplierBlackList },
  { path: '/supplier/info', component: SupplierInfo },
  { path: '/supplier/level', component: SupplierLevel },
  { path: '/supplier/questionnaire', component: Questionnaire }
]
