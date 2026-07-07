<template>
    <section
        class="-mx-8 mt-4 mb-8 flex flex-col gap-4 border-y border-solid border-gray-300 bg-gray-100 px-8 py-4 dark:bg-gray-950">
        <div class="flex flex-row items-center justify-between">
            <div
                class="flex flex-row gap-4 text-center font-mono text-gray-800 dark:text-white">
                🔧
                <span
                    >Client: {{ workbookStore.versions.input }} ({{
                        currentlyLoadedPayloadLastUpdatedDate
                    }})</span
                ><span v-if="workbookStore.versions.output !== null"
                    >Server: {{ workbookStore.versions.output }}</span
                ><loading-indicator
                    v-else
                    class="h-4 w-4"></loading-indicator>
            </div>
            <Button @click="switchLanguage">{{
                language == "en" ? "fr" : "en"
            }}</Button>
        </div>
    </section>
</template>

<script>
    import payloadUrl from "../assets/payload.xlsx?url";
    import { mapWritableState } from "pinia";
    import Button from "./Button.vue";
    import { useLocalizationsStore } from "../stores/localizations.js";
    import { useWorkbookStore } from "../stores/workbook.js";
    import LoadingIndicator from "./LoadingIndicator.vue";

    export default {
        data() {
            return {
                payloadUrl,
            };
        },
        components: {
            Button,
            LoadingIndicator,
        },
        setup() {
            const workbookStore = useWorkbookStore();
            return { workbookStore };
        },
        methods: {
            switchLanguage() {
                this.language = this.language == "en" ? "fr" : "en";
            },
        },
        computed: {
            ...mapWritableState(useLocalizationsStore, ["language"]),
            currentlyLoadedPayloadLastUpdatedDate() {
                if (!this.workbookStore.workbook) return;
                try {
                    return this.workbookStore.workbook.Props.ModifiedDate.toLocaleString();
                } catch (error) {
                    return null;
                }
            },
        },
    };
</script>
