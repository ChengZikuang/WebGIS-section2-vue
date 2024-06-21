import {defineStore} from 'pinia';
import { ref } from 'vue';

const useMainStore = defineStore("main",() => {
    const count = ref(0);
    const addCount = () => {
        count.value++;
    }
    return{
        count,
        addCount,
    }
})
// const useLoginStore = defineStore("login",() => {
//     const count = ref(0);
//     const addCount = () => {
//         count.value++;
//     }
//     return{
//         count,
//         addCount,
//     }
// })

export  {useMainStore};