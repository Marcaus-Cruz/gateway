<template>
    <div
        class="nav-button-wrapper"
        @mouseover="hasOptions && (isHovered = true)"
        @mouseleave="hasOptions && (isHovered = false)"
    >
        <RouterLink v-if="route" :to="route" class="btn nav-button" :class="{ active: isActive }">
            <slot></slot>
        </RouterLink>

        <div v-if="hasOptions" class="dropdown-options" v-show="isHovered">
            <RouterLink
                v-for="({ name, route }, index) in options"
                :key="index"
                :to="route"
                class="btn dropdown-option"
            >
                {{ name }}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRoute, RouterLink } from 'vue-router';

    const props = defineProps({
        route: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            default: () => [],
        },
    });

    const currentRoute = useRoute();
    const isHovered = ref(false);

    const isActive = computed(() => currentRoute.path === props.route);
    const hasOptions = computed(() => props.options.length > 0);
</script>

<style lang="scss" scoped>
    .nav-button-wrapper {
        position: relative;
        @include flex-container(column);
    }

    .nav-button {
        transition: all 0.3s ease;
        padding: 0.5em 1em;
        text-align: center;
        white-space: nowrap;

        &.active {
            font-weight: bold;
            text-decoration: underline;
        }
    }

    .dropdown-options {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--color-hover);
        z-index: 100;
        min-width: 100%;
        @include flex-container(column);

        .dropdown-option {
            text-align: left;
            padding: 0.5em 1em;
            white-space: nowrap;

            &:hover {
                background-color: var(--color-accent);
            }
        }
    }
</style>
