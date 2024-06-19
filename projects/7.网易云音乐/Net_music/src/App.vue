<template>
  <div>
    <TopBar/>
    <RouterView/>
  </div>
</template>

<script setup>
import TopBar from './components/TopBar.vue';
</script>

<style lang="scss" >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.w{
  width: 900px;
  margin: 0 auto;
}
</style>