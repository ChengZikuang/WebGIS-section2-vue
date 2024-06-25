<template>
  <div class="totalsale">
    <CommonCard :title="title" :number="number">
      <div class="flex">
        <div>
          <span>日同比</span><span class="bold">2.33%</span>
          <!-- 三角形 -->
          <span class="increase"></span>
        </div>
        <div>
          <span>月同比</span><span class="bold">4.14%</span>
          <span class="increase"></span>
        </div>
      </div>
      <template v-slot:footer>
        <span>昨日销售额</span><span class="bold">￥200000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import CommonCard from "@/components/TopComp/CommonCard.vue";
export default {
  data() {
    return {
      title: "累计销售额",
      number: "120000",
    };
  },
  components: {
    CommonCard,
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}
</style>
