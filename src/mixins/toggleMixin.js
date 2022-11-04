export default {
    props: {
        showDialog: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hideDialog() {
            this.$emit('update:showDialog', false);
        },
    },
};