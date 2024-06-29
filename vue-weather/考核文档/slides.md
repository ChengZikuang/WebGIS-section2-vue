---
# try also 'default' to start simple
theme: 'default'
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./public/slidevbgc.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# Web进阶阶段测试

<p>新中地天气项目说明</p>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
   进入项目说明 <carbon:arrow-right class="inline"/>
  </span>
</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# 阶段测试说明

在完成web进阶的课程学习后，为了检测每位同学的学习效果，特此设置阶段性考核，以下是具体说明：

- 📝 **时间安排** - 在web进阶所有课程结束时执行，学员完成项目预计2~3天
- 🎨 **测试形式** - 考核形式为项目开发，模拟真实开发情景，以当前阶段课程知识为考察目标
- 🧑‍💻 **考核要求** - 学员需要独立完成阶段考核项目，可以百度，可以查阅文档笔记
- 🎥 **评测结果** - 学员完成项目后由授课老师当场检验结果(线上同学通过远程)，并记录结果
- 📤 **项目说明** - 具体的项目说明详见后续PPT


<br>
<br>

在线预览考核项目 [新中地天气](http://project.x-zd.net/weather)
<br/>
<br/>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
transition: slide-up
---

# 项目说明

下面对项目考核的相关技术做出说明和要求：

### 技术栈 (注意版本)

|     |     |
| --- | --- |
| JS框架 | <kbd>Vue2</kbd> / <kbd>Vue3</kbd> 任选一种
| 状态管理 | <kbd>VueX</kbd>  / <kbd>Pinia</kbd> 任选一种
| 脚手架 | <kbd>Vue-CLI</kbd>  / <kbd>Vite</kbd> 任选一种
| 路由跳转 | <kbd>Vue-Router</kbd> 
| 图表绘制 | <kbd>ECharts</kbd> | 
| 网络请求 | <kbd>axios</kbd> | 
| 本地存储 | <kbd>localStorage</kbd> | 


---
transition: slide-down
---

# 接口说明

本项目接口均调用自高德地图开发api 请同学们自行完成准备工作
<br/>
<br/>
本项目中主要调用了三个相关接口 下面逐一说明

### 通过ip地址查询所在城市

|     |     |
| --- | --- |
| 接口地址 | 	https://restapi.amap.com/v3/ip?parameters
| 请求方式 | GET
| 请求参数 | 参数1:key 高德地图KEY 必填 /参数2:ip ip地址 可选(若不填 则默认取http本地ip)
| 请求示例 | https://restapi.amap.com/v3/ip?ip=114.247.50.2&key=<用户的key>
---

# 通过城市名查询adcode

|     |     |
| --- | --- |
| 接口地址 | 	https://restapi.amap.com/v3/geocode/geo?parameters
| 请求方式 | GET
| 请求参数 | 参数1:key 高德地图KEY 必填 /参数2:address 城市名 必填
| 请求示例 | https://restapi.amap.com/v3/geocode/geo?address=北京市&key=<用户的key>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->
---

# 通过adcode查询城市天气

|     |     |
| --- | --- |
| 接口地址 | 	https://restapi.amap.com/v3/weather/weatherInfo?parameters
| 请求方式 | GET
| 请求参数 | 参数1:key 高德地图KEY 必填 /参数2:city 城市adcode编码 必填 / 参数3:extensions 可选base：返回实况天气 可选all:返回预报天气
| 请求示例 | https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=<用户key>&extensions=all


---
class: px-20
---

# 项目评判标准说明


根据以下标准对同学们的考核结果进行量化评价：

- 👁️‍🗨️ **视觉还原度** - 保证项目的整体UI效果和线上效果保持一致
- 🎨 **交互还原度** - 保证项目的逻辑功能、交互效果和线上效果保持一致
- 🪢 **代码结构** - 保证代码结构清晰合理，命名规范，符合细粒度的组件化开发范式
- 📤 **结果目标** - 按照百分制达到80分即可视作阶段考核通过，可顺利进入下一阶段学习


