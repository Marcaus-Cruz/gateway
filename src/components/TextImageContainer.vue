<template>
    <div class="text-image-container">
        <div class="text-container">
            <div v-for="(line, index) in text" :key="index" :class="`line line-${index}`">
                {{ line }}
            </div>
            <slot></slot>
        </div>
        <div class="image-container">
            <img v-show="mediaUrl && type === MEDIA_TYPES.img" :src="mediaUrl" :alt="alt" />
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const MEDIA_TYPES = Object.freeze({ img: 'image', vid: 'video' });
    const props = defineProps({
        text: { type: Array, default: [] },
        mediaUrl: { type: String, default: '' },
        type: { type: String, default: 'image' },
        alt: { type: String, default: '' },
    });
</script>

<style lang="scss" scoped>
    .text-image-container {
        @include flex-container(row, nowrap, space-evenly, center);

        .text-container {
            font-family: 'Montserrat Regular', sans-serif;
            font-size: 2.5vmin;
            padding: 0em 1em;

            .line {
                margin: 0.5em 0;

                &:first-child {
                    font-family: 'Montserrat Bold', sans-serif;
                    font-size: 2em;
                }
            }
        }

        .image-container {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                max-height: 25vmin;
                border-radius: 3vmin;
            }
        }
    }
</style>
