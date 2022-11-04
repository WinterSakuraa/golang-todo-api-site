<template>
    <header class="py-3 custom-border-bottom">

        <div class="d-flex justify-content-between align-content-center mt-3 ">
            <router-link class="text-decoration-none" to="/">
                <img class="me-2" height="50" src="../assets/logo.png" width="50">
            </router-link>

            <div class="right-side">
                <router-link class="me-2 custom-btn-borderless" to="/docs">
                    Docs
                </router-link>

                <router-link class="custom-btn custom-btn-white" to="/about">
                    About
                </router-link>
            </div>
        </div>

    </header>
</template>

<script>

export default {
    name: "Navbar",
};
</script>

<style scoped>
header {
    position: sticky;
    top: 0;
}

.custom-border-bottom {
    border-bottom: 1px solid var(--border-color);
}
</style>
