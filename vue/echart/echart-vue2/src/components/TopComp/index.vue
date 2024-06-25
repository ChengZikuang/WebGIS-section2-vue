<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="el-table">
    <el-row :gutter="20">
      <el-col :span="6"><TotalSale /></el-col>
      <el-col :span="6"><TotalOrder /></el-col>
      <el-col :span="6"><TodayBuyers /></el-col>
      <el-col :span="6"><TotalBuyers /></el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSale from "./TotalSale.vue";
import TotalOrder from "./TotalOrder.vue";
import TodayBuyers from "./TodayBuyers.vue";
import TotalBuyers from "./TotalBuyers.vue";
import { getReportData } from "@/api/index.js";


export default {
  data() {
    return {
      responsedata:{}
    }
  },
  components: {
    TotalSale,
    TotalOrder,
    TodayBuyers,
    TotalBuyers,
  },
  async mounted(){
    const res = await getReportData();
    this.responsedata = res.data;
    // console.log(res.data);
  },
};
</script>

<style lang="scss">
.el-row {
  background-color:#eee;
}
span.increase {
  display: inline-block;
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: transparent transparent green transparent;
  margin-left: 10px;
  margin-right: 10px;
  transform: translateY(-50%);
}
</style>
