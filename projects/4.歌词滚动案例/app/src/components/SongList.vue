<template>
    <div class="mediacontrol">
        <audio controls="controls" src = "./music.mp3" @timeupdate="getNowTime($event)"></audio>
        <ul class="songlist" ref="songlistRef">
            <li v-for="item,index in list" :key="index" :class="{active:index===activeIndex}" ref="liRefs">{{ item.values }}</li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick} from 'vue';

const Data = ref([])
const list = ref([])
const activeIndex = ref(0)
const songlistRef = ref(null);
const liRefs = ref([]);
/*  */
//更新songlist视图
function renderView(NowTime) {
    //确定播放行
    let line = list.value.findIndex((element) => element.times > NowTime );
    //比较时间，确定哪一行歌词背景值改为白色
    activeIndex.value = line-1;
    //将li内容向上移动，高亮歌词为视口中心
    // 计算滚动到居中位置的偏移量
    if (activeIndex.value >= 0 && songlistRef.value && songlistRef.value.clientHeight > 0) {
        nextTick(() => {
        let liHeight = liRefs.value[activeIndex.value]?.clientHeight;
        let scrollOffset =
        activeIndex.value * liHeight - (songlistRef.value.clientHeight / 2 - liHeight / 2);
        songlistRef.value.scrollTop = scrollOffset;
    })}
}
//获取当前时间
function getNowTime(e) {
    let NowTime = e.target.currentTime;
    renderView(NowTime);
} 
//获取歌词时间
function getLyricsTime(an){
    let mins = (+an.slice(1,3))*60
    let secs = (+an.slice(4,9))
    return mins + secs
}
//将数据拆解为毫秒时间+歌词数组
function getList(data) {
    list.value = data.map((item) => {
        let time = getLyricsTime(item.slice(0,10));
        let value = item.slice(10);
        return {
            times:time,
            values:value,
        }
    })
}
const fetchData = async () => {
        const response = await fetch('http://project.x-zd.net:3001/apis/songword');
        const result = await response.json();
        Data.value = result.data.split("\n");
        getList(Data.value);
    }
onMounted(() =>{
    fetchData();
    renderView();
})
</script>

<style lang="scss" scoped>
.mediacontrol{
    width: 400px;
    text-align: center;
    //最大高度
    .songlist{
        margin-top: 20px;
        max-height: 400px;
        overflow-y: hidden;
        li{
        list-style: none;
    }
    }
    
    
    .active{
        color: aqua;     
        transform: scale(1.2);
    }
}
</style>