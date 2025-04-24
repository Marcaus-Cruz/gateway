<template>
    <button
        class="thumbnail-card"
        :class="type"
        @click="$emit('click')"
        @mouseenter="$emit('importantFocus')"
        @mouseleave="$emit('importantFocusOut')"
        :style="style"
    >
        <div class="thumbnail-card-media">
            <img v-if="type === MEDIA_TYPES.img" :src="mediaUrl" :alt="alt" />
            <vid v-else-if="type === MEDIA_TYPES.vid" :src="mediaUrl" :alt="alt" />
        </div>
        <div class="title">
            <slot></slot>
        </div>
    </button>
</template>

<script setup>
    const MEDIA_TYPES = Object.freeze({ img: 'image', vid: 'video' });
    const props = defineProps({
        mediaUrl: { type: String, default: '/src/assets/MCLogoBlack.png' },
        type: { type: String, default: 'image' },
        alt: { type: String },
        style: { type: Object },
    });
</script>

<style lang="scss">
    button.thumbnail-card {
        font-family: 'Montserrat Bold', sans-serif;

        position: relative;
        background: none;
        border: 0.5vmin solid transparent;
        cursor: pointer;
        transition: all 0.25s ease-in-out;

        .thumbnail-card-media {
            @include absolute-center();
            display: flex;
            opacity: 1;
            z-index: 1;

            transition: all 0.25s ease-in-out;

            > * {
                max-width: 100%;
                max-height: 100%;
                margin: auto;
            }
        }

        .title {
            position: relative;
            font-size: 4vmin;
            text-align: center;
            opacity: 0;
            color: var(--color-text);

            transition: all 0.25s ease-in-out;
            z-index: 2;
        }

        &:hover,
        &:focus,
        &:active {
            scale: 1.1;
            border-color: var(--color-text);
            animation-iteration-count: 1 !important;
            animation-play-state: paused;

            .thumbnail-card-media {
                opacity: 0;
            }

            .title {
                opacity: 1;
            }
        }
    }
</style>
