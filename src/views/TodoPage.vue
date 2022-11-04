<template>
    <div class="d-flex justify-content-between mt-5 mb-5">
        <input
            v-model="this.task"
            class="form-control border-white me-2"
            placeholder="Enter task..."
            type="text"
        />

        <my-button class="custom-btn-yellow" @click="createTodo">Create</my-button>
    </div>

    <todo-list
        :todoList="sortedTodoList"
        @delete-todo="deleteTodo"
        @edit-todo="editTodo"
        @mark-as-done="markAsDone"
    />
</template>

<script>
import useTodoList from "@/ hooks/useTodoList";
import TodoList from "@/components/TodoList";
import axios from "axios";
import useSortedTodoList from "@/ hooks/useSortedTodoList";

export default {
    name: "TodoPage",
    data() {
        return {
            task: '',
        };
    },
    components: {
        TodoList,
    },
    setup() {
        const {todoList} = useTodoList();
        const {sortedTodoList} = useSortedTodoList(todoList);

        return {
            todoList,
            sortedTodoList,
        };
    },
    methods: {
        async createTodo() {
            let newTodo = {
                task: this.task,
                done: false,
            };

            try {
                const res = await axios.post('http://localhost:5005/api/v1/todos', newTodo);
                newTodo.id = res.data.id;
                this.todoList.push(newTodo);
                this.task = '';
            } catch (e) {
                console.log(e);
            }
        },
        async deleteTodo(todo) {
            try {
                await axios.delete(`http://localhost:5005/api/v1/todos/${todo.id}`);
                this.todoList = this.todoList.filter(t => t.id !== todo.id);
            } catch (e) {
                console.log(e);
            }
        },
        async editTodo(todo) {
            try {
                await axios.put(`http://localhost:5005/api/v1/todos/${todo.id}`, {task: todo.task});
                this.todoList = this.todoList.map(t => t.id === todo.id ? todo : t);
            } catch (e) {
                console.log(e);
            }
        },
        async markAsDone(todo) {
            try {
                await axios.put(`http://localhost:5005/api/v1/todos/${todo.id}`, {done: todo.done});
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>

<style scoped>

</style>