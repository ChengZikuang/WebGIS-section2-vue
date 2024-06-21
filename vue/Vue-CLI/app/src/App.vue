<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MyHeader :mmsg="msg" @change-enevt="changeMsg"></MyHeader>
    <MyContent :msg='msg' />
    <MySide v-model="text"></MySide>
    <!-- <button @click="changemsg"></button> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from "./components/MyHeader.vue"
import MyContent from "./components/MyContent.vue"
import MySide from "./components/MySide.vue"

export default {
  name: 'App',
  data() {
    return {
      msg: "hello vue",
      text:"hello text"
    }
  },
  methods: {
    changeMsg() {
      this.msg = "change msg"
    }
  },
  //在子组件中，可以通过model配置选项来手动设定传入的属性名和事件名：
  // model: {
  //   prop: 'checked',
  //   event: 'change'
  // },
  components: {
    // HelloWorld
    MyHeader,
    MyContent,
    MySide,
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
