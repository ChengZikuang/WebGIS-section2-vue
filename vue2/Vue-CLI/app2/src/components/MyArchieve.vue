<template>
    <div class="archieve">
        <input type="text">
    </div>
</template>
<script>
export default {
    activated(){
        alert("activeted");
    },
    deactivated(){
        alert("deactivated");
    }
}
</script>

<style scoped>
input{
    background-color: pink;
}
</style>