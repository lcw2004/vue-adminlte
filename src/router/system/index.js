import PurchaseType from '../../views/system/purchase/PurchaseType'
import ProfessionType from '../../views/system/profession/ProfessionType'
import NoticeManage from '../../views/system/notice/NoticeManage'
import NoticeTreeForm from '../../views/system/notice/NoticeTreeForm'
import RoomManage from '../../views/system/room/RoomManage'
import SettingManage from '../../views/system/setting/SettingManage'

import DictList from '../../views/system/dict/DictList'
import DictForm from '../../views/system/dict/DictForm'

import AreaList from '../../views/system/area/AreaList'
import AreaForm from '../../views/system/area/AreaForm'

import MenuList from '../../views/system/menu/MenuList'
import MenuForm from '../../views/system/menu/MenuForm'

import RoleList from '../../views/system/role/RoleList'
import RoleForm from '../../views/system/role/RoleForm'

import OfficeList from '../../views/system/office/OfficeList'
import OfficeForm from '../../views/system/office/OfficeForm'

import UserList from '../../views/system/user/UserList'
import UserForm from '../../views/system/user/UserForm'

import LogList from '../../views/system/log/LogList'

export default [
  { path: '/system/purchase-type', component: PurchaseType },
  { path: '/system/profession-type', component: ProfessionType },
  { path: '/system/notice', component: NoticeManage },
  { path: '/system/notice-tree-form', component: NoticeTreeForm },
  { path: '/system/room', component: RoomManage },
  { path: '/system/setting', component: SettingManage },

  { path: '/system/dict', component: DictList },
  { path: '/system/dict/:id', component: DictForm },
  { path: '/system/dict/add', component: DictForm },

  { path: '/system/area', component: AreaList },
  { path: '/system/area/:id', component: AreaForm },
  { path: '/system/area/add', component: AreaForm },

  { path: '/system/menu', component: MenuList },
  { path: '/system/menu/:id', component: MenuForm },
  { path: '/system/menu/add', component: MenuForm },

  { path: '/system/role', component: RoleList },
  { path: '/system/role/:id', component: RoleForm },
  { path: '/system/role/add', component: RoleForm },

  { path: '/system/office', component: OfficeList },
  { path: '/system/office/:id', component: OfficeForm },
  { path: '/system/office/add', component: OfficeForm },

  { path: '/system/user', component: UserList },
  { path: '/system/user/:id', component: UserForm },
  { path: '/system/user/add', component: UserForm },

  { path: '/system/log', component: LogList }
]
