<template>
    <div class="header">
        <Logo text="Gateway" imageUrl="src/assets/MClogoWhite.png" />
    </div>
</template>

<script setup>
    import Logo from './ImageWithText.vue';
</script>

<style scoped>
    .header {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 10vh;
        padding: 1em;

        top: 0;
        left: 0;

        color: white;
        background-color: #7fb57f;
    }
</style>
