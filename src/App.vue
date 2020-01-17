<template>
  <div id="app">
    <div class="head">
      <Header></Header>
    </div>
    <div class="content">
      <router-view />
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
import vue from "vue";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
<style>
body,
html {
  height: 100%;
}
#app {
  display: flex;
  color: #2c3e50;
  flex-direction: column;
}
.content {
  overflow-y: auto;
  height: 1000px;
}
</style>
