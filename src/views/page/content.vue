<template>
  <div class="con_div">
    <div class="con_top"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookList: [
        {
          name: "长尾理论",
          status: "读到1章",
          author: "克里斯`安德森",
          time: "1分钟前"
        },
        {
          name: "金字塔原理",
          status: "读到102章",
          author: "芭芭拉·明托",
          time: "1个月前"
        },
        {
          name: "凡人修仙传",
          status: "读到1109章",
          author: "忘语",
          time: "3个月前"
        },
        {
          name: "一念永恒",
          status: "读到10章",
          author: "耳根",
          time: "3个月前"
        },
        {
          name: "微信思维",
          status: "读到1章",
          author: "谢晓萍",
          time: "4个月前"
        },
        {
          name: "明朝那些事",
          status: "读到19章",
          author: "当年明月",
          time: "4个月前"
        }
      ]
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.con_div {
  width: 100%;
  display: flex;
  margin: 0 auto;
  overflow-x: hidden;
}
.con_top {
  width: 100%;
  display: flex;
  height: 100px;
  margin: 0 auto;
  overflow-x: hidden;
}
.con_img {
  width: 100%;
  height: 100%;
}
.con_p {
  overflow: hidden;
  margin: 0 auto;
  width: 5.5rem;
  height: 0.8rem;
  background: #ccc;
  text-align: center;
  line-height: 0.4rem;
}
.con_a {
  font-size: 0.3rem;
}
</style>