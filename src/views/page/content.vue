<template>
  <div>
    <Header></Header>
    <div class="con_div">
      <div class="con_top">
        <h2>拍电影！录综艺！谈恋爱，美滋滋！</h2>
        <a href>&gt;</a>
      </div>
      <ul class="con_book">
        <li>
          <img src="../../assets/xiao.jpg" alt />
          <div class="book_r">
            <div class="book_rt">
              <h2>三界独尊</h2>
              <span>限免</span>
            </div>
            <div class="book_rb">
              <span>1139章未读</span>
              <span>还剩214小时</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "../../components/layout/Header";
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
  },
  components: {
    Header
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
  flex-direction: column;
  margin: 0 auto;
  overflow-x: hidden;
}
.con_top {
  display: flex;
  width: 330px;
  height: 40px;
  margin: 0 auto;
  background: #fff;
  justify-content: space-around;
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0 0 18px #ccc;
}
.con_top h2 {
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
}
.con_top a {
  font-size: 20px;
  padding-right: 10px;
  line-height: 40px;
}
.con_book {
  display: flex;
  flex-direction: column;
}
.con_book li {
  display: flex;
}
.con_book li img {
  width: 80px;
  height: 100px;
}
.book_r {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
}
.book_rt {
  display: flex;
  justify-content: space-around;
}
.book_rt h2 {
  font-size: 20px;
  flex-wrap: 500px;
}
.book_rt span {
  font-size: 15px;
  line-height: 21px;
  padding: 2px;
  border-radius: 5px;
  background: red;
  color: #fff;
}
.book_rb {
  display: flex;
  justify-content: space-around;
}
.book_rb span {
  font-size: 15px;
  line-height: 21px;
  padding: 2px;
  border-radius: 5px;
  color: #ccc;
}
</style>