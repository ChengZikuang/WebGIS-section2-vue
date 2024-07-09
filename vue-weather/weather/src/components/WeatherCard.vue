<template>
  <div class="weathercard">
    <!-- eltable4*4 -->
    <div class="table">
      <div class="column">
        <span>今日</span><span>07-04</span><span>阴</span
        ><span>风力 1-3级</span>
      </div>
      <div class="column">
        <span>今日</span><span>07-04</span><span>阴</span
        ><span>风力 1-3级</span>
      </div>
      <div class="column">
        <span>今日</span><span>07-04</span><span>阴</span
        ><span>风力 1-3级</span>
      </div>
      <div class="column">
        <span>今日</span><span>07-04</span><span>阴</span
        ><span>风力 1-3级</span>
      </div>
    </div>
    <!-- echart 双折线 -->
    <div>
      <v-chart :option="option" style="height: 160px"></v-chart>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import { getAllWeather } from '@/utils/weatherinfo';
const option = ref({});
const formatterOption = () => {
  //data.daytemp/nighttemp=>[1,2,3,4]
  let daytemp = [35, 32, 28, 28];
  let nighttemp = [26, 25, 23, 26];
  option.value = {
  grid: [
    {
      left: 20,
      top: 20,
      right: 20,
      bottom: 0,
    },
  ],
  xAxis: {
    type: "category",
    show: false,
    data: ["Today", "Tomrrow", "Weekday1", "Weekday2"],
  },
  yAxis: {
    type: "value",
    show: false,
  },
  series: [
    {
      name: "day",
      type: "line",
      data: daytemp,
      label: {
        show: true,
        formatter(params) {
          return "白" + params.value + "℃";
        },
        color: "white",
      },
    },
    {
      name: "night",
      type: "line",
      data: nighttemp,
      label: {
        show: true,
        position: "bottom",
        formatter(params) {
          return "晚" + params.value + "℃";
        },
        color: "white",
      },
    },
  ],
}
}
/* 
{
label: 今天，明天，周(2=>二)，周(3=>三)//7？
date: 2024-07-09 => 07-09
weather：dayweather
wind: 风力{daypower}级
temp:{
daytemp:daytemp,
nighttemp:nighttemp
}
}
 */
// const weatherinfo = ref([{},{},{},{}])
const formatterInfo = (res) => {
  console.log(res);
  return res;
}
onMounted(async() => {
  let res = await getAllWeather("南京市");
  formatterInfo(res);
  formatterOption();
})
</script>

<style lang="scss" scoped>
.weathercard {
  // :deep(.el-col){
  //     text-align: center;
  // }
  background-color: rgb(0, 78, 113);
  .table {
    display: flex;
    justify-content: space-around;
    padding: 50px;
    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      span {
        text-align: center;
      }
    }
  }
}
</style>
