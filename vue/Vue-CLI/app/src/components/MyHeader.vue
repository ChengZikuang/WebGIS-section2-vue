<template>
    <div class="mh">
        <div >myheader</div>
        <p>{{ mmsg }}</p>
        <button @click="changemsg">changemsg</button>
    </div>
</template>

<script>
export default{
    props:["mmsg"],
    methods:{
        changemsg(){
            this.$emit("change-enevt")
        }
    }
}
</script>

<style>
.mh {
    background-color: aqua;
    height: 20vh;
}
</style>