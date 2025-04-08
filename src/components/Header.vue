<template>
    <div class="header">
        <RouterLink to="/">
            <Logo imageUrl="src/assets/MCLogoWhite.png" :styles="logoStyles" />
        </RouterLink>

        <div class="nav-buttons">
            <HeaderButton text="Home" route="/" />
            <HeaderButton text="Experience" route="/experience" />
        </div>
    </div>
</template>

<script setup>
    import Logo from './ImageWithText.vue';
    import HeaderButton from './HeaderButton.vue';
    import { RouterLink } from 'vue-router';

    const logoStyles = {
        heightOfParent: { parentSelector: '.header', proportion: 1 },
    };
</script>

<style scoped>
    .header {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 10vh;
        padding: 0 10%;

        top: 0;
        left: 0;

        background-color: var(--color-hover);
        color: var(--color-accent);
    }

    .nav-buttons {
        display: flex;
        align-items: center;
    }
</style>
