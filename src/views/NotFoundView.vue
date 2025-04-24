<template>
    <section class="view not-found">
        <div class="not-found-text warning">! ! !</div>
        <div class="not-found-text title">404 Not Found</div>
        <div class="not-found-text subtitle">This page does not exist</div>
        <RouterButton route="/" class="">Go Back</RouterButton>
    </section>
</template>

<script setup>
    import RouterButton from '@/components/RouterButton.vue';
</script>

<style lang="scss" scoped>
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

        .btn {
            color: var(--color-primary);
            background-color: rgba(255, 255, 255, 0.1);
            margin-top: 1em;
        }
    }
</style>
