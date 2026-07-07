<template>
    <div
        class="-mx-2 flex grid-cols-12 flex-col items-center gap-1 p-2 lg:grid lg:gap-4 print:grid"
        :class="{
            'even:bg-gray-100 dark:even:bg-gray-800': !editable,
            'bg-blue-50 dark:bg-blue-900': editable,
        }">
        <div class="col-span-4 w-full">
            <slot name="title"></slot>
        </div>

        <div class="col-span-8">
            <div class="grid grid-flow-col gap-1 lg:gap-4">
                <slot name="years"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["editable"],
    };
</script>
