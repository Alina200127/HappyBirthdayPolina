<script setup>
import Header from "./components/Header.vue";
</script>

<template>
    <div class="page-wrapper">
        <Header />
        <main class="main">
            <!-- в этот тег будет выводиться компонент на основании router(папка) -->
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped></style>
