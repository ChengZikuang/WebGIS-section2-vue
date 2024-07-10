## *before**

- [ ] Taiwind CSS  手册学习。

- [ ] store在本项目里面有何作用？？？


- [ ] 复习history 存储浏览器数据。


项目分析：
1.topbar
功能1：首页router-link跳转home 
功能2：读取本地ip，渲染动态数据
功能3：i按钮动画设计，（隐藏 ）（在searchview界面遍历history list 中是否有该城市）add按钮
2.views
homeview：
搜索栏，input内容绑定search value 调用api检索直至所有数据，跳转至search view 界面
（隐藏 history list）城市信息条，点击查看跳转view，点击删除修改参数history list
（封装插槽，传入城市名称）最近几天天气信息 table+echart
searchview：
当前城市当前天气信息
（封装插槽）最近几天天气信息 table+echart
3.component
topbar
插槽 infocard
4.store
封装history list，findin返回传入city是否存在，push及pop增删list，
5.axios
封装getData
6.plugins
element-ui : input flex slidebar 

- [x] 路由跳转如何携带参数？


## 0704

### doing

- [ ] plugins的js中，也和main.js中一样createApp吗，此时两个js的app实例难道不是两个对象吗？vue2中，直接使用Vue时，是指同一个实例吗？
- [ ] 看初始化的main.css 和 base.css。
- [ ] @路径和../路径区别？
- [ ] ./router？from 'vue-router'？
- [x] sticky元素为什么无法遮挡下面的内容？

### todo

- [x] searchview界面
- [x] home跳转至search
- [x] echat图标修改
- [ ] 样式修改（等）

## 0708

### doing

useRouter useRoute，在home.vue中是否需要定义两个才能接受到router中的数据？

web端使用html+css渲染，那么客户端使用的是什么技术栈？

### todo

- [ ] autocomplete input 根据搜索值检索效果
- [ ] weathercard 传入city值,组件内定义服务器请求结果处理
- [x] topbar 阴影效果
- [ ] store使用，history储存
- [ ] infobtn 消息弹窗效果

## 0709：

完成axios请求封装；完成utils对服务器api调用及数据返回；添加icon

完成路由跳转时Top组件中要素的显示隐藏；

- [x] 待完成weathercard.vue的数据转换,视图更新为响应性

### todo:

searchview.vue中待完成

- [ ] //cityname 1.input输入 2.citylist info 点击数据携带

TopBar.vue中待完成

- [ ] //点击加号加入localhistory事件，在search中判断+号是否显示
- [ ] //btn hover 动画效果
- [ ] i 点击事件遮罩message 弹窗效果=>element plus

Homeview.vue中待完成

- [ ] 点击“查看”“删除”功能实现（查看为跳转路由，query为该行城市名称；删除为store.list slice）
- [ ] citylist v-for:store.list
- [ ] 搜索框的自动补充时，citylist区域将被隐藏
- [ ] city list 滑块效果

stores中待完成

- [ ] add,delete

## 0710

### todo

weatherCard.vue

- [ ] 今天明天固定替换
- [ ] 接受传参