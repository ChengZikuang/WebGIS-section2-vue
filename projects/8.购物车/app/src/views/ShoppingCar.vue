<template>
    <el-table :data="productStore.shoppingcarList" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="price" label="Price" />
        <el-table-column prop="number" label="Number" />
    </el-table>
    <div class="buttom" v-if="productStore.shoppingcarList.length">
        <h2>商品总计:{{productStore.totalPrice}}</h2>
        <el-button type="primary" @click="productStore.settlement">结算</el-button>
    </div>
</template>

<script setup>
import { useProductListStore } from "../stores/index.js";
const productStore = useProductListStore();

</script>

<style lang="scss" scoped>

</style>