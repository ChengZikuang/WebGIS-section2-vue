<template>
    <div class="table">
        <div class="weekname">
            <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>
        </div>
        <div class="grid">
            <span 
            :class="{gray: item.index !==1,isActive: item.value === Day&&item.index===1}"  
            v-for="(item,index) in list" :key= index
            @click="changeTable(item)"
            >{{ item.value }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        //接受父组件的list数组，渲染至grid布局\
        props:["list","Day"],

        //点击某一天，即改变此格为isActive样式

        //点击上月或下月日期，即会重新渲染视图至选中日期的月份
        methods:{
            changeTable(item){
                this.$emit("changeList",item)
            }
        }
    }
</script>

<style scoped>
/*  grid 布局，7*6 */
.table{
    width: 600px;
}
.weekname{
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}
.weekname span{
    flex:1;
    text-align: center;
}
.grid{
    display: grid;
    grid-template-rows: repeat(6,1fr);
    grid-template-columns: repeat(7,1fr);
    gap: 20px;
}
.grid span{
    text-align: center;
    height: 40px;
    width: 40px;
    justify-self: center;
    align-content: center;
    border-radius: 5px;
}
/* 上月和下月，字体颜色为gray */
.gray{
    color: gray;
}
/* 鼠标移过样式 hover */
span:hover{
    background-color: skyblue;
    cursor: pointer;
}

/* 选中日期样式 .isActive*/
.isActive{
    background-color: skyblue;
}
</style>