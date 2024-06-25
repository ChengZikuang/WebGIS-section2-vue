<template>
  <div class="home">
    <FirstColumn/>
    <SecondComp/>
    <ThirdComp/>
    <MapComp/>
  </div>
</template>

<script>
import FirstColumn from "./components/TopComp/index.vue";
import SecondComp from './components/SecondComp/index.vue';
import ThirdComp from './components/ThirdComp/index.vue';
import MapComp from './components/MapComp/index.vue';
export default {
  components: {FirstColumn,SecondComp,ThirdComp,MapComp},
};
</script>

<style lang="scss" scoped></style>
<style>
.home{
    padding: 20px;
    background-color: #eee;
}
</style>
