<template>
  <div class="search">
    <div class="title">
      你正在预览{{ cityname }}的天气信息，可以通过右上角的"+"号按钮保存起来
    </div>
    <div class="ctn">
      <div class="cityinfo">
        <span>当日气温是：{{cityinfo.temperature}}摄氏度</span><span>当日天气是：{{cityinfo.weather}}</span
        ><span>当日风向是：{{cityinfo.winddirection}}风 </span><span>当日风力是：{{cityinfo.windpower}}级</span>
      </div>
      <WeatherCard :cityname="cityname"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import WeatherCard from "@/components/WeatherCard.vue";
import { useRoute } from "vue-router";
import { getNowWeather } from "@/utils/weatherinfo";
const route = useRoute();
//cityname 1.input输入 2.citylist info 点击数据携带
const cityname = route.query.cityname;
const cityinfo = ref({})
onMounted(async () => {
  cityinfo.value = await getNowWeather(cityname)
  console.log(cityinfo.value);
})
</script>

<style lang="scss" scoped>
.search {
  .title {
    text-align: center;
    background-color: rgb(0, 78, 113);
    padding: 8px;
  }
  .cityinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
