<template>
    <p>
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: "MyParagraph",
};
</script>

<style scoped>
p {
    line-height: 2rem;
    font-size: 1.1rem;
}
</style>