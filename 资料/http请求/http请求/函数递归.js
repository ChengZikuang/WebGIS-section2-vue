//函数递归表示可以一个函数内部调用自己 一定得有一个终止条件
function fn(n) {
  if (n < 1) {
    return;
  }
  n--;
  console.log(n);
  fn(n);
}
fn(10);
