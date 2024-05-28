<template>
    <div class="mediacontrol">
        <audio controls="controls" src = "./music.mp3" ></audio>
        <ul class="songlist">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const data = ref("")
/*  */
const fetchData = async () => {
        const response = await fetch('http://project.x-zd.net:3001/apis/songword');
        const result = await response.json();
        data.value = result;
        console.log(data.value,"data");
    }

onMounted(() =>{
    fetchData();
})
</script>

<style lang="scss" scoped>
.mediacontrol{
    width: 500px;
    li{
        list-style: none;
    }
}
</style>