<template>
    <div >
        <SearchBar @renderTable="renderTable" :Year="Year" :Month="Month" @backtoday="backtoday"/>
        <GridTable :list="list" :Day="Day" @changeList="changeList"/>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import GridTable from './components/GridTable.vue';
import {GetList, getToday} from './utils/index.js'


export default {
    mounted(){
        this.Day = getToday().day;
        // await this.fetchData();
    },
    components: {
        SearchBar,
        GridTable,
    },
    data() {
        return {
                Year:"",
                Month:"",
                Day:"",
                list: [],
            };
        },
    methods:{
        backtoday(day){
            this.Day = day;
        },
        changeList(item){
            if (item.index===1) {
                this.Day = item.value;
            }
            if(item.index === 0){
                this.Day = item.value;
                if(this.Month === 1){
                    this.Year--;
                    this.Month = 12;
                    return
                }
                this.Month --;
            }
            if(item.index === 2){
                this.Day = item.value;
                if(this.Month === 12){
                    this.Year++;
                    this.Month = 11;
                    return
                }
                this.Month ++;
            }
        },
        renderTable({year,month}){
            this.Year = year;
            this.Month = month;
            this.list = GetList(year,month);
        },
        // async fetchData(){
        //     const response = await fetch(`https://www.36jxs.com/api/Commonweal/almanac?sun=${this.Year}-${this.Month}-${this.Day}`);
        //     const res = await response.json();
        //     console.log(res);
        // },
    },

}
</script>

<style scoped>
*{
    text-align: center;
    box-sizing: border-box;
}
</style>