<!-- v-for="({ text, mediaUrl, mediaType, style = {} }, index) in thumbnails" -->
<template>
    <div class="view">
        <span>HOME</span>
        <section class="hero">
            <TextImageContainer
                :text="textImage.text"
                :mediaUrl="textImage.mediaUrl"
                :alt="textImage.alt"
                :type="textImage.mediaType"
            ></TextImageContainer>
        </section>
        <section class="thumbnails">
            <div class="cards">
                <ThumbnailCard
                    v-for="(thumbnail, index) in thumbnails"
                    :key="index"
                    :style="thumbnail.style"
                    :mediaType="thumbnail.mediaType"
                    :mediaUrl="thumbnail.mediaUrl"
                    class="thumbnail"
                >
                    {{ thumbnail.text }}
                </ThumbnailCard>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { gsap } from 'gsap';
    import { onMounted, ref } from 'vue';
    import ThumbnailCard from '../components/ThumbnailCard.vue';
    import TextImageContainer from '../components/TextImageContainer.vue';

    const textImage = Object.freeze({
        text: [
            "Hello I'm Marcaus Cruz",
            "I'm a Software Engineer based in the Portland Metro Area.",
            'Thanks for visiting my site',
        ],
        mediaUrl: '/src/assets/img/thumb-aboutMe.jpg',
        mediaType: 'image',
        alt: 'Marcaus Cruz posing in front of the Eiffel Tower',
    });

    const randomAnimStyles = () => ({
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${5 + Math.random()}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationName: 'rotateY',
    });

    const thumbnails = ref([
        {
            text: 'About Me',
            mediaUrl: '/src/assets/img/thumb-aboutMe.jpg',
            mediaType: 'image',
            style: randomAnimStyles(),
        },
        {
            text: 'Professional Experience',
            mediaUrl: '/src/assets/img/thumb-experience.png',
            mediaType: 'image',
            style: randomAnimStyles(),
        },
        {
            text: 'Personal Projects',
            mediaUrl: '/src/assets/img/thumb-projects.png',
            mediaType: 'image',
            style: randomAnimStyles(),
        },
    ]);
</script>

<style scoped lang="scss">
    .view {
        background-color: var(--color-background);
        margin: auto var(--header-margin-x);

        span {
            margin: 3vmin auto;
            font-size: 3vmin;
        }

        section.hero {
            margin: 5vmin auto;
        }

        section.thumbnails {
            display: flex;
            flex-direction: column;

            .cards {
                position: relative;
                display: flex;

                .thumbnail {
                    flex: 1 1 33%;
                    height: 30vh;
                    margin: 3vmin;
                }

                &::after {
                    @include absolute-center($top: unset);
                    // content: 'logos from https://icons8.com/';
                    font-size: 2vmin;
                    text-align: center;
                    opacity: 0.5;
                }
            }
        }
    }
</style>
