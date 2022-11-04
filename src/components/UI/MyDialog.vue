<template>
    <div v-if="showDialog" class="dialog" @click="hideDialog">
        <div class="dialog-content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
    name: "MyDialog",
    mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    display: flex;
}

.dialog-content {
    box-shadow: rgba(0, 0, 0, 0.7) 0 5px 15px;
    padding: 15px;
    margin: auto;
    border-radius: 12px;
    min-height: 100px;
    min-width: 500px;
    background: #222222;
}
</style>