<template>
    <section class="view not-found">
        <div class="not-found-text warning">! ! !</div>
        <div class="not-found-text title">404 Not Found</div>
        <div class="not-found-text subtitle">This page does not exist</div>
        <RouterLink to="/" class="">Go Back</RouterLink>
    </section>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss">
    .view.not-found {
        @include flex-container(column, nowrap, center, center);
        margin: 10%;

        .not-found-text {
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
    }
</style>
