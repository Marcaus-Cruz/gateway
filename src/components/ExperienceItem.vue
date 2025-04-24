<template>
    <section class="experience-item">
        <TextImageContainer :mediaUrl="mediaUrl" :text="textArray"></TextImageContainer>
    </section>
</template>
<script setup>
    import TextImageContainer from '@/components/TextImageContainer.vue';
    import { defineProps, onMounted, ref } from 'vue';

    const props = defineProps({
        mediaUrl: {
            type: String,
        },
        text: {
            type: Object,
        },
    });
    const textArray = ref([]);

    onMounted(() => {
        const { title = '', subtitle = '', description = [] } = props.text;
        textArray.value.push(title, subtitle, ...description);
    });
</script>
<style lang="scss">
    .experience-item > .text-image-container {
        flex-direction: row-reverse;
        align-items: flex-start;

        .text-container {
            margin-left: 1em;

            .line {
                font-size: 2vmin;
            }

            .line-0 {
                font-size: 5vmin;
            }

            .line-1 {
                font-family: 'Montserrat Medium', sans-serif;
                font-size: 3vmin;
            }
        }
    }
</style>
