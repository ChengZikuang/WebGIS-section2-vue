<template>
  <div class="common-card">
    <el-card shadow="hover">
      <div class="title">{{ title }}</div>
      <div class="number">{{ number }}</div>
      <div class="chart">
        <slot></slot>
      </div>
      <div class="line"></div>
      <div class="footer">
        <slot name="footer"/>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["title", "number"],
};
</script>

<style lang="scss" >
.common-card {
  .title {
    font-size: 12px;
    color: #777;
    letter-spacing: 1px;
  }
  .number {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }
  .line{
    margin-top: 18px;
    border-top: 1px solid #ddd;
  }
  .chart {
    height: 50px;
    margin-top: 10px;
  }
  .footer {
    margin-top: 10px;
  }
  span {
  font-size: 14px !important;
  color: #464545;
  }
  .bold {
    margin-left: 8px;
    font-weight: 550;
  }
}
</style>
