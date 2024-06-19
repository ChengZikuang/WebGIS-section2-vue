<template>
    <div class="search w">
        <el-table :data="data" stripe style="width: 100%" >
            <el-table-column prop="name" label="歌曲名称" width="400" />
            <el-table-column prop="artist" label="歌手名称" width="180" />
            <el-table-column prop="album" label="专辑" />
            <el-table-column prop="duration" label="歌曲时长" align = "center"/>
        </el-table>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue'
const route = useRoute();
const songvalue = route.query.keywords;
const data = ref([]);
async function initData(params) {
    const response = await fetch(`http://localhost:3000/search?keywords=${params}`);
    //解构
    const { result: { songs }, } = await response.json();
    console.log(songs);
    data.value = songs.map(
        (item) => {
            return {
                name: item.name,
                artist: formateArtist(item.artists),
                album: item.album.name,
                duration: formateDuration(item.duration),
            }
        }
    )
}
//ms=>0x分:xx秒
function formateDuration(duration) {
    // Convert duration from milliseconds to seconds
    let seconds = Math.floor(duration / 1000);  // 1 second = 1000 milliseconds

    // Calculate minutes and remaining seconds
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    // Format the time as xx分:xx秒
    let formattedTime = `${formattedMinutes}:${remainingSeconds.toString().padStart(2, '0')}`;

    return formattedTime;
}
//将数组对象的某一键值对内容可能为一个或多个的情况转换为新数组
function formateArtist(arr) {
    let newArr = [];
    if (arr.length === 1) {
        newArr = [arr[0].name]; // If there's only one item, put its name into a new array
    } else {
        newArr = arr.map(item => item.name); // Extract the 'name' property into a new array
    }
    return newArr;
}
onMounted(async () => {
   await initData(songvalue);
})

//watch songvalue 值变换，更新data
watch(route,async (newValue) => {
    await initData(newValue.query.keywords);
})
</script>

<style lang="scss" scoped>
.search {
    background-color: #eee;

    :deep(.el-table .cell){
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>