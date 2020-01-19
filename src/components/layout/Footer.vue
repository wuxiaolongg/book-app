<template>
  <div class="foot">
    <ul class="foot_ul">
      <li>
        <router-link :to="{name:'Content'}" class="menu">
          <i class="iconfont icon-biaoqing" />
          <span href>书架</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'handpick'}" class="menu">
          <i class="iconfont icon-jingxuan" />
          <span href>精选</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'classify'}" class="menu">
          <i class="iconfont icon-caidan" />
          <span href>书库</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'home'}" class="menu">
          <i class="iconfont icon-wode" />
          <span href>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 69px;
  background: #fff;
  box-shadow: 0 0 20px #ccc;
}
.foot_ul {
  display: flex;
  height: 69px;
  justify-content: space-around;
}
.foot_ul li {
  cursor: pointer;
  font-size: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.foot_img {
  font-size: 16px;
  width: 26px;
}
.menu i {
  font-size: 28px;
}
.foot_ul li span {
  display: flex;
  font-size: 16px;
}

.foot_ul li:hover .menu {
  color: aqua;
}
</style>