<template>
    <div class="container">
        <MediaContainer :src="imageUrl" :alt="'logo'" />
        <h1>{{ text }}</h1>
    </div>
</template>

<script setup>
    import { defineProps, onMounted } from 'vue';
    import MediaContainer from '@/components/MediaContainer.vue';

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
