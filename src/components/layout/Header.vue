<template>
  <div class="header">
    <transition name="scroll_bar_transition">
      <div class="head_div" v-show="show_index_scroll_bar">
        <h2>书架</h2>
        <div class="head_img">
          <img src="../../assets/image/搜索.png" alt class="search" />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      moniting_scrollbar: "scrollBar/update_scroll_value"
    })
  },
  computed: {
    ...mapState({
      scrolled: state => state.scrollBar.current_scrolled_value > 70,
      show_index_scroll_bar: state => state.scrollBar.show_scroll_bar
    })
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.utils.throttle(this.moniting_scrollbar, 90)
    );
  }
};
</script>
<style scoped>
.header {
  height: 160px;
  background: url(../../assets/xiao.jpg) center;
}
.head_div {
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
}
</style>