<template>
    <div>
        <button>calendar</button>
        <!-- input -->
         <select name="Year" id="Year">
            <option value="2014">2014</option>
            <option value="2024">2024</option>
         </select>
         <select name="Month" id="Month">
            <option value="1">1月</option>
            <option value="2">2月</option>
         </select>
         <button>Today</button>
    </div>
</template>

<script>
    export default {
        methods:{
            // v-for绑定显示生成的年份和月份

            // select变化时，传递变化后的参数Y,M给父组件

            // 监听today点击事件，获取此刻日期Y,M,D，并传递给父组件
        }
    }
</script>

<style lang="scss" scoped>

</style>