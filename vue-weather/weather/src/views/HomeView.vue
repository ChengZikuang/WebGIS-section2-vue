<template>
  <div class="ctn">
    <!-- input -->
    <el-input
      v-model="input"
      placeholder="请输入城市名"
      @keyup.enter="search"
    />
    <!-- citylist -->
    <div class="cityList">
      <div class="cityinfo">
        <div class="info"><span>南京市</span> <span>26度</span></div>
        <div class="btn" @mouseover="handle">
          <button>查看</button><button>删除</button>
        </div>
      </div>
      <div class="cityinfo">
        <div class="info"><span>武汉市</span> <span>26度</span></div>
        <div class="btn" @mouseover="handle">
          <button>查看</button><button>删除</button>
        </div>
      </div>
    </div>
    <!-- weather info -->
    <div class="weather">
        <h3>近期天气</h3>
        <WeatherCard/>
    </div>
  </div>
</template>

<script setup>
import WeatherCard from "../components/WeatherCard.vue"
import { ref } from "vue";

const input = ref("");
const search = () => {
  console.log(input.value);
};
const handle = () => {
  console.log("mouseover");
};
</script>

<style lang="scss" scoped>
.el-input {
    margin-top: 30px;
  margin-bottom: 30px;
}
.cityList {
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
.weather{
        h3{
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
</style>
