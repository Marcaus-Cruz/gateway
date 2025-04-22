<template>
    <div class="view">
        <section class="experience-container">
            <ExperienceEE />
        </section>
    </div>
</template>

<script setup>
    import ExperienceEE from '@/components/ExperienceEE.vue';
</script>

<style lang="scss">
    .experience-container {
        @include flex-container(column);

        .experience-item {
            margin: 1.5em auto;

            .text-image-container {
                .image-container {
                    img {
                        max-width: 20vmin;
                    }
                }
            }
        }
    }
</style>
