import SupplierAudit from '../../views/user/supplier/SupplierAudit'
import SupplierManage from '../../views/user/supplier/SupplierManage'
import SupplierBlackList from '../../views/user/supplier/SupplierBlackList'

export default [
  { path: '/supplier/audit', component: SupplierAudit },
  { path: '/supplier/manage', component: SupplierManage },
  { path: '/supplier/blacklist', component: SupplierBlackList }
]
