<template>
    <section class="project-container chicky-sandie-review">
        <ProjectItem :key="projectData.id" :experience="projectData" />
    </section>
</template>

<script setup>
    import DataProjects from '@/data/projects.json';
    import { computed } from 'vue';
    import ProjectItem from './ExperienceItem.vue';

    const props = defineProps({
        projectId: {
            type: String,
            required: true,
        },
    });

    const projectData = computed(() => DataProjects[props.projectId]);
</script>

<style lang="scss">
    .chicky-sandie-review {
        .experience-item {
            .image-container img {
                max-height: 20vh;
            }
        }

        .carousel-container .carousel .carousel-content .text-image-container {
            flex-direction: row;

            @media (orientation: portrait) {
                flex-direction: column;
            }

            .text-container,
            .image-container {
                flex: 1;
            }

            .image-container .media-renderer img {
                max-height: 50vh;

                @media (orientation: portrait) {
                    max-height: unset;
                    max-width: 65%;
                }
            }
        }
    }
</style>
