<template>
    <div class="view home">
        <span class="view-title">HOME</span>
        <section class="hero">
            <TextImageContainer
                :text="text"
                :mediaUrl="mediaUrl"
                :alt="alt"
                :type="mediaType"
            ></TextImageContainer>
        </section>
        <Contact />
    </div>
</template>

<script setup>
    import Contact from '@/components/Contact.vue';
    import TextImageContainer from '@/components/TextImageContainer.vue';
    import DataHomeGreeting from '@/data/greeting.json';

    const { text, mediaUrl, mediaType, alt } = DataHomeGreeting;
</script>

<style lang="scss">
    .view.home {
        background-color: var(--color-background);

        .text-image-container img {
            max-height: 25vmin;
            border-radius: 3vmin;
        }

        span.view-title {
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
                    font-size: 2vmin;
                    text-align: center;
                    opacity: 0.5;
                }
            }
        }
    }
</style>
