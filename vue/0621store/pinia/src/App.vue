<template>
  <div>
    <p>{{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from './store/index.js';
const mainstore  = useMainStore();
//storeToRefs
const {count } = storeToRefs(mainstore)
//无commit dispatch
const add = () => {
  mainstore.addCount();
}
</script>

<style lang="scss" scoped>

</style>