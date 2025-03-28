<template>
    <div class="container-title">
        <img src="@/assets/MClogoWhite.png" alt="logo" />
        <h1>{{ text }}</h1>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ text: string; src: string }>();
</script>

<style scoped>
    .container-title {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100%;
    }

    img {
        height: 10vh;
    }
</style>
