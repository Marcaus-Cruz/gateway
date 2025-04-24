<template>
    <section class="view projects">
        <div class="projects-text warning">:(</div>
        <div class="projects-text title">Working on them</div>
        <div class="projects-text subtitle">I'll have them to showcase very soon!</div>
        <RouterButton route="/resume">But you can check out my resume!</RouterButton>
    </section>
</template>

<script setup>
    import RouterButton from '@/components/RouterButton.vue';
</script>

<style lang="scss" scoped>
    .view.projects {
        @include flex-container(column, nowrap, center, center);
        margin: 10%;

        .projects-text {
            font-family: 'Montserrat Bold', sans-serif;

            &.warning {
                color: red;
                font-size: 10vmin;
            }

            &:not(:first-child) {
                margin: 1em auto;
            }

            &.subtitle {
                font-family: 'Montserrat Regular', sans-serif;
            }
        }

        .btn {
            color: var(--color-primary);
            background-color: rgba(255, 255, 255, 0.1);
            margin-top: 1em;
        }
    }
</style>
