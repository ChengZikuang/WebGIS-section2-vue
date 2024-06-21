<template>
    <div class="home">
        <input type="text">
        <MySubchild></MySubchild>
    </div>
</template>
<script>
import MySubchild from './MySubchild.vue';
export default{
    components:{
        MySubchild,
    },
}

</script>
<style scoped>
input{
    background-color: green;
}
</style>