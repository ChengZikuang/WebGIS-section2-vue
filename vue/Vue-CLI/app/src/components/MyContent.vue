<template>
    <div>
        <div class="mc">mycontent
            <p>{{msg}}</p>
        </div>
        
    </div>
  </template>
  
  <script>
  export default {
      props:['msg']
      //props完整格式可做数据约束
  }
  </script>
  
  <style>
  .mc {
    background-color: pink;
    height: 80vh;
    float: left;
    width: 60%;
  }
  </style>