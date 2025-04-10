<template>
    <button class="thumbnail-card" :class="type" @click="$emit('click')">
        <div class="thumbnail-card-media">
            <img v-if="type === TYPES.img" :src="mediaUrl" :alt="alt" />
            <vid v-else-if="type === TYPES.vid" :src="mediaUrl" :alt="alt" />
        </div>
        <div class="title">
            <slot></slot>
        </div>
    </button>
</template>

<script setup>
    import { defineProps } from 'vue';

    const TYPES = Object.freeze({ img: 'image', vid: 'video' });
    const props = defineProps({
        mediaUrl: { type: String, default: '/src/assets/MCLogoBlack.png' },
        type: { type: String, default: 'image' },
        alt: { type: String },
    });
</script>

<style scoped lang="scss">
    button.thumbnail-card {
        font-family: 'Montserrat Bold', sans-serif;

        position: relative;
        background: none;
        border: 0.5vmin solid black;

        cursor: pointer;
        transition: all 0.25s ease-in-out;

        .thumbnail-card-media {
            position: relative;
            @include absolute-center();
            opacity: 0;
            z-index: 1;

            transition: all 0.25s ease-in-out;

            > * {
                max-width: 100%;
                max-height: 100%;
            }
        }

        .title {
            position: relative;
            font-size: 4vmin;
            text-align: center;

            transition: all 0.25s ease-in-out;
            z-index: 2;
        }

        &:hover,
        &:focus,
        &:active {
            scale: 1.1;
            border-color: transparent;

            .thumbnail-card-media {
                // filter: brightness(1);
                opacity: 1;
            }

            .title {
                opacity: 0;
            }
        }
    }
</style>
