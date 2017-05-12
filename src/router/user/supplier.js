import SupplierAudit from '../../views/user/supplier/audit/SupplierAudit'
import SupplierPurchaseAudit from '../../views/user/supplier/audit/SupplierPurchaseAudit'
import SupplierPurchaseDetail from '../../views/user/supplier/audit/SupplierPurchaseDetail'
import SupplierManage from '../../views/user/supplier/SupplierManage'
import SupplierBlackList from '../../views/user/supplier/SupplierBlackList'
import SupplierView from '../../views/user/supplier/SupplierView'
import SupplierPurchaseAuditView from '../../views/user/supplier/SupplierPurchaseAuditView'
import SupplierLevel from '../../views/user/supplier/SupplierLevel'
import Questionnaire from '../../views/user/supplier/Questionnaire'

export default [
  { path: '/user/supplier/manage', component: SupplierManage },
  { path: '/user/supplier/audit', component: SupplierAudit },
  { path: '/user/supplier/purchase-audit', component: SupplierPurchaseAudit },
  { path: '/user/supplier/purchase-audit/:id', component: SupplierPurchaseAuditView },
  { path: '/user/supplier/purchase-audit/detail', component: SupplierPurchaseDetail },
  { path: '/user/supplier/blacklist', component: SupplierBlackList },

  { path: '/user/supplier/:id/view', component: SupplierView },

  { path: '/user/supplier/level', component: SupplierLevel },
  { path: '/user/supplier/questionnaire', component: Questionnaire }
]
