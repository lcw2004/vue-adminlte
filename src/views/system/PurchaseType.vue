<template>
  <section class="content">
  	<div class="row">
  		<div class="col-xs-12">
  			<div class="box">
  				<div class="box-header">
  					<form class="form-inline">
  						<div class="col-md-3">
  							<a class="btn btn-primary" @click="toggleAll()" ><span v-if="toggleStatus">收缩</span><span v-else>展开</span>全部</a>
  							<a class="btn btn-primary" href="${ctx}/sys/menu/form">添加</a>
  						</div>
  					</form>
  				</div>
  				<div class="box-body">
  					<table class="table table-bordered table-hover">
  						<thead>
  						<tr>
  							<th>名称</th>
  							<th>链接</th>
  							<th>排序</th>
  							<th>可见</th>
  							<th>权限标识</th>
  							<th>操作</th>
  						</tr>
  						</thead>
  						<tbody>
  						<tr v-for="obj of dataList" v-show="obj.isShowInTable" :key="obj.id">
  							<td>
  								<span :style="{paddingLeft : (obj.level -1) * 20 + 'px'}"></span>
  								<a @click="toggle(obj)" v-if="obj.childList != null && obj.childList.length > 0">
  									<i v-show="!obj.isExpanded" class="fa fa-caret-right"></i>
  									<i v-show="obj.isExpanded" class="fa fa-caret-down"></i>
  								</a>
  								<span v-else style="padding-left : 10px"></span>
  								<i v-if="obj.icon" :class="obj.icon" style="font-size: 16px"></i>
  								<span @click="toggle(obj)" v-text="obj.name"></span>
  							</td>
  							<td><span v-text="obj.href"></span></td>
  							<td><span v-text="obj.sort"></span></td>
  							<td><span v-text="obj.isShowCN"></span></td>
  							<td><span v-text="obj.permission"></span></td>
  							<td>
  								<a :href="'${ctx}/sys/menu/form?id=' + obj.id">修改</a>
  								<a @click="deleteData(obj.id)">删除</a>
  							</td>
  						</tr>
  						</tbody>
  					</table>
  				</div>
  			</div>
  		</div>
  	</div>
  </section>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'PurchaseType',
  components: {},
  data: function () {
    return {
      toggleStatus: true
    }
  },
  computed: {
    topElement: function () {
      return this.$store.state.data.area
    },
    dataList: function () {
      let tempList = []
      if (this.topElement) {
        initMenu(this.topElement, 1, tempList)
      }
      return tempList
    }
  },
  methods: {
    toggle: function (menu) {
      var isExpanded = menu.isExpanded
      if (isExpanded) {
        toggleChildMenuListRecursion(menu, !isExpanded)
      } else {
        toggleChildMenuList(menu, !isExpanded)
      }
      menu.isExpanded = !isExpanded
    },
    toggleAll: function () {
      toggleAllMenu(this.topElement, !this.toggleStatus)
      this.toggleStatus = !this.toggleStatus
    }
  }
}

/**
 * 递归初始化菜单列表，将menu下的子菜单添加tempList中
 * */
function initMenu (menu, level, tempList) {
  var childList = menu.childList
  if (!childList) {
    return
  }
  for (var i = 0; i < childList.length; i++) {
    var childMenu = childList[i]
    childMenu.level = level
    Vue.set(childMenu, 'isShowInTable', level <= 3) // 是否显示，1,2,3级菜单默认显示
    Vue.set(childMenu, 'isExpanded', level <= 2) // 是否展开菜单，1,2,3级菜单默认展开
    tempList.push(childMenu)

    initMenu(childMenu, level + 1, tempList)
  }
}

/**
 * 切换下一级菜单的状态，主要用于打开，打开的时候只显示下一级，且只修改本级的显示状态
 * @param menu
 * @param isShowInTable
 */
function toggleChildMenuList (menu, isShowInTable) {
  // 修改子节点的显示状态
  var list = menu.childList
  if (list == null) {
    return
  }
  for (var i = 0; i < list.length; i++) {
    var childMenu = list[i]
    childMenu.isShowInTable = isShowInTable
  }
}

/**
 * 递归切换所有菜单的状态，主要用于关闭，关闭的时候需要修改所有子节点的展开及显示状态
 * @param menu
 * @param isShowInTable
 */
function toggleChildMenuListRecursion (menu, isShowInTable) {
  // 修改子节点的现实状态
  var list = menu.childList
  if (list == null) {
    return
  }
  for (var i = 0; i < list.length; i++) {
    var childMenu = list[i]
    childMenu.isShowInTable = isShowInTable
    childMenu.isExpanded = isShowInTable

    toggleChildMenuListRecursion(childMenu, isShowInTable)
  }
}

/**
 * 收缩 / 展开 全部菜单
 * @param topMenu
 * @param isShowInTable
 */
function toggleAllMenu (topMenu, isShowInTable) {
  var list = topMenu.childList
  for (var i = 0; i < list.length; i++) {
    var childMenu = list[i]
    childMenu.isExpanded = !isShowInTable
    toggleChildMenuListRecursion(childMenu, isShowInTable)
  }
}
</script>
