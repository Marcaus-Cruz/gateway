<template>
    <div class="header">
        <RouterLink to="/">
            <img class="logo" src="/img/MCLogoWhite.png" alt="logo" />
        </RouterLink>

        <div class="nav-buttons">
            <NavButton route="/">Home</NavButton>
            <NavButton route="/experience" :options="experienceOptions">Experience</NavButton>
            <NavButton route="/projects" :options="projectOptions">Projects</NavButton>
            <NavButton route="/contact">Contact</NavButton>
        </div>
    </div>
</template>

<script setup>
    import NavButton from './NavButton.vue';
    import { ref } from 'vue';

    const experienceOptions = ref([
        { name: 'EE', route: '/experience/ee' },
        { name: 'WWU - CAAML', route: '/experience/caaml' },
        { name: 'WWU - Research', route: '/experience/puf' },
        { name: 'Centurylink', route: '/experience/centurylink' },
    ]);

    const projectOptions = ref([
        { name: 'Le Casino', route: '/projects/casino' },
        { name: 'Fruit Force', route: '/projects/fruit-force' },
        { name: 'Chicky Sandie Review', route: '/projects/chickySandieReview' },
    ]);
</script>

<style lang="scss">
    .header {
        position: sticky;
        @include flex-container(row, nowrap, space-between, center);
        height: var(--header-height);
        padding: 0.5% 1% 0% 10%;

        top: 0;
        left: 0;

        background-color: var(--color-background);
        overflow-x: clip;
        z-index: var(--header-z-index);

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

        @media (orientation: portrait) {
            flex-direction: column;
            height: auto;
            padding: unset;

            .nav-buttons {
                width: 100%;
                justify-content: space-around;
                border: 0.5vmin solid white;
                border-left-width: 0vmin;
                border-right-width: 0vmin;

                overflow: scroll hidden;
                scrollbar-width: none;

                .btn {
                    padding: 0.5em;
                    margin: auto 0.5em;
                }
            }
        }
    }
</style>
