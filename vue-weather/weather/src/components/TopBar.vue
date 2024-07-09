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
          {{ weatherinfo.temperature }}℃ {{ weatherinfo.winddirection }}风{{weatherinfo.windpower}}级
        </div>
      </div>
      <div class="right">
        <span class="iconfont infobtn"></span>
        <span class="iconfont plusbtn" v-if="showPlusButton"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getIpWeather } from "@/utils/weatherinfo";

const route = useRoute();
const showPlusButton = ref(false);
const weatherinfo = ref({});
//实现仅在searchview中加载？
watch(route, (newvalue) => {
  showPlusButton.value = newvalue.path === "/search";
});
//根据city值检索 list中是否含有该list

onMounted(async () => {
  showPlusButton.value = route.path === "/search";
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
