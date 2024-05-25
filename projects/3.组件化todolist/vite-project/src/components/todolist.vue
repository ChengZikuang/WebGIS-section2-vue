<template>
    <div>
        <div class="title">
            <h1>Todolist</h1>
            <input type="text" placeholder="Enter text" class="input-field" v-model="newItem" />
            <button type="submit" class="submit-button" @click="submitItem">Submit</button>
        </div>
        <div class="lists">
            <div class="li" v-for="(item, index) in _data " :key=index>
                <div :class="['iconfont', item.isComplete ? 'icon-confirm' : 'icon-unconfirm']"
                    @click="completeItem(item.id)"></div>
                <div :class="['text', item.isDelete ? 'delete' : '']" @click="editItem(item.id)">{{ item.text }}</div>
                <div class="del" @click="deleteItem(item.id)">x</div>
            </div>
        </div>
        <div class="footer">
            <button @click="showComplete" :class="{'is_active': isComp}">show complete</button>
            <button @click="showDelete" :class="{'is_active': isDel}">show delete</button>
            <button @click="showAll" :class="{'is_active': isAll}">show all</button>
            <button></button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
/* variable */
const data = ref([
    //示例数据
    // { id: 1, text: "Lorem ipsum dolor sit amet", isDelete: false, isComplete: false },
    // { id: 2, text: "Lorem ipsum dolor sit amet consectetu", isDelete: false, isComplete: false },
    // { id: 3, text: "Lorem ipsum ", isDelete: false, isComplete: false },
    // { id: 4, text: "Lorem  dolor ", isDelete: false, isComplete: false },
])
const isAll = ref(false)
const isComp = ref(false)
const isDel = ref(false)

const _data = computed(() => {
    if (isAll.value) {
        console.log("isAll");
        return data.value;
    } else if (isComp.value) {
        console.log("isComp");
        return data.value.filter(item => !item.isDelete );
    } else if (isDel.value) {
        console.log("isDel");
        return data.value.filter(item => !item.isComplete);
    }
    else{
        return data.value.filter(item => !item.isDelete && !item.isComplete);
    }
});
const newItem = ref("")
/* methods */
const showDelete = () => {
    if (isComp.value) {
        isAll.value = true;
        isDel.value = !isDel.value;
        isComp.value = !isComp.value;
    }
    isDel.value = !isDel.value;
}
const showComplete = () => {
    if (isDel.value) {
        isAll.value = true;
        isDel.value = !isDel.value;
        isComp.value = !isComp.value;
    }
    isComp.value = !isComp.value;
}
const showAll = () => {
    
    isAll.value = !isAll.value
}
const completeItem = (id) => {
    data.value[id - 1].isComplete = !data.value[id - 1].isComplete;
    //修改样式
}
const deleteItem = (id) => {
    data.value[id - 1].isDelete = !data.value[id - 1].isDelete;
}
function submitItem() {
    //实现点击submit按钮，将input中的值添加进data中，并显示在list中
    if (newItem.value.trim()) {
        data.value.push({ id: data.value.length + 1, text: newItem.value.trim(), isDelete: false, isComplete: false })
        newItem.value = ""
    }
}
function editItem(item) {
    //实现点击div.text编辑该text,实时修改该text及data数据
    console.log(item);
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.title {
    width: 500px;
    height: 200px;
    border-bottom: 1px solid #000;
    line-height: 100px;
}

h1 {
    margin: 0;
}

.input-field {
    padding: 10px;
    width: 300px;
}

.submit-button {
    font-size: 14px;
}

.lists {
    width: 500px;
    margin-bottom: 50px;
}

.li {
    height: 50px;
    border: 1px solid #000;
    border-top: 0px;
    line-height: 50px;
    display: flex;
}

.text {
    width: 400px;
    text-align: left;
}

.delete {
    text-decoration: line-through;
}

.del {
    font-size: 20px;
    width: 50px;
}

.del:hover {
    background-color: gray;
}

.iconfont {
    font-family: "iconfont";
    font-size: 22px;
    width: 50px;
}

.icon-unconfirm:before {
    content: "\e720";
}

.icon-confirm:before {
    content: "\e722";
}
.is_active{
    background-color: blue;
}
</style>