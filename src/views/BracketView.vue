<template>
  <TheNavbar />
  <main></main>
  <TheFooter showBack="/name" showDownload />
</template>

<script setup lang="ts">
import TheNavbar from '../components/nav/TheNavbar.vue'
import TheFooter from '../components/foooter/TheFooter.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
