<template>
    <div v-if="todoList.length > 0" class="text-center">

        <table class="table table-hover table-borderless">

            <thead class="fs-3 border-bottom">
            <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody v-for="todo in todoList" :key="todo.id">
            <todo-item
                :todo="todo"
                @delete-todo="$emit('delete-todo', todo)"
                @show-edit="showEditDialog"
                @mark-as-done="$emit('mark-as-done', todo)"
            />
            </tbody>

        </table>

        <my-dialog v-model:showDialog="editDialogVisible">
            <edit-todo-form :todo="this.todoItem" @edit-todo="editTodo"/>
        </my-dialog>

    </div>

    <div v-else>
        <h1 class="text-center">
            No tasks yet...

        </h1>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import EditTodoForm from "@/components/EditTodoForm";

export default {
    name: "TodoList",
    components: {
        TodoItem,
        EditTodoForm,
    },
    props: {
        todoList: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            editDialogVisible: false,
            todoItem: {},
        };
    },
    methods: {
        showEditDialog(todo) {
            this.todoItem = todo;
            this.editDialogVisible = true;
        },
        editTodo(todo) {
            this.editDialogVisible = false;
            this.$emit('edit-todo', todo);
        },
    },
};
</script>

<style scoped>

</style>