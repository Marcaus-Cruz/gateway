<template>
    <div :class="`view projects ${projectId || 'no-project'}`">
        <div v-show="!projectId" class="no-project-container">
            <div class="projects-text subtitle">More projects to showcase very soon.</div>
            <RouterButton route="/resume">But you can check out my resume!</RouterButton>
            <RouterButton route="/projects/casino">Le Casino</RouterButton>
            <RouterButton route="/projects/chickySandieReview">Chicky Sandie Reviews</RouterButton>
        </div>
        <projectOnScreen v-if="projectId" :projectId="projectId" />
    </div>
</template>

<script setup>
    import RouterButton from '@/components/RouterButton.vue';
    import ChickyReviewProject from '../components/ChickyReviewProject.vue';
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import CasinoProject from '@/components/CasinoProject.vue';

    const route = useRoute();
    const projectId = computed(() => route.params.id);

    const projectIdsToComponents = Object.freeze({
        casino: CasinoProject,
        chickySandieReview: ChickyReviewProject,
    });

    const projectOnScreen = computed(() => projectIdsToComponents[projectId.value]);
</script>

<style lang="scss" scoped>
    .view.projects {
        @include flex-container(column, nowrap, center, center);
        text-align: center;

        .btn {
            color: var(--color-primary);
            background-color: rgba(255, 255, 255, 0.1);
            margin-top: 1em;
        }

        &.no-projects {
            margin: 10%;
        }

        &.casino {
            margin: unset;
        }
    }
</style>
