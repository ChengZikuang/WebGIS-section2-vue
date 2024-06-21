<template>
    <el-table :data="productStore.productList" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="price" label="Price" />
        <el-table-column prop="number" label="Number" />
        <el-table-column label="Operations">
            <template #default="scoped">
                <el-button type="success" @click="toshoppingcar(scoped.row)">添加至购物车</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { useProductListStore } from "../stores/index.js";
const productStore = useProductListStore();
productStore.initProducts();
const toshoppingcar = (row) => {
    productStore.getshopList(row);
}
</script>

<style lang="scss" scoped></style>