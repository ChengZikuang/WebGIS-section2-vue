<template>
  <div class="home">
    <FirstColumn/>
  </div>
</template>

<script>
import FirstColumn from "./components/FirstColumn.vue";
export default {
  components: {FirstColumn,},
};
</script>

<style lang="scss" scoped></style>
<style>
.home{
    width: 100%;
    padding: 20px;
    background-color: #eee;
}
</style>
