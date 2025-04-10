<template>
    <section>
        <ImageWithText :text="'Experience'" />
        <div class="experience-container">
            <p>This is the Experience page content.</p>
        </div>
    </section>
</template>

<script setup>
    import ImageWithText from '@/components/ImageWithText.vue';
</script>

<style scoped lang="scss">
    .experience-container {
        padding: 20px;
        margin-top: 20px;
    }
</style>
