//希望将name这个标签暴露给外部使用
import {name as _name} from './b.js'
const name = "peiqi";
//很多时候一个模块很可能就导出一个内容 推荐使用export default 一个模块中可以有多个export(分别导出) 但是只能有1个export default(默认导出)
export default function () {
  console.log(_name);
}
