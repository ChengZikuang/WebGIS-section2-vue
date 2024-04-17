//发送请求 得有对应的后端的接口来处理 post=>处理post请求的接口

//利用xhr实现一个post请求
function postData(url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    //设置请求的内容格式
    xhr.setRequestHeader("Content-Type", "application/json");
    //post请求需要将准备的数据发送服务器 通过send方法的参数发送的
    //数据交互的时候传递的数据是Json字符串
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log("post请求成功了");
        console.log(xhr.response);
        resolve(xhr.response);
      }
    };
    //post完成之后会触发load事件
    xhr.onload = function () {
      if (xhr.status >= 200) {
        console.log(xhr.response, "post请求成功了");
        resolve(xhr.response);
      }
    };
  });
}
function getData(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    //数据交互的时候传递的数据是Json字符串
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr.response);
      }
    };
  });
}
// { "id": "3", "title": "peiqi", "views": 300 }
let data = { title: "james", views: 100 };
const btns = document.querySelectorAll("button");
btns[0].onclick = function () {
  //post请求发送成功之后会重新刷新页面
  postData("http://localhost:3000/posts", data).then((res) => {
    console.log(res, "post");
  });
};
btns[1].onclick = function () {
  getData("http://localhost:3000/posts").then((res) => console.log(res, "get"));
};
