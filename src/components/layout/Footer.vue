<template>
  <div class="foot">
    <ul class="foot_ul">
      <li>
        <img src="../../assets/image/icon_书架.png" alt class="foot_img" />
        <a href>书架</a>
      </li>
      <li>
        <img src="../../assets/image/精选.png" alt class="foot_img" />
        <a href>精选</a>
      </li>
      <li>
        <img src="../../assets/image/菜单.png" alt class="foot_img" />
        <a href>书库</a>
      </li>
      <li>
        <img src="../../assets/image/我的.png" alt class="foot_img" />
        <a href>我的</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.foot {
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
.foot_ul li a {
  display: flex;
}
</style>