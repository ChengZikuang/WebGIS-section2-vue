<template>
  <div class="ctn">
    <!-- 输入框 -->
    <el-input
      v-model="input"
      placeholder="请输入城市名"
      @keyup.enter="search(input)"
    />

    <!-- 城市列表 -->

    <div class="cityList" v-if="cityliststore.citylist.length > 0">
      <div
        class="cityinfo"
        @mouseover="handle"
        v-for="(item, index) in cityliststore.citylist"
        :key="index"
      >
        <div class="info">
          <span>{{ item.cityname }}</span> <span>{{ item.nowtemp }}度</span>
        </div>
        <div class="btn">
          <button @click="search(item.cityname)">查看</button
          ><button @click="deletelist(item.cityname)">删除</button>
        </div>
      </div>
    </div>
    <div v-else style="text-align: center">
      暂时没有保存过城市天气信息，请查询后点击右上角"+"号保存。
    </div>

    <!-- 天气信息 -->
    <!-- //解决初始加载weatherinfo无值无法传递至weathercard -->
    <div class="weather">
      <h3>近期天气</h3>
      <WeatherCard :cityname="weatherinfo.city" v-if="weatherinfo.city" />
    </div>
  </div>
</template>

<script setup>
import WeatherCard from "../components/WeatherCard.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getIpWeather } from "@/utils/weatherinfo";
import { useCityListStore } from "@/stores/citylist";

const input = ref("");
const weatherinfo = ref({});
const router = useRouter();
const cityliststore = useCityListStore();

const deletelist = (cityname) => {
  cityliststore.deletelist(cityname);
};
// 跳转路由
const search = (cityname) => {
  // 方式一：通过输入框输入 方式二：通过城市列表查看按钮
  router.push({ path: "/search", query: { cityname: cityname } });
  
};

// 动画形式修改布局
const handle = () => {
  console.log("mouseover");
};

onMounted(async () => {
  weatherinfo.value = await getIpWeather();
  cityliststore.formattercitylist();
});
</script>

<style lang="scss" scoped>
.el-input {
  margin-top: 30px;
  margin-bottom: 30px;
}
.cityList {
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  .cityinfo {
    display: flex;
    .info {
      display: flex;
      justify-content: space-between;
      margin-right: 10px;
      background-color: rgb(0, 78, 113);
      padding: 10px;
      width: 80%;
    }
    .btn {
      display: flex;
      align-items: center;
      button {
        border-style: none;
        margin-right: 5px;
        padding: 10px;
        gap: 10px;
        background-color: rgb(234, 179, 8);
      }
    }
  }
}
.weather {
  h3 {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
