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
        <RouterButton class="btn-resume" route="/resume">Check out my Resume</RouterButton>
        <Contact />
    </div>
</template>

<script setup>
    import Contact from '@/components/Contact.vue';
    import TextImageContainer from '@/components/TextImageContainer.vue';
    import DataHomeGreeting from '@/data/greeting.json';
    import RouterButton from '@/components/RouterButton.vue';

    const { text, mediaUrl, mediaType, alt } = DataHomeGreeting;
</script>

<style lang="scss">
    .view.home {
        background-color: var(--color-background);

        .text-image-container img {
            max-height: 25vmin;
            border-radius: 3vmin;
        }

        section.hero {
            margin: 5vmin auto;
        }

        .btn-resume {
            align-items: center;
            margin: 2em auto;

            background-color: rgba(255, 255, 255, 0.1);
            color: var(--color-secondary);
        }

        @media (orientation: portrait) {
            .text-image-container {
                flex-direction: column;

                .text-container {
                    padding-bottom: 1em;
                }

                img {
                    max-height: 25vmax;
                }
            }
        }
    }
</style>
