<template>
    <div class="top-header">
        <div class="content w">
            <router-link to="/">
                <h1 class="logo"></h1>
            </router-link>
            <div class="search-input">
                <el-input v-model="input" style="width: 240px" placeholder="Type something" :prefix-icon="Search"
                    @keyup.enter="SearchSong" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const input = ref("");
const router = useRouter();
const SearchSong = () => {
    router.push(`/search?keywords=${input.value}`)
}
</script>

<style lang="scss" scoped>
.top-header {
    height: 70px;
    background-color: #242424;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: inherit;

        h1 {
            width: 177px;
            height: 76px;
            background: url("https://s2.music.126.net/style/web2/img/frame/topbar.png?1fe3017650c478831bfff5457b733a45") no-repeat;
        }

        .el-input {
            :deep(.el-input__wrapper.is-focus) {
                box-shadow: none;
            }

            ;

            :deep(.el-input__wrapper) {
                border-radius: 18px;
            }
        }
    }
}
</style>