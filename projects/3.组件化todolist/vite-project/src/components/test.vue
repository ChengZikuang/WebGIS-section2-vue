<template>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div v-if="!item.isEditing" @click="editItem(index)">{{ item.text }}</div>
          <input v-else v-model="item.text" @blur="saveItem(index)" @keydown.enter="saveItem(index)" />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    { text: 'Item 1', isEditing: false },
    { text: 'Item 2', isEditing: false },
    { text: 'Item 3', isEditing: false }
  ]);
  
  // 方法：进入编辑模式
  const editItem = (index) => {
    items.value[index].isEditing = true;
  };
  
  // 方法：保存编辑并退出编辑模式
  const saveItem = (index) => {
    items.value[index].isEditing = false;
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  div {
    padding: 10px;
    cursor: pointer;
  }
  
  input {
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  