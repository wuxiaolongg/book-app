<template>
  <div class="header">
    <Head></Head>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Head from "./head";
export default {
  data() {
    return {};
  },
  components: {
    Head
  }
};
</script>
<style scoped>
.header {
  height: 160px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background: url(../../assets/xiao.jpg) center;
}
/* .head_div {
  width: 100%;
  height: 69px;
  position: fixed;
  top: 0px;
  z-index: 1111;
  background: rgba(255, 255, 255, 1);
}
.head_div h2 {
  display: inline-block;
  color: black;
  overflow: hidden;
  width: 50%;
  text-align: right;
  font-weight: normal;
  line-height: 69px;
  font-size: 30px;
}
.head_img {
  width: 50%;
  display: inline-block;
}
.search {
  padding-bottom: 14px;
  margin-left: 120px;
  width: 40px;
  height: 40px;
}
.scroll_bar_transition-enter-active,
.scroll_bar_transition-leave-active {
  transition: opacity 2s;
}
.scroll_bar_transition-enter {
  opacity: 0;
}
.scroll_bar_transition_enter-to {
  opacity: 1;
}
.scroll_bar_transition-leave {
  opacity: 1;
}
.scroll_bar_transition-leave-to {
  opacity: 0;
} */
</style>