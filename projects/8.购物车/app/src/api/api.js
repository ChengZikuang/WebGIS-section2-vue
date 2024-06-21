
const products = [
    {
        id:1,
        title:"iphone 14",
        price:5000,
        number:10,
    },
    {
        id:2,
        title:"xiaomi 13",
        price:2000,
        number:20,
    },
    {
        id:3,
        title:"huawei mate10",
        price:4000,
        number:8,
    },
]
//1s后返回数组
export const getProducts =async () => {
    await wait(1000);
    return products;
}
//结算商品
export const buyProducts =async () => {
    await wait(1000);
    //返回true 页面显示结算成功
    return Math.random()>0.5
}

function wait(delay){
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
}