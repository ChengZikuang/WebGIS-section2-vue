<template>
  <div class="TotalOrder">
    <CommonCard :title="title" :number="number">
      <v-chart :option="option"/>
      <template v-slot:footer>
        <span>昨日销售额</span><span class="bold">￥ 12768</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCard from "@/components/TopComp/CommonCard.vue";
export default {
  data() {
    return {
      title: "累计订单额",
      number: "13145",
      option: {
        xAxis: {
          type: "category",
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: [123, 432, 541, 234, 576, 112, 789, 98],
            type: "line",
            gap: {
              top: 0,
              left: 0,
              right: 0,
              buttom: 0,
            },
            showSymbol: false,
            smooth: true,
            lineStyle: {
              width: 0,
            },
            areaStyle: {
              opacity: 0.8,
              color: "purple",
            },
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
