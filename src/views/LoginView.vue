<template>
  <TheNavbar />
  <main>
    <div class="login">
      <BaseText placeholder="Username" />
      <BaseText placeholder="Password" pass />
    </div>
  </main>
</template>

<script setup lang="ts">
import TheNavbar from '@/components/nav/TheNavbar.vue'
import BaseText from '@/components/UI/inputs/text/BaseText.vue'
</script>

<style scoped>
main {
  display: flex;
  height: calc(100vh - 60px);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.login {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
