<template>
    <label
        class="group flex flex-row items-center gap-2 rounded px-4 py-2 text-sm font-semibold text-blue-900 select-none dark:text-blue-100 print:hidden"
        :class="{
            'bg-blue-100 dark:bg-blue-800': !modelValue,
            'bg-blue-200 shadow-inner dark:bg-blue-600': modelValue,
        }">
        <input
            type="checkbox"
            class="accent-blue-800 group-hover:accent-blue-600"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)" />
        {{ label }}
    </label>
</template>
<script>
    export default {
        props: ["modelValue", "label"],
        emits: ["update:modelValue"],
    };
</script>
