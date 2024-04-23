<template>
    <div class="ms">
        <div >myside</div>
        <p>{{ value }}</p>
        <button @click="$emit('input','change text')">change text</button>
    </div>
</template>
<script>
export default{
    props:["value"]
}
</script>
<style>
.ms {
    background-color: gold;
    float: right;
    width: 40%;
    height: 80vh;
}
</style>