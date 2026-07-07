<template>
    <div
        role="alert"
        class="prose max-w-none rounded-sm p-4 font-semibold"
        v-html="error ? error : message"
        :class="{
            'bg-red-100 text-red-800': error,
            'bg-orange-100 text-orange-800': !error,
        }"></div>
</template>
<script>
    import { mapState } from "pinia";

    import { useWorkbookStore } from "../stores/workbook.js";
    import { useLocalizationsStore } from "../stores/localizations.js";

    import { marked } from "marked";

    export default {
        setup() {
            const workbookStore = useWorkbookStore();
            return { workbookStore };
        },

        computed: {
            ...mapState(useLocalizationsStore, ["strings"]),
            error() {
                return this.workbookStore.error
                    ? marked.parse(`⚠️ ${this.workbookStore.error}`)
                    : null;
            },
            message() {
                return marked.parse(`🚧 ${this.strings.maintenance}`);
            },
        },
    };
</script>
