<template>
    <RouterLink :to="route" class="btn router-button" :class="{ active: isActive }">
        <slot></slot>
    </RouterLink>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';

    const currentRoute = useRoute();

    const props = defineProps({
        route: {
            type: String,
            required: true,
        },
    });

    const isActive = computed(() => currentRoute.path === props.route);
</script>

<style lang="scss"></style>
