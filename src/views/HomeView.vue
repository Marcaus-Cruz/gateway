<template>
    <section class="view home">
        <!-- <div ref="myImage" class="me">
            <ImageWithText imageUrl="/src/assets/img/marcaus.jpg" alt="Marcaus Cruz" />
        </div> -->
        <img ref="myImage" class="me" src="/src/assets/img/marcaus.jpg" alt="Marcaus Cruz" />
        <Transition name="bounce">
            <h1 v-if="showText" ref="textSection" @click="toggleShowText">
                Hi, my name is Marcaus Cruz.
            </h1>
        </Transition>
    </section>
</template>

<script setup>
    import { gsap } from 'gsap';
    import { onMounted, ref } from 'vue';

    const showPage = ref(false);
    const showText = ref(false);
    const textSection = ref();
    const myImage = ref();

    const toggleShowPage = () => {
        showPage.value = !showPage.value;
        return showPage.value;
    };

    const toggleShowText = () => {
        showText.value = !showText.value;
        return showText.value;
    };

    const timeline = gsap.timeline({ paused: true });

    onMounted(() => {
        timeline
            .fromTo(
                myImage.value,
                { x: '-100vw', opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    x: '0vw',
                    ease: 'ease.in',
                },
                '<'
            )
            .play()
            .then(() => (showText.value = true));
    });
</script>

<style scoped>
    section {
        text-shadow: 0.1em 0.1em 0.1em black;
        margin: auto var(--header-margin-x);
        background-color: var(--color-accent);

        display: flex;
        justify-content: flex-start;
        align-items: center;

        flex-direction: column;
        height: calc(100vh - var(--header-height));
    }

    .me {
        max-width: 40vmin;
        max-height: 40vmin;
        margin: 5vmin;
        box-shadow: 0.1em 0.1em 0.1em black;
    }

    .bounce-enter-active {
        animation: bounce-in 1s;
    }

    .bounce-leave-active {
        animation: bounce-in 1s reverse;
    }

    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
