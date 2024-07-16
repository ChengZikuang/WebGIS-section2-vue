<template>
  <div class="top">
    <div class="ctn">
      <div class="left">
        <router-link
          to="/"
          style="text-decoration: none; color: white; font-size: 2rem"
        >
          <div class="home">
            <!-- :before -->
            新中地天气
          </div></router-link
        >
        <div class="ipinfo">
          {{ weatherinfo.city }} 实时天气：{{ weatherinfo.weather }}
          {{ weatherinfo.temperature }}℃ {{ weatherinfo.winddirection }}风{{
            weatherinfo.windpower
          }}级
        </div>
      </div>
      <div class="right">
        <span class="iconfont infobtn"></span>
        <span
          class="iconfont plusbtn"
          v-if="showPlusButton()"
          @click="addList"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getIpWeather } from "@/utils/weatherinfo";
import { useCityListStore } from "@/stores/citylist";

const route = useRoute();
const cityliststore = useCityListStore();

const weatherinfo = ref({});
//实现仅在searchview中加载
// watch(route, (newvalue) => {
//   showPlusButton.value =
//     newvalue.path === "/search" && !cityliststore.inList(route.query.cityname);
// });
const addList = () => {
  cityliststore.addlist(route.query.cityname);
  // showPlusButton.value = false;
};

const showPlusButton =() => {
  //仅在 path为search 且 localstorage中没找到cityname时，才显示+号
  //&& !cityliststore.inList(route.query.cityname)
  if (route.path ==="/search" && !cityliststore.inList(route.query.cityname)) {
    return true
  }else{
    return false
  }
};
onMounted(async () => {
  weatherinfo.value = await getIpWeather();
});
</script>

<style lang="scss" scoped>
.top {
  position: sticky;
  height: 80px;
  top: 0;
  z-index: 10;
  box-shadow: 0 5px 10px -5px rgb(0, 91, 123);
  background-color: rgb(0, 102, 138);
  text-align: center;
  line-height: 80px;
  .ctn {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      gap: 1rem;
    }
    .right {
      display: flex;
      gap: 1rem;
      & > span {
        cursor: pointer;
      }
      .infobtn::before {
        content: "\e557";
        font-size: 1.5rem;
      }
      .plusbtn::before {
        content: "\e55e";
        font-size: 1.5rem;
      }
    }
  }
}
</style>
