<template>
  <section class="content">
    <div class="row">
      <li class="pubdeta_sub">
        <div class="pubdeta_sub_twig"><p style="width:42%;"></p></div>
        <ul class="pubdeta_sub_dot">
          <!--
              li：完成的状态-pubdeta_sub_dotover，当前的状态-pubdeta_sub_dotnow；
              p：class='pubdeta_subword[n]'，有几个字，[n]就写几；
          -->
          <li><p class="pubdeta_subword4">招标基本信息</p></li>
          <li><p class="pubdeta_subword4">标的信息</p></li>
          <li><p class="pubdeta_subword4">投标单位</p></li>
          <li><p class="pubdeta_subword4">招标概要</p></li>
          <li class="pubdeta_sub_dotnow"><p class="pubdeta_subword4">投标须知</p></li>
          <li><p class="pubdeta_subword4">标书文件</p></li>
          <li><p class="pubdeta_subword4">投标文件</p></li>
        </ul>
      </li>
    </div
  </section>
</template>

<script>
export default {
  name: 'AddBidding'
}
</script>

<style>
.pubdeta_sub {
    font-size: 12px;
    list-style: none;
    margin: 20px 40px 60px 40px;
    position: relative;
}
.pubdeta_sub_twig {
    width: 100%;
    height: 2px;
    margin: 5px auto;
    background-color: #e5e5e5;
    overflow: hidden;
}
.pubdeta_sub_twig p {
    height: 2px;
    background-color: #467cd4;
}
.pubdeta_sub_dot {
    list-style: none;
    width: 100%;
    position: absolute;
    top: -5px;
    left: -0.5%;
}
.pubdeta_sub_dot li {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #e5e5e5;
    position: absolute;
    top: 0;
    z-index: 2;
}
.pubdeta_sub_dot li:nth-child(1) {left: 0%;}
.pubdeta_sub_dot li:nth-child(2) {left: 16.6%;}
.pubdeta_sub_dot li:nth-child(3) {left: 33.2%;}
.pubdeta_sub_dot li:nth-child(4) {left: 50%;}
.pubdeta_sub_dot li:nth-child(5) {left: 66.6%;}
.pubdeta_sub_dot li:nth-child(6) {left: 83.2%;}
.pubdeta_sub_dot li:nth-child(7) {left: 100%;}
.pubdeta_subword1 {left: -11px;}
.pubdeta_subword2 {left: -18px;}
.pubdeta_subword3 {left: -24px;}
.pubdeta_subword4 {left: -30px;}
.pubdeta_subword5 {left: -36px;}
.pubdeta_subword6 {left: -44px;}
.pubdeta_subword7 {left: -48px;}
.pubdeta_sub_dot li:after {
    content: "";
    display: block;
    width: 2px;
    height: 8px;
    background-color: #e5e5e5;
    position: absolute;
    top: 10px;
    left: 50%;
    margin: 0 0 0 -1px;
    z-index: 1;
}
.pubdeta_sub_dot li p {
    height: 22px;
    padding: 0 8px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 11px;
    border: 2px solid #e5e5e5;
    white-space: nowrap;
    cursor: default;
    position: absolute;
    top: 18px;
    z-index: 2;
}
.pubdeta_sub_dot .pubdeta_sub_dotover {
    background-color: #467cd4;
    border: 2px solid #467cd4;
}
.pubdeta_sub_dot .pubdeta_sub_dotnow {
    background-color: #467cd4;
    border: 2px solid #467cd4;
}
.pubdeta_sub_dotnow:before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    background-color: rgba(70,124,212,0.3);
    border-radius: 50%;
    position: absolute;
    left: -5px;
    top: -5px;
    z-index: -1;
}
</style>
