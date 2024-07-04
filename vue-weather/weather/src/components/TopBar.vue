<template>
  <div class="top">
    <div class="ctn">
      <div class="left">
        <div class="home">
          <!-- :before -->
          新中地天气
        </div>
        <div class="ipinfo">南京市 实时天气：晴 34℃ 西南风4级</div>
      </div>
      <div class="right">
        <span>i</span>
        <span v-if="isAdd">+</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isAdd = ref(false);
</script>

<style lang="scss" scoped>
.top {
  position: sticky;
  height: 80px;
  top: 0;
  z-index: 10;
  box-shadow: 0 5px 10px -5px rgb(0, 91, 123);
  background-color: rgb(0, 102, 138);
  text-align: center;
  line-height: 80px;
  .ctn {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      gap: 1rem;
    }
    .right {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
