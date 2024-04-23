<template>
    <div class="subchild">
        <p>{{ subtext }}</p>
        <p ref="p">{{ msg }}</p>
    </div>
</template>
<script>
export default{
    data(){
        return {
            subtext :"subtext",
        }
    },
    inject:["msg"],
    mounted(){
        console.log(this.$refs.p);
    }
}
</script>