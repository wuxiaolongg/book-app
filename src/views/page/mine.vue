<template>
  <div class="mine">
    <div class="mine_top" v-show="acvata_img">
      <img src alt class="acvat" />
    </div>
    <div class="login">
      <a href class="login_me">
        登录
        <span class="login_span">全场免费阅读</span>
      </a>
    </div>
    <div class="me">
      <h2 class="me_h2">我的账户</h2>
      <span class="me_span">充值</span>
    </div>
    <div class="message">
      <ul class="message_ul">
        <li class="message_li">
          <a href class="message_a">
            <i></i>
            <span>消息</span>
          </a>
          <span class="message_span">&gt;</span>
        </li>
        <li class="message_li">
          <a href class="message_a">
            <i></i>
            <span>等级</span>
          </a>
          <span class="message_span">&gt;</span>
        </li>
        <li class="message_li">
          <a href class="message_a">
            <i></i>
            <span>浏览历史</span>
          </a>
          <span class="message_span">&gt;</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      acvata_img: false
    };
  }
};
</script>
<style scoped>
.acvat {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.login {
  padding: 4px;
  width: 100%;
  height: 100px;
  background: url(../../assets/image/login.jpg);
}
.login_me {
  font-size: 20px;
}
.login_span {
  font-size: 12px;
}
.me {
  width: 280px;
  height: 50px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 0 10px #000;
}
.me_h2 {
  float: left;
  line-height: 50px;
  font-size: 14px;
  padding: 3px;
}
.me_span {
  margin-top: 10px;
  font-size: 15px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-right: 10px;
  line-height: 30px;
  float: right;
}
.message {
  width: 100%;
}
.message_ul {
  width: 100%;
}
.message_li {
  width: 100%;
}
.message_a {
  float: left;
  font-size: 14px;
  line-height: 28px;
}
.message_span {
  font-size: 15px;
}
</style>


      