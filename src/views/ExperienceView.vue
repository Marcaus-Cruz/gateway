<template>
    <div class="view experience">
        <span class="view-title">{{ title }}</span>
        <section class="experience-container">
            <ExperienceItem
                v-for="experience in experiences"
                :key="experience.id"
                :experience="experience"
            />
        </section>
    </div>
</template>

<script setup>
    import ExperienceItem from '@/components/ExperienceItem.vue';
    import DataExperience from '@/data/experience.json';
    import { ref, watch, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const dataToUse = ref({});

    const experienceId = computed(() => route.params.id || 'EXPERIENCE');
    const isSingleExperience = computed(
        () => experienceId.value && DataExperience[experienceId.value]
    );
    const title = computed(() => (isSingleExperience.value ? '' : 'EXPERIENCE'));

    watch(
        () => route.fullPath,
        () => {
            dataToUse.value = isSingleExperience.value
                ? { [experienceId.value]: DataExperience[experienceId.value] }
                : DataExperience;
        },
        { immediate: true }
    );

    // Transform dataToUse into a cleaner array for render
    const experiences = computed(() =>
        Object.entries(dataToUse.value).map(
            ([id, { mediaUrl = '', text = '', organization = '', carousel = undefined }]) => ({
                id,
                mediaUrl,
                text,
                organization,
                hasCarousel: !!carousel,
                carouselExpandText: carousel ? carousel.expandText : '',
                carouselCollapseText: carousel ? carousel.collapseText : '',
                carouselItems: carousel ? carousel.carouselItems : [],
            })
        )
    );
</script>

<style lang="scss">
    .experience-container {
        @include flex-container(column);

        .experience-card.wwu {
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

        .experience-card {
            margin: 1.5em auto;

            .text-image-container .image-container img {
                max-width: 20vmin;
            }

            &.centurylink img {
                background: white;
            }

            @media (orientation: portrait) {
                flex-direction: column-reverse;
                align-items: center;

                .text-image-container .image-container img {
                    max-width: unset;
                    max-height: 20vmax;
                }

                &.wwu:nth-child(3) img {
                    display: none;
                }
            }
        }
    }
</style>
