<template>
    <div class="header">
        <RouterLink to="/">
            <img src="/src/assets/MCLogoWhite.png" alt="logo" />
        </RouterLink>

        <div class="nav-buttons">
            <HeaderButton route="/">Home</HeaderButton>
            <HeaderButton route="/experience">Experience</HeaderButton>
        </div>
    </div>
</template>

<script setup>
    import Logo from './ImageWithText.vue';
    import HeaderButton from './HeaderButton.vue';
    import { RouterLink } from 'vue-router';
    import { gsap } from 'gsap';
    import { onMounted, ref } from 'vue';
</script>

<style scoped>
    .header {
        position: sticky;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: var(--header-height);
        padding: 0 10%;

        top: 0;
        left: 0;

        background-color: var(--color-hover);
        color: var(--color-accent);
        overflow: hidden;
    }

    img {
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
    a:hover img {
        scale: 1.2;
    }
</style>
