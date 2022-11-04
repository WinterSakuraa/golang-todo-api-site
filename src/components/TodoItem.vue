<template>
    <tr>

        <td>{{ todo.task }}</td>
        <td>
            <input
                v-model="todo.done"
                class="form-check-input border-white custom-bg-dark"
                type="checkbox"
                @change="$emit('mark-as-done', todo)"
            />
        </td>

        <td>
            <my-button class="custom-btn-blue" @click="$emit('show-edit', todo)">
                <i class="bg-transparent fa-solid fa-pen-to-square"></i>
            </my-button>

            <my-button class="custom-btn-red ms-3" @click="$emit('delete-todo', todo)">
                <span class="bg-transparent fa fa-trash"></span>
            </my-button>
        </td>

    </tr>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.custom-bg-dark {
    background: #222222;
    padding: 3px 3px;
}
</style>