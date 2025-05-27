<template>
    <section class="project-container chicky-sandie-review">
        <ProjectItem :key="projectData.id" :experience="projectData" />
    </section>
</template>

<script setup>
    import RouterButton from '@/components/RouterButton.vue';
    import ProjectItem from './ExperienceItem.vue';
    import DataProjects from '@/data/projects.json';

    import { ref, watch, computed } from 'vue';
    import { useRoute } from 'vue-router';

    const props = defineProps({
        projectId: {
            type: String,
            required: true,
        },
    });

    const projectData = computed(() => {
        const data = DataProjects[props.projectId];
        console.log({ data });

        return data;
    });
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

            .text-container,
            .image-container {
                flex: 1;
            }

            .image-container .media-renderer img {
                max-height: 50vh;
            }
        }
    }
</style>
