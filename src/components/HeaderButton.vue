<template>
    <RouterLink :to="route" class="header-button" :class="{ active: isActive }">
        {{ text }}
    </RouterLink>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';

    const currentRoute = useRoute();

    const props = defineProps({
        text: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        },
    });

    const isActive = computed(() => currentRoute.path === props.route);
</script>

<style scoped>
    .header-button {
        border-radius: 0.1em;
        padding: 0.5em 1em;
        margin: auto 1vmin;

        color: var(--color-primary);
        text-decoration: none;
        transition: all 0.25s;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1em;
    }

    .header-button:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: var(--color-hover);
    }

    .header-button.active {
        color: white;
        /* pointer-events: none; */
    }
</style>
