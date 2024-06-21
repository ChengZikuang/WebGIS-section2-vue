import { ref } from 'vue'
import { defineStore } from "pinia";
import { getProducts } from "../api/api.js";
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
      console.log(1);
      element.number++;
    }
    shoppingcarList.value.sort((a,b)=> a.id - b.id)
  }
  return{
    productList,
    initProducts,
    shoppingcarList,
    getshopList
  }
})