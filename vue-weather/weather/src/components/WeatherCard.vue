<template>
  <div class="weathercard">
    <!-- eltable4*4 -->
    <div class="table">
      <div class="column" v-for="(item, index) in weatherinfo" :key="index">
        <span>{{ item.label }}</span><span>{{item.date}}</span><span>{{item.weather}}</span
        ><span>{{item.wind}}</span>
      </div>
    </div>
    <!-- echart 双折线 -->
    <div>
      <v-chart :option="option" style="height: 160px"></v-chart>
    </div>
  </div>
</template>
<script>
function formatterWeek(week) {
  switch (week) {
    case "1":
      return "周一";

    case "2":
      return "周二";

    case "3":
      return "周三";

    case "4":
      return "周四";

    case "5":
      return "周五";

    case "6":
      return "周六";

    case "7":
      return "周日";
  }
}
function formatterTemp(temp){
/*0:{daytemp: '28', nighttemp: '25'}
1:{daytemp: '26', nighttemp: '23'}
2:{daytemp: '30', nighttemp: '25'}
3:{daytemp: '30', nighttemp: '25'}
to
daytemp:[28,26,30,30]
nighttemp:[25,23,25,25]
*/
let _temp = {
  daytemp:[],
  nighttemp:[],
};
let _daytemp=[];
let _nighttemp=[];
temp.map((item) => {
  _daytemp.push(item.daytemp)
  _nighttemp.push(item.nighttemp)
})
_temp.daytemp = _daytemp
_temp.nighttemp = _nighttemp
return _temp
}
</script>
<script setup>

import { onMounted, ref } from "vue";
import { getAllWeather } from "@/utils/weatherinfo";
const option = ref({});
const props = defineProps({
  cityname: String
});
const formatterOption = (data) => {
  //data.daytemp/nighttemp=>[1,2,3,4]
  const temp = formatterTemp(data);
  
  option.value = {
    grid: [
      {
        left: 10,
        top: 20,
        right: 10,
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
        data: temp.daytemp,
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
        data: temp.nighttemp,
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
  };
};
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
const weatherinfo = ref([{}, {}, {}, {}]);
const formatterInfo = (res) => {
  weatherinfo.value = res.map((item) => {
    return {
      label: formatterWeek(item.week),
      date: item.date.slice(5),
      weather: item.dayweather,
      wind: "风力" + item.daypower + "级",
      temp: {
        daytemp: item.daytemp,
        nighttemp: item.nighttemp,
      },
    };
  });
  //固定显示“今天”“明天”
  weatherinfo.value[0].label = "今天";
  weatherinfo.value[1].label = "明天"
  
};
onMounted(async () => {
  // console.log(props.cityname,"weathercard cityname");
  let res = await getAllWeather(props.cityname);
  formatterInfo(res);
  formatterOption(
    weatherinfo.value.map((item) => {
      return item.temp;
    })
  );
  
});
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
