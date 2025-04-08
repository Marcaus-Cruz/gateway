<template>
    <div class="container">
        <MediaContainer :src="imageUrl" :alt="'logo'" />
        <div v-if="text">{{ text }}</div>
    </div>
</template>

<script setup>
    import MediaContainer from '@/components/MediaContainer.vue';
    import { defineProps, onMounted } from 'vue';

    const props = defineProps({
        text: { type: String, default: '' },
        imageUrl: { type: String },
        styles: { type: Object },
    });

    // TODO: find a cleaner way to do this.
    onMounted(() => {
        console.log('ImageWithText mounted', props);
        const { styles } = props;
        if (styles) {
            if (styles.heightOfParent) {
                const { parentSelector, proportion } = styles.heightOfParent;
                const parentElement =
                    document.querySelector(parentSelector) ||
                    document.querySelector('.container').parentElement;
                const newHeight = parentElement.offsetHeight * proportion;
                document.querySelector('.container').style.height = `${newHeight}px`;
            }
        }
    });
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 100%;
    }
</style>
