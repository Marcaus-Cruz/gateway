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
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        border-radius: 4px;
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.3s;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1em;
    }

    .header-button:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .header-button.active {
        background-color: rgba(255, 255, 255, 0.3);
    }
</style>
