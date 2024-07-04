<template>
  <div>
    <TopBar />
    <RouterView />
  </div>
</template>

<script setup>
import TopBar from "@/components/TopBar.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
<style>
body {
  background-color: rgb(0, 102, 138);
  color: white;
}
.ctn {
  max-width: 1536px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding:0 160px;
}
</style>
