<template>
    <div ref="container" class="media-container">
        <img v-if="mediaType === 'img' && src" ref="image" :src="src" :alt="alt" />
    </div>
</template>

<script setup>
    import { defineProps, onMounted, ref } from 'vue';
    import { wait } from '../utilities/general';

    defineProps({
        src: { type: String, default: '' },
        alt: { type: String },
        title: { type: String },
        description: { type: String },
        mediaType: { type: String, default: 'img' },
    });

    const container = ref();
    const image = ref();

    onMounted(() => {
        if (image.value) {
            if (image.value.complete) {
                resize();
            } else {
                image.value.onload = () => resize();
            }
        }
    });

    const resize = () =>
        [container.value, image.value].reduce(
            (prevPromise, element) =>
                prevPromise.then(() => {
                    const { clientWidth: parentWidth, clientHeight: parentHeight } =
                        element.parentElement;
                    const { clientWidth: myWidth, clientHeight: myHeight } = element;

                    if (myWidth > parentWidth) {
                        element.style.width = `${parentWidth}px`;
                        // element.classList.add('resized');
                    }
                    if (myHeight > parentHeight) {
                        element.style.height = `${parentHeight}px`;
                        // element.classList.add('resized');
                    }

                    element.classList.add('resized'); // even if not so we can show
                    return wait();
                }),
            wait()
        );
</script>

<style scoped lang="scss">
    .media-container {
    }

    img {
        transition: opacity 0.5s ease-in-out;
        opacity: 0;
    }

    img.resized {
        opacity: 1;
    }
</style>
