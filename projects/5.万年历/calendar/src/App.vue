<template>
    <div>

    </div>
</template>

<script>

export default {
    
    async mounted(){
        const response = await fetch("https://www.36jxs.com/api/Commonweal/almanac?sun=2024-06-14");
        const res = await response.json();
        console.log(res);
    }
}
</script>

<style lang="scss" scoped>

</style>