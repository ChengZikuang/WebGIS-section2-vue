import axios from "axios";
const btns = document.querySelectorAll("button");
btns[0].onclick = function () {
  //发送一个post请求 增
  let data = { title: "peiqi", views: 200 };
  axios.post("http://localhost:3000/posts", data).then((res) => {
    console.log(res.data, "post");
  });
};
btns[1].onclick = function () {
  //发送一个get请求 查
  axios.get("http://localhost:3000/posts").then((res) => {
    //axios会将请求的数据结果进行一层封装 将数据结果放到返回对象的data这个字段中
    console.log(res.data, "get");
  });
};
btns[2].onclick = function () {
  //发送一个delete请求 删
  axios
    .delete("http://localhost:3000/posts/rPkyv50")
    .then((res) => console.log(res));
};
btns[3].onclick = function () {
  //发送一个put请求 改
  axios
    .put("http://localhost:3000/posts/1", { title: "haha", views: 300 })
    .then((res) => console.log(res, "put"));
};
