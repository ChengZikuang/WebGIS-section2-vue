function cloneDeep(obj) {
  if (typeof obj !== "object" || obj === null) {
    //说明是基本数据类型
    return obj;
  }
  let _obj;
  //进入到这里说明不是基本数据类型 就是数组或者对象
  if (Array.isArray(obj)) {
    _obj = [];
  } else {
    _obj = {};
  }
  //实现深拷贝无非就是一个操作 就是把原始对象obj身上每一组kv 在这个新克隆对象上再写一次
  for (let key in obj) {
    //拿到原始对象身上的每一组key value
    // let value = obj[key];
    //value可能是基本值类型 也可能是对象或者数组 如果是基本值 直接赋值 如果是对象数组 要将遍历取值赋值这个操作继续执行 直到最终的value是基本值未知
    _obj[key] = cloneDeep(obj[key]);
  }
  return _obj;
}
//data应该分为2中情况考虑 如果是基本数据类型 可以通过直接赋值来实现
// cloneDeep(data);
let a = [1, 2, { a: [{ b: 1 }] }];
let b = cloneDeep(a);
a[2].a[0].b = 2;
console.log(b[2].a[0].b);
// let b = {
//   a: 1,
//   b: { c: 2 },
// };
// let a = [1, { a: 3 }];
// let b = [1, { a: 3 }];
// a[1].a = 4;
// console.log(b);
// for (let i in a) {
//   console.log(i);
// }
