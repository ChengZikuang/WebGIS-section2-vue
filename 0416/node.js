const _ = require("lodash");

console.log("hello node.js");
const array = [1, [2, [3, [4]], 5]];
let newarr = _.flattenDeep(array);
console.log(newarr);

