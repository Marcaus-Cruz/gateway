<template>
    <div class="header">
        <RouterLink to="/">
            <img class="logo" src="/src/assets/img/MCLogoWhite.png" alt="logo" />
        </RouterLink>

        <div class="nav-buttons">
            <HeaderButton route="/">Home</HeaderButton>
            <HeaderButton route="/experience">Experience</HeaderButton>
            <HeaderButton route="/projects">Projects</HeaderButton>
            <HeaderButton route="/contact">Contact</HeaderButton>
        </div>
    </div>
</template>

<script setup>
    import HeaderButton from './HeaderButton.vue';
    import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
    .header {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: var(--header-height);
        padding: 0.5% 1% 0% 10%;

        top: 0;
        left: 0;

        background-color: var(--color-hover);
        color: var(--color-accent);
        overflow: hidden;
    }

    .logo {
        max-height: var(--header-height);
        max-width: var(--header-height);
    }

    .nav-buttons {
        display: flex;
        align-items: center;
    }

    a {
        transition: all 0.5s ease;
    }

    a:hover,
    a:hover .logo {
        scale: 1.2;
    }
</style>
