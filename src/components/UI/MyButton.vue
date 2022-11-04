<template>
    <button class="custom-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton",
};
</script>

<style>
.custom-btn {
    border-radius: var(--radius);
    padding: 6px 10px;
    text-decoration: none;
}

.custom-btn-white {
    color: white;
    border: 1px solid white;
}

.custom-btn-white:hover {
    color: var(--dark);
    background: white;
}

.custom-btn-yellow {
    color: var(--dark);
    background: var(--yellow);
    border: none;
}

.custom-btn-yellow:hover {
    background: var(--darker-yellow);
}

.custom-btn-red {
    color: white;
    border: 1px solid var(--red);
}

.custom-btn-red:hover {
    color: white;
    background: var(--red);
}

.custom-btn-blue {
    color: white;
    border: 1px solid var(--blue);
}

.custom-btn-blue:hover {
    color: white;
    background: var(--blue);
}

.custom-btn-borderless {
    border: none;
    text-decoration: none;
    color: white;
}

.custom-btn-borderless:hover {
    border-bottom: 2px solid white;
    transition: ease .2s;
    color: white;
}
</style>
