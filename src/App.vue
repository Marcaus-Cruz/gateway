<script setup>
    import Header from '@/components/Header.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Header />
    <RouterView />
</template>

<style scoped>
    #app {
        background-color: #7fb57f;
    }
</style>
