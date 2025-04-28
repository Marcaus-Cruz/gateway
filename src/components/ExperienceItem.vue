<template>
    <section class="experience-item">
        <TextImageContainer :mediaUrl="mediaUrl" :text="textArray"></TextImageContainer>
    </section>
</template>

<script setup>
    import TextImageContainer from '@/components/TextImageContainer.vue';
    import { onMounted, ref } from 'vue';

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
                font-size: 0.8em;
            }

            .line-0,
            .line-1 {
                text-align: center;
            }

            .line-0 {
                // title
                font-size: 2em;
            }

            .line-1 {
                // subtitle
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
</style>
