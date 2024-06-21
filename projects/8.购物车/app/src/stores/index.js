import { ref,computed } from 'vue'
import { defineStore } from "pinia";
import { getProducts,buyProducts } from "../api/api.js";
import { ElMessage } from 'element-plus'


export const useProductListStore = defineStore('ProductList',() => {
  const productList = ref([]);
  //初始化products
  const initProducts =async () => {
    let res = await getProducts();
    productList.value = res;
  }
  //初始shoppingcarList
  const shoppingcarList = ref([]);
  const getshopList = (item) => {
    if (item.number <1 ) {
      ElMessage.error({
        message:'商品数量不能小于1',
        duration:1000,
      })
      return
    }
    item.number--;
    //shopcar视图
    const element = shoppingcarList.value.find((element) => element.id === item.id)
    if (!element) {
      shoppingcarList.value.push({
        id:item.id,
        title:item.title,
        price:item.price,
        number:1,
      })
    } else {
      element.number++;
    }
    shoppingcarList.value.sort((a,b)=> a.id - b.id)
  }
  //总价
  const totalPrice = computed(() => {
    return shoppingcarList.value.reduce((pre,cur) => {
      return pre+cur.number*cur.price
    },0)
  })
  //结算
  const settlement = async () => {
    if (await buyProducts()) {
      ElMessage.success({
        message:"结算成功",
        duration:1000
      })
      shoppingcarList.value = []
    } else {
      ElMessage.error({
        message:"结算失败",
        duration:1000
      })
    }
  }
  return{
    productList,
    initProducts,
    shoppingcarList,
    getshopList,
    totalPrice,
    settlement
  }
})