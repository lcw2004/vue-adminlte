<template>
  <ul class="sidebar-menu">
    <li class="header">招标负责人</li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>待办事项</span>
        <span class="pull-right-container">
          <span class="label label-primary pull-right">4</span>
        </span>
      </a>
    </li>
    <li class="active treeview">
      <a href="#">
        <i class="fa fa-dashboard"></i>
        <span>招标项目管理</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li class="active"><a><i class="fa fa-circle-o"></i><router-link to='/my-bidding'>我的招标项目</router-link></a></li>
        <li><a><i class="fa fa-circle-o"></i><router-link to='/add-bidding'>招标项目发布</router-link></a></li>
        <li><a><i class="fa fa-circle-o"></i><router-link to='/bidding-manage'>招标项目管理</router-link></a></li>
        <li><a><i class="fa fa-circle-o"></i><router-link to='/bidding-permission'>投标权限管理</router-link></a></li>
        <li><a><i class="fa fa-circle-o"></i><router-link to='/bidding-audit'>招标项目审核</router-link></a></li>
      </ul>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>供应商管理</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li><a><i class="fa fa-circle-o"></i>供应商管理</a></li>
        <li><a><i class="fa fa-circle-o"></i>供应商审核</a></li>
        <li><a><i class="fa fa-circle-o"></i>黑名单</a></li>
      </ul>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>专家管理</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li><a><i class="fa fa-circle-o"></i>评标专家管理</a></li>
      </ul>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>系统管理</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li><a><i class="fa fa-circle-o"></i><router-link to='/purchase-type'>采购类别管理</router-link></a></li>
        <li><a><i class="fa fa-circle-o"></i><router-link to='/profession-type'>专业类别管理</router-link></a></li>
        <li><a><i class="fa fa-circle-o"></i>须知文件管理（投标、注册）</a></li>
      </ul>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>门户管理</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li><a><i class="fa fa-circle-o"></i>略</a></li>
      </ul>
    </li>

    <li class="header">专家</li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>招标项目评标</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li><a><i class="fa fa-circle-o"></i>招投标项目评审</a></li>
      </ul>
    </li>


    <li class="header">供应商</li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>个人信息</span>
      </a>
    </li>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-files-o"></i>
        <span>我的项目</span>
        <span class="pull-right-container">
          <i class="fa fa-angle-left pull-right"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li><a><i class="fa fa-circle-o"></i>我的投标项目</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LeftMenu'
}
</script>
