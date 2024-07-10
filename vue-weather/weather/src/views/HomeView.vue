<template>
  <div class="ctn">
    <!-- 输入框 -->
    <el-input
      v-model="input"
      placeholder="请输入城市名"
      @keyup.enter="search"
    />
    <!-- 城市列表 -->
    <!-- <div class="cityList">
      <div class="cityinfo" @mouseover="handle">
        <div class="info"><span>南京市</span> <span>26度</span></div>
        <div class="btn">
          <button @click="search">查看</button><button>删除</button>
        </div>
      </div>
      <div class="cityinfo" @mouseover="handle">
        <div class="info"><span>武汉市</span> <span>26度</span></div>
        <div class="btn">
          <button @click="search">查看</button><button>删除</button>
        </div>
      </div>
    </div> -->
    <!-- 天气信息 -->
    <!-- //解决初始加载weatherinfo无值无法传递至weathercard -->
    <div class="weather" v-if="weatherinfo.city">
      <h3>近期天气</h3>
      <WeatherCard :cityname="weatherinfo.city"/>
    </div>
  </div>
</template>

<script setup>
import WeatherCard from "../components/WeatherCard.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getIpWeather } from "@/utils/weatherinfo";

const input = ref("");
const weatherinfo = ref({});
const router = useRouter();


// 跳转路由
const search = () => {
  // 方式一：通过输入框输入 方式二：通过城市列表查看按钮
  router.push({ path: "/search", query: { cityname: input.value } });
};

// 动画形式修改布局
const handle = () => {
  console.log("mouseover");
};

onMounted(async () => {
  weatherinfo.value = await getIpWeather();
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
      //   display: none;
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
