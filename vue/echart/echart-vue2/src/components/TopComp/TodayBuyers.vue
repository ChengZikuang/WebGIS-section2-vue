<template>
  <div class="TodayBuyers">
    <CommonCard :title="title" :number="number">
      <v-chart :option="option" class="chart" />

      <template v-slot:footer>
        <span>退货率</span><span class="bold">3.57%</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCard from "@/components/TopComp/CommonCard.vue";
export default {
  data() {
    return {
      title: "今日用户交易数",
      number: "30",
      option: {
        xAxis: {
          boundaryGap: false,
          show: false,
          type: "category",
          data: [
            "00:00",
            "03:00",
            "05:00",
            "07:00",
            "09:00",
            "11:00",
            "13:00",
            "15:00",
            "17:00",
            "19:00",
            "21:00",
            "23:00",
          ],
        },
        yAxis: {
          type: "value",
          show: false,
        },
        grid: {
          top: "100%",
          left: "100%",
          right: "100%",
          buttom: "100%",
        },
        tooltip:{},
        series: 
          {
            name:"实时交易量",
            data: [123, 432, 541, 234, 576, 112, 789, 98, 787, 132, 450, 435, 666,],
            type: "bar",
            barWidth:"60%"
          },
        
      },
    };
  },
  components: {
    CommonCard,
  },
};
</script>

<style lang="scss" scoped></style>
