<template>
  <div class="TotalBuyers">
    <CommonCard :title="title" :number="number">
      <v-chart :option="option" class="chart" />
      <template v-slot:footer>
        <span>日同比</span><span class="bold">12.35%</span>
        <!-- 三角形 -->
        <span class="increase"></span>
        <span>月同比</span><span class="bold">23.97%</span>
        <span class="increase"></span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCard from "@/components/TopComp/CommonCard.vue";
export default {
  data() {
    return {
      title: "累计用户数",
      number: "768923",
      option: {
        grid: {
          top: "100%",
          left: "100%",
          right: "100%",
          buttom: "100%",
        },
        xAxis: {
          type: "value",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          type: "category",
          show: false,
        },
        
        series: [
          {
            type: "bar",
            data: [130],
            barWidth: 10,
            itemStyle: {
              color: "green",
            },
            stack: "TotalBuyers",
            // markPoint: {
            //   data: [
            //     {
            //       coord: [768923, 0], // 第一个点（顶端箭头）
            //       y: "90%",
            //       symbol: "triangle",
            //       symbolRotate: 0,
            //       symbolSize: [10, 15],
            //       itemStyle: {
            //         color: "green",
            //       },
            //     },
            //     {
            //       coord: [768923, 0], // 第二个点（底端箭头）
            //       y: "1%",
            //       symbol: "triangle",
            //       symbolRotate: 180,
            //       symbolSize: [10, 15],
            //       itemStyle: {
            //         color: "green",
            //       },
            //     },
            //   ],
            // },
            // markLine: {
            //   data: [
            //     {
            //       xAxis: 1000000, // 灰色部分的终点
            //       lineStyle: {
            //         color: "#d3d3d3",
            //         width: 20,
            //       },
            //     },
            //   ],
            //   silent: true, // 禁用hover
            //   symbol: "none", // 不显示箭头
            // },
          },
          {
            type: "bar",
            data: [30],
            barWidth: 10,
            itemStyle: {
              color: "gray",
            },
            stack: "TotalBuyers",
          },
        ],
      },
    };
  },
  components: {
    CommonCard,
  },
};
</script>

<style lang="scss" scoped></style>
