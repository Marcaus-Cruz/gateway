<template>
    <div ref="header" class="header">
        <RouterLink ref="logo" to="/">
            <Logo class="logo" imageUrl="src/assets/MCLogoWhite.png" :styles="logoStyles" />
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
    import { gsap } from 'gsap';
    import { onMounted, ref } from 'vue';

    const header = ref();
    const logo = ref();

    onMounted(() => {
        const targets = document.querySelectorAll('.nav-buttons');
        gsap.fromTo(
            header.value,
            { height: '0vh' },
            { height: '10vh', duration: 0.75, ease: 'power1.inOut' }
        );
        gsap.fromTo(
            targets,
            { opacity: 0, x: '100%', duration: 1 },
            {
                opacity: 1,
                x: '0%',
                duration: 1,
                ease: 'power1.inOut',
            }
        );
        gsap.fromTo(
            logo.value,
            { opacity: 0, x: '-100%', duration: 1 },
            {
                opacity: 1,
                x: '0%',
                duration: 1,
                ease: 'power1.inOut',
                delay: 2,
            }
        );
    });

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
        overflow: hidden;
    }

    .nav-buttons {
        display: flex;
        align-items: center;
    }

    a {
        transition: all 0.5s ease;
    }

    a:hover {
        scale: 1.2;
    }
</style>
