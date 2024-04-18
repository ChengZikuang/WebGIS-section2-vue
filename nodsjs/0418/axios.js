const axios = require('axios');
let datatrial = {
    "title": "axios title",
    "views": 300
}
// axios.post("http://localhost:3000/posts", {
//     "id": "4",
//     "title": "axios title",
//     "views": 200
// }).then(function (response) {
//     console.log(response, "res");
// })
const btns = document.querySelectorAll("button");
btns[0].onclick = function () {
    axios.post("http://localhost:3000/posts",datatrial).then(res=>{
        console.log(res.data,"data");
    });
}
btns[1].onclick = function () {
    axios.delete("http://localhost:3000/posts/e8a0").then(res=>{
        console.log(res,"res");
    });
}
btns[2].onclick = function () {
    axios.put("http://localhost:3000/posts/1",{title: "new title",view:300}).then(res=>{
        console.log(res,"res");
    });
}
btns[3].onclick = function (){
    axios.get("http://localhost:3000/posts").then(function (res) {
        console.log(res.data);
    })
}

