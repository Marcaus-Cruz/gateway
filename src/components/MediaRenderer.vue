<template>
    <div class="media-renderer">
        <img v-if="computedType === 'image'" :src="mediaUrl" :alt="alt" />

        <video
            v-else-if="computedType === 'video'"
            :src="mediaUrl"
            controls
            playsinline
            preload="metadata"
        />

        <iframe
            v-else-if="computedType === 'pdf'"
            title="pdf"
            :src="mediaUrl"
            type="application/pdf"
        ></iframe>

        <div v-else class="unsupported">Unsupported media type</div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        mediaUrl: { type: String, required: true },
        alt: { type: String, default: '' },
        type: { type: String, default: null },
    });

    const computedType = computed(() => {
        if (props.type) return props.type;

        const typeMap = Object.freeze({
            pdf: /\.pdf$/i,
            image: /\.(png|jpe?g)$/i,
            video: /\.(mp4|mov|avi)$/i,
        });

        for (const [type, regex] of Object.entries(typeMap)) {
            console.log(regex.test(props.mediaUrl), props.mediaUrl, regex);
            if (regex.test(props.mediaUrl)) return type;
        }

        return null;
    });
</script>

<style lang="scss">
    .media-renderer {
        @include flex-container(row, nowrap, center, center);
        width: 100%;
        max-height: 100%;

        iframe,
        video,
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        .unsupported {
            color: red;
            font-style: italic;
        }
    }
</style>
