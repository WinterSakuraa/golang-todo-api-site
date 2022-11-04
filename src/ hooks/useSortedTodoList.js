import {computed} from 'vue';

export default function useSortedTodoList(todoList) {
    const sortedTodoList = computed(() => {
        return [...todoList.value].sort((todo1, todo2) => {
            return todo1.task?.localeCompare(todo2.task);
        });
    });

    return {
        sortedTodoList,
    };
}