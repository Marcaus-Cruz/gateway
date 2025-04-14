<template>
    <div class="dropdown-wrapper" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <HeaderButton v-if="route" :route="route">
            <slot></slot>
        </HeaderButton>
        <button v-else class="header-button">
            <slot></slot>
        </button>
        <div class="options-wrapper">
            <HeaderButton
                class="option"
                v-for="({ name, route }, index) in options"
                v-show="isHovered"
                :key="index"
                :route="route"
            >
                {{ name }}
            </HeaderButton>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, onMounted, ref } from 'vue';
    import HeaderButton from './HeaderButton.vue';
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
