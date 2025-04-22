<template>
    <div class="view">
        <span class="view-title">EXPERIENCE</span>
        <section class="experience-container">
            <ExperienceItem
                v-for="(data, id) in experienceData"
                :key="id"
                :mediaUrl="data.mediaUrl"
                :text="data.text"
                :class="id"
            ></ExperienceItem>
        </section>
    </div>
</template>

<script setup>
    import ExperienceItem from '@/components/ExperienceItem.vue';
    import experienceData from '@/data/experience.json';
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
