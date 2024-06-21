<template>
  <div id="app">
    <div class="title">
      <span @click="fn1">Home</span>
      <span @click="fn2">Post</span>
      <span @click="fn3">Archive</span>
      <keep-alive>
        <component :is="currentTabComponent" />
      </keep-alive>
    </div>
    <TestFornextTick></TestFornextTick>
    <TestforSlot>
      <!-- 父组件传递html结构 -->
      <!-- <img src="./assets/logo.png" /> -->
      <!-- 命名插槽和作用域插槽 -->
      <template v-slot:header="{msg}">
        <div>this is header ==={{ msg }}</div>
      </template>
      <template #:footer>
        <div>this is footer</div>
      </template>
    </TestforSlot>
  </div>
</template>

<script>
import MyArchieve from "./components/MyArchieve.vue";
import MyHome from "./components/MyHome.vue";
import MyPost from "./components/MyPost.vue";
import TestFornextTick from "./components/TestFornextTick.vue";
import TestforSlot from "./components/TestforSlot.vue";

export default {
  name: "App",
  data() {
    return {
      currentTabComponent: MyHome,
    };
  },
  provide: {
    msg: "父组件及后代",
  },
  methods: {
    fn1() {
      this.currentTabComponent = MyHome;
    },
    fn2() {
      this.currentTabComponent = MyPost;
    },
    fn3() {
      this.currentTabComponent = MyArchieve;
    },
  },
  components: {
    TestFornextTick,
    TestforSlot,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title span {
  padding: 8px;
  background-color: #ccc;
  border: 1px solid #ccc;
}
</style>
