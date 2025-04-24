<template>
    <section class="view resume">
        <Resume />
    </section>
</template>

<script setup>
    import Resume from '@/components/Resume.vue';
</script>

<style lang="scss">
    .view.resume {
        @include flex-container(column, nowrap, center, center);

        .pdf {
            height: 80vh;
        }
    }
</style>
