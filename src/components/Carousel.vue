<template>
    <section class="carousel-container">
        <button class="btn expand-btn" @click="isExpanded = !isExpanded">{{ expandText }}</button>
        <div v-show="isExpanded" class="carousel" :class="{ expanded: isExpanded }">
            <button class="btn prev-btn" @click="prevImage">Prev</button>
            <div class="carousel-content">
                <TextImageContainer
                    v-for="(carouselItem, index) in carouselItems"
                    :key="index"
                    :mediaUrl="carouselItem.mediaUrl"
                    :text="carouselItem.text"
                />
            </div>
            <button class="btn next-btn" @click="prevImage">Next</button>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue';
    import TextImageContainer from '@/components/TextImageContainer.vue';

    const isExpanded = ref(false);

    defineProps({
        carouselItems: {
            type: Array,
            default: [],
        },
        expandText: {
            type: String,
            default: 'See More',
        },
    });
</script>

<style lang="scss"></style>
