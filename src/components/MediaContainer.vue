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

                    // console.log({ element, parentWidth, parentHeight, myWidth, myHeight });

                    if (myWidth > parentWidth) {
                        element.style.width = `${parentWidth}px`;
                        element.classList.add('resized-width');
                    }
                    if (myHeight > parentHeight) {
                        element.style.height = `${parentHeight}px`;
                        element.classList.add('resized-height');
                    }

                    return wait();
                }),
            wait()
        );
</script>

<style scoped>
    .media-container {
    }
</style>
