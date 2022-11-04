<template>
    <form class="container-sm" @submit.prevent>
        <h4 class="text-center">Edit Task</h4>

        <div class="mb-3">
            <input
                v-model="this.todoItem.task"
                class="mb-3 form-control border-white"
                type="text"
            />
        </div>

        <div class="text-end">
            <my-button class="btn btn-warning" @click="editTodo">Save</my-button>
        </div>
    </form>
</template>

<script>
export default {
    name: "EditTodoForm",
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            todoItem: {...this.todo},
        };
    },
    methods: {
        editTodo() {
            this.$emit('edit-todo', this.todoItem);
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>