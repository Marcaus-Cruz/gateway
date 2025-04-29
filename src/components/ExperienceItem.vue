<template>
    <div class="experience-card" :class="[experience.id, experience.organization]">
        <section class="experience-item">
            <TextImageContainer :mediaUrl="experience.mediaUrl" :text="textArray" />
        </section>
        <Carousel
            v-if="experience.hasCarousel"
            :expandText="experience.carouselExpandText"
            :collapseText="experience.carouselCollapseText"
            :carouselItems="experience.carouselItems"
        />
    </div>
</template>

<script setup>
    import TextImageContainer from '@/components/TextImageContainer.vue';
    import Carousel from '@/components/Carousel.vue';
    import { ref, onMounted } from 'vue';

    const props = defineProps({
        experience: {
            type: Object,
            required: true,
        },
    });

    const textArray = ref([]);

    onMounted(() => {
        const { title = '', subtitle = '', description = [] } = props.experience.text || {};
        textArray.value = [title, subtitle, ...description];
    });
</script>

<style lang="scss">
    .experience-item > .text-image-container {
        flex-direction: row-reverse;
        align-items: flex-start;

        .text-container {
            margin-left: 1em;

            .line {
                font-size: 0.8em;
            }

            .line-0,
            .line-1 {
                text-align: center;
            }

            .line-0 {
                font-size: 2em;
            }

            .line-1 {
                font-family: 'Montserrat Medium', sans-serif;
                font-size: 1.2em;
            }
        }

        @media (orientation: portrait) {
            flex-direction: column-reverse;
            align-items: center;

            .text-container {
                margin-left: unset;
                padding: 1em;
            }
        }
    }

    .carousel-container {
        .text-image-container .text-container {
            text-align: center;

            .line {
                font-size: 0.8em;
            }
            .line-0 {
                font-size: 1em;
            }
        }
    }
</style>
