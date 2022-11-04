import {computed, onMounted, ref} from "vue";
import axios from "axios";

export default function useTodoList() {
    const todoList = ref([]);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('http://localhost:5005/api/v1/todos');
            todoList.value = res.data;
            if (!todoList.value) {
                todoList.value = [];
            }
        } catch (e) {
            console.log(e);
        }
    };

    onMounted(fetchTodos);
    return {
        todoList,
    };
}