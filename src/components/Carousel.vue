<template>
    <section class="carousel-container">
        <button class="btn expand-btn" @click="isExpanded = !isExpanded">
            {{ buttonText }}
        </button>

        <div v-show="isExpanded" class="carousel" :class="{ expanded: isExpanded }">
            <button class="btn prev-btn" @click="prevImage">Prev</button>

            <div class="carousel-content">
                <TextImageContainer
                    v-if="currentItem"
                    :mediaUrl="currentItem.mediaUrl"
                    :text="currentItem.text"
                />
            </div>

            <button class="btn next-btn" @click="nextImage">Next</button>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import TextImageContainer from '@/components/TextImageContainer.vue';

    const props = defineProps({
        carouselItems: {
            type: Array,
            default: () => [],
        },
        expandText: {
            type: String,
            default: 'See More',
        },
        collapseText: {
            type: String,
            default: 'Hide',
        },
    });

    const isExpanded = ref(false);
    const activeIndex = ref(0);

    const buttonText = computed(() => (isExpanded.value ? props.collapseText : props.expandText));
    const currentItem = computed(() => {
        return props.carouselItems[activeIndex.value] || null;
    });

    const prevImage = () => {
        if (props.carouselItems.length === 0) return;
        activeIndex.value =
            (activeIndex.value - 1 + props.carouselItems.length) % props.carouselItems.length;
    };
    const nextImage = () => {
        if (props.carouselItems.length === 0) return;
        activeIndex.value = (activeIndex.value + 1) % props.carouselItems.length;
    };
</script>

<style lang="scss">
    .carousel-container {
        .btn {
            border: 0.5vmin solid white;
            margin: 0.5em;

            &.expand-btn {
                justify-self: center;
                width: auto;
            }
        }

        .carousel {
            @include flex-container(row, nowrap, center, center);
            width: 100%;

            .prev-btn,
            .next-btn {
                flex: 0 0 10%;
                max-width: 10%;
            }

            .carousel-content {
                flex: 0 0 80%;
                padding: 1em;
                max-width: 80%;
                background: rgba(white, 0.25);

                .text-image-container {
                    flex-direction: column-reverse;

                    .image-container img {
                        max-width: 90%;
                    }
                }
            }
        }

        @media (orientation: portrait) {
            .btn.expand-btn {
                width: 100%;
            }

            .carousel {
                flex-direction: column;

                .btn {
                    max-height: 10%;
                    max-width: unset;
                }

                .carousel-content {
                    max-width: 100%;

                    .text-image-container .image-container img {
                        max-width: 90vw;
                    }
                }
            }
        }
    }
</style>
