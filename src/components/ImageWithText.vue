<template>
    <div class="container">
        <MediaContainer :src="imageUrl" :alt="'logo'" />
        <div>{{ text }}</div>
    </div>
</template>

<script setup>
    import MediaContainer from '@/components/MediaContainer.vue';
    import { defineProps } from 'vue';

    defineProps({
        text: { type: String, default: 'Hello World' },
        imageUrl: { type: String },
    });
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100%;
    }
</style>
