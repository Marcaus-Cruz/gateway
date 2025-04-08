<template>
    <div class="header">
        <Logo text="Gateway" imageUrl="src/assets/MClogoWhite.png" />
        <div class="nav-buttons">
            <HeaderButton text="Home" route="/" />
            <HeaderButton text="Experience" route="/experience" />
        </div>
    </div>
</template>

<script setup>
    import Logo from './ImageWithText.vue';
    import HeaderButton from './HeaderButton.vue';
</script>

<style scoped>
    .header {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 10vh;
        padding: 1em;

        top: 0;
        left: 0;

        color: white;
        background-color: #7fb57f;
    }

    .nav-buttons {
        display: flex;
        align-items: center;
    }

    .btn-header {
        color: black;
        border: 0.5vmin solid black;
        background-color: #7fb57f;
    }

    .btn-header.active {
        color: white;
        border-color: white;
    }
</style>
