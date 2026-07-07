<template>
    <div
        class="prose prose-sm dark:prose-invert prose-p:leading-tight my-2 border-l-2 border-solid pl-2"
        :class="{
            'border-gray-300 dark:border-gray-700': type === 'default',
            'border-yellow-500': type === 'warning',
        }"
        v-html="renderedDescription"></div>
</template>
<script>
    import { marked } from "marked";
    export default {
        props: {
            description: String,
            type: { type: String, default: "default" },
        },
        computed: {
            renderedDescription() {
                return marked.parse(this.description);
            },
        },
    };
</script>
