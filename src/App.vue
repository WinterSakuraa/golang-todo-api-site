<template>
    <div class="custom-container container-fluid mx-auto">
        <navbar></navbar>

        <router-view></router-view>
    </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Navbar from "@/components/Navbar";

export default {
    components: {
        TodoList,
        Navbar,
    },
};
</script>

<style>
:root {
    --yellow: #ffc107;
    --darker-yellow: #e5ae01;
    --red: #ff1d1d;
    --blue: #0d6efd;
    --green: #4cff8f;
    --dark: #222222;
    --border-color: #606060;
    --radius: 5px;
}

* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background: var(--dark);
    color: white;
}

.custom-container {
    min-width: 260px;
    max-width: 70%;
}
</style>
