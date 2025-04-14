<template>
    <section>
        <span>HOME</span>
        <div class="cards">
            <ThumbnailCard class="thumbnail" mediaUrl="/src/assets/img/marcaus.jpg" type="image">
                About Me
            </ThumbnailCard>
            <ThumbnailCard class="thumbnail" mediaUrl="/src/assets/img/marcaus.jpg" type="image">
                Professional Experience
            </ThumbnailCard>
            <ThumbnailCard class="thumbnail" mediaUrl="/src/assets/img/marcaus.jpg" type="image">
                Personal Projects
            </ThumbnailCard>
        </div>
    </section>
</template>

<script setup>
    import { gsap } from 'gsap';
    import { onMounted, ref } from 'vue';
    import ThumbnailCard from '../components/ThumbnailCard.vue';
</script>

<style scoped lang="scss">
    section {
        display: flex;
        flex-direction: column;
        background-color: var(--color-accent);
        margin: auto var(--header-margin-x);

        span {
            margin: 3vmin auto;
            font-size: 3vmin;
        }

        .cards {
            position: relative;
            display: flex;

            .thumbnail {
                flex: 1 1 33%;
                height: 30vh;
                margin: 3vmin;
            }
        }
    }
</style>
