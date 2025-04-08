<template>
    <section class="view home">
        <TextSection :subtext="'Hi, my name is Marcaus Cruz.'" />
    </section>
</template>

<script setup>
    import ImageWithText from '@/components/ImageWithText.vue';
    import TextSection from '@/components/TextSection.vue';
    import json from '@/data.json';

    // // TODO: parse paths. Create a class for this
    // const { chunks } = json.views.homeview;
    // if (chunks.length) {
    // }
    // console.log({ json, chunks });
</script>

<style scoped>
    section {
        margin: auto var(--header-margin-x);
        background-color: var(--color-accent);
    }
</style>
