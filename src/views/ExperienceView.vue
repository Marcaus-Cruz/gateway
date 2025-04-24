<template>
    <div class="view experience">
        <span class="view-title">{{ experienceId }}</span>
        <section class="experience-container">
            <ExperienceItem
                v-for="(data, id) in dataToUse"
                :key="id"
                :mediaUrl="data.mediaUrl"
                :text="data.text"
                :class="[id, data.organization]"
            ></ExperienceItem>
        </section>
    </div>
</template>

<script setup>
    import ExperienceItem from '@/components/ExperienceItem.vue';
    import experienceData from '@/data/experience.json';
    import { ref, watch, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const dataToUse = ref({});

    // A computed ref that always reflects the current `id` param in the URL
    const experienceId = computed(() => route.params.id || 'EXPERIENCE');

    // Set the correct data when the component is mounted or when the route changes
    watch(
        () => route.fullPath,
        () => {
            if (experienceId.value && experienceData[experienceId.value]) {
                dataToUse.value = { [experienceId.value]: experienceData[experienceId.value] };
            } else {
                dataToUse.value = experienceData;
            }
        },
        { immediate: true }
    );
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

            &.wwu {
                &:nth-child(2) {
                    margin-bottom: 0;
                }
                &:nth-child(3) {
                    margin-top: 0;

                    img {
                        opacity: 0;
                    }
                }
            }

            &.centurylink img {
                background: white;
            }
        }
    }
</style>
