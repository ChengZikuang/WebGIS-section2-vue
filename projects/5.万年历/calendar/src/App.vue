<template>
    <div >
        <SearchBar/>
        <GridTable/>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import GridTable from './components/GridTable.vue';

export default {
    
    async mounted(){
        await this.fetchData();
    },
    components: {
        SearchBar,
        GridTable,
    },
    data() {
        return {
            Year:"2024",
            Month:"6",
            Day:"14",
            list: [],
            };
        },
    methods:{
        // Y,M,return list
        GetList(){
            
        },
        async fetchData(){
            const response = await fetch(`https://www.36jxs.com/api/Commonweal/almanac?sun=${this.Year}-${this.Month}-${this.Day}`);
            const res = await response.json();
            console.log(res);
        },
    },

}
</script>

<style  scoped>

</style>