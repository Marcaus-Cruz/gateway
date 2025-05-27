<template>
    <iframe
        title="Casino"
        src="https://marcaus-cruz.github.io/le-casino/"
        class="iframe-casino"
    ></iframe>
</template>

<style lang="scss">
    .iframe-casino {
        width: 100vw;
        height: calc(100vh - var(--header-height));
        border: none;

        @media (orientation: portrait) {
            height: calc(100vh - var(--header-height) - 2.5em);
        }
    }
</style>
