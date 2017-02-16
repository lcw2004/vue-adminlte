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
import TreeTableMiXin from '../../mixins/TreeTableMiXin'

export default {
  mixins: [TreeTableMiXin],
  name: 'PurchaseType',
  components: {},
  data: function () {
    return {
    }
  },
  computed: {
    /**
    * 需要提供给 TreeTableMiXin 调用，用于 mixin 初始化数据
    */
    topElement: function () {
      return this.$store.state.data.area
    }
  }
}

</script>
