<template>
    <div class="dropdown-wrapper" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <RouterButton v-if="route" :route="route">
            <slot></slot>
        </RouterButton>
        <button v-else class="btn">
            <slot></slot>
        </button>
        <div class="options-wrapper">
            <RouterButton
                class="option"
                v-for="({ name, route }, index) in options"
                v-show="isHovered"
                :key="index"
                :route="route"
            >
                {{ name }}
            </RouterButton>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import RouterButton from '@/components/RouterButton.vue';

    const props = defineProps({
        options: {
            type: Array,
            required: true,
        },
        route: {
            type: String,
            required: false,
        },
    });

    const isHovered = ref(false);
</script>

<style lang="scss" scoped>
    .dropdown-wrapper {
        position: relative;
        @include flex-container(column);
    }

    .options-wrapper {
        position: absolute;
        @include flex-container(column);
        top: 100%;
        min-width: 100%;
        background-color: var(--color-hover);

        .option {
            text-wrap: nowrap;
        }
    }
</style>
