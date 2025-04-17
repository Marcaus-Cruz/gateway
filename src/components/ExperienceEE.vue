<template>
    <section class="ee experience-item">
        <TextImageContainer :mediaUrl="mediaUrl" :text="text"></TextImageContainer>
    </section>
</template>
<script setup>
    import TextImageContainer from '@/components/TextImageContainer.vue';

    const mediaUrl = '/src/assets/img/icon-ee.png';
    const text = [
        'Exponential Entertainment Inc.',
        "Software Engineer (May '22 - March '25)",
        'Collaborated cross-functionally in an AGILE environment to deliver promotional games for MAX, Paramount, FOX, and other top media studios, boosting brand revenue and engagement in 40+ contracts',
        'Responsible for monthly updates to Game Rooms deployed on national cable platforms through Comcast, Contour, and Verizon - including design implementation, app configurations, custom feature integrations, build deployments, and end-to-end testing',
        'Refactored client/server side codebases (JS, Node.js, Serverless) to enhance maintainability, reduce complexity and duplication, and optimize performance - cutting build/runtime load times and operational costs.',
        'Built 15 custom game engines for the HollywoodPlayer domain - including Scene Streak (Simon Says-style game using media stills) and Tile Swap (a timed challenge to unscramble TV/movie scenes), resulting in millions of playthroughs and increased user retention.',
        'Designed and developed an internal admin search tool leveraging image recognition to store, categorize, and retrieve assets by keyword, face, object, or visual similarity using AWS - streamlining content discovery and management.',
        'Maintained and extended scalable backend systems using AWS, ensuring seamless compatibility across browsers, mobile devices, and custom hardware.',
        'Engineered reusable Vue components for the Clipology online/board game, supporting its growth to 180,000+ player accounts and widespread party gameplay while maintaining a 4.5 star Amazon rating.',
    ];
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
