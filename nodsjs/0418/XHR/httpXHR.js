
const btns = document.querySelectorAll("button");
const datatrial = {
    "id": "2",
    "title": "b title",
    "views": 400
};
btns[0].onclick = async function () {
    const res = await get("http://localhost:3000/posts");
    console.log(res);
}
btns[1].onclick = async function () {
    const res = await post("http://localhost:3000/posts",datatrial);
    console.log(res);
}



function get(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log("get_success");
                resolve(JSON.parse(xhr.response));
            }
        }
    })
}
function post(url,data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.send(JSON.stringify(data));
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4) {
        //         console.log("post_success");
        //         resolve(JSON.parse(xhr.response));
        //     }
        // }
        xhr.onload = function () {
            if (xhr.status >= 200) {
                console.log("post_success");
                resolve(xhr.response);
            }
        }
    })
}