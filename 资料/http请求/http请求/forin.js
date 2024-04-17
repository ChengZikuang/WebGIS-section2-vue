//for in循环会遍历它原型链上的属性
let a = { b: 1, c: 2 };
a.__proto__.d = 3; //
for (let i in a) {
  console.log(i, a[i]);
}
