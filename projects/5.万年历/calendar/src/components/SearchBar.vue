<template>
    <div class="search">
        <button>calendar</button>
        <!-- input -->
         <select name="year" id="year" v-model="year">
            <option  v-for="(item,index) in years" :value="item" :key="index">{{item}}年</option>
         </select>
         <select name="month" id="month" v-model="month">
            <option v-for="(item,index) in months" :key="index" :value="item">{{item}}月</option>
         </select>
         <button @click="BacktoToday">Today</button>
    </div>
</template>


<script>
import { getYears,getMonth,getToday} from '@/utils';

    export default {
        props:["Year","Month"],
        data(){
            return {
                years:[],
                months:[],
                year:"",
                month:"",
            }
        },
        mounted(){
            // v-for绑定显示生成固定的年份和月份
            this.years = getYears();
            this.months = getMonth();
            this.year = getToday().year;
            this.month = getToday().month;
        },
        methods:{
            // select变化时，传递变化后的参数Y,M给父组件
            // 监听today点击事件，获取此刻日期Y,M,D，并传递给父组件
            BacktoToday(){
                this.year = getToday().year;
                this.month = getToday().month;
                let day = getToday().day;
                this.$emit("backtoday",day);
            }
        },
        watch:{
            year(value){
                this.$emit('renderTable',{
                    year:value,
                    month:this.month,
                })
            },
            month(value){
                this.$emit('renderTable',{
                    year:this.year,
                    month:value,
                })
            },
            Year(value){
                this.year = value;
            },
            Month(value){
                this.month = value;
            },
        },
    }
</script>

<style  scoped>
.search{
    padding: 20px;
    width: 600px;
    display: flex;
}
button{
    flex: 1;
    margin: 0 20px 0 20px;
}
select{
    flex: 1;
    margin-left: 10px;
}
</style>