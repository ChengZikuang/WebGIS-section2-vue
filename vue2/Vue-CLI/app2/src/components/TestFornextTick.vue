<template>
    <div>
        <div class="left">
            <div v-if="!isEdit" class="t1">
                {{ msg }}
            </div>
            <div v-else class="t2">
                <input ref="ref1" v-model="msg" type="text">
            </div>
        </div>
        <div class="right">
            <button @click="edit">
                {{ isEdit ? "确定" : "编辑" }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            msg: 'hello',
            isEdit: false,
        }
    },
    methods: {
        //   edit() {
        //     this.isEdit = !this.isEdit
        //     if(this.isEdit){
        //       this.$refs.ref1.focus()
        //     }
        //   },
        edit() {
            this.isEdit = !this.isEdit
            this.$nextTick(function () {
                if (this.isEdit) {
                    this.$refs.ref1.focus()
                }
            })
        },
    },
};
</script>

<style scoped>
.app {
    background-color: #ddd;
    padding: 8px;
    display: flex;
}

.left {
    width: 30%;
    margin-right: 20px;
}

.t1 {
    border: 1px solid #000;
}

.t2 input {
    width: 100%;
}
</style>