<template>
    <section>
        <div class="title">{{ title }}</div>
        <div class="subtext">{{ subtext }}</div>
    </section>
</template>

<script setup>
    const props = defineProps({
        title: { type: String, default: '' },
        subtext: { type: String, default: '' },
    });
</script>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .title {
        font-size: 2em;
    }

    .subtext {
        color: black;
    }
</style>
