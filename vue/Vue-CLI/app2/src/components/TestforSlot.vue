<template>
    <div>
        <!-- <header>header</header>
        <main>main</main>
        <footer>footer</footer> -->
        <!-- 接受父组件html结构 -->
        <!-- <slot></slot> -->
        <slot name="header" :msg="childmsg"></slot>
        <div>主体部分</div>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default{
    data(){
        return{
            childmsg:"childmsg"
        }
    }
}
</script>