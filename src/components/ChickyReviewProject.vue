<template>
    <section class="project-container chicky-sandie-review">
        <ProjectItem :key="projectData.id" :experience="projectData" />
        <section class="web-app-section">
            <h2 class="web-app-title">{{ projectData.webApp.title }}</h2>
            <p class="web-app-description">{{ projectData.webApp.description }}</p>
            <a :href="projectData.webApp.url" target="_blank" rel="noopener noreferrer" class="web-app-link">
                Open in a new tab
            </a>
            <iframe title="CSR Web App" :src="projectData.webApp.url" class="iframe-csr"></iframe>
        </section>
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

        .web-app-section {
            margin-top: 3rem;
            text-align: center;

            .web-app-title {
                font-size: 1.8em;
                margin-bottom: 0.5rem;
            }

            .web-app-description {
                font-size: 0.9em;
                opacity: 0.85;
                margin-bottom: 0.75rem;
            }

            .web-app-link {
                display: inline-block;
                color: var(--color-primary);
                font-size: 0.9em;
                margin-bottom: 1rem;
                text-decoration: underline;
                transition: opacity 0.2s;

                &:hover {
                    opacity: 0.7;
                }
            }
        }

        .iframe-csr {
            width: 100%;
            height: 80vh;
            border: none;
            margin-top: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

            @media (orientation: portrait) {
                height: 70vh;
            }
        }
    }
</style>
