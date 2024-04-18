//node.js可运行
// const _ = require("lodash");
//node.js不可运行？为什么？此为ESM语法规范，修改package.json中"type":"module"，
import _ from "lodash";
// import "css-loader";
// import "style-loader";

const a = [1,2,[3,[4,5]]];
const b = _.cloneDeep(a);
a[0] = 2;
console.log(b);
console.log("ok");