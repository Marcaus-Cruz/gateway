<script setup>
    import Header from '@/components/Header.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Header />
    <RouterView />
</template>

<style scoped lang="scss">
    #app {
        /* background-color: var(--color-hover); */
    }
</style>
