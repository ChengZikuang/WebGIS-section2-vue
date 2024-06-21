<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h1>首页</h1>
        <div class="btn">
          <router-link to="/"><el-button type="primary">商品页</el-button></router-link>
          <router-link to="/shoppingcar"><el-button type="primary">购物车</el-button></router-link>
        </div>
      </div>
    </template>
    <router-view></router-view>
  </el-card>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .el-button {
    margin-right: 10px;
  }
}
</style>