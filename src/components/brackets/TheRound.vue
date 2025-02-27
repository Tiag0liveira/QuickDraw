<template>
  <div class="round">
    <TheMatch
      v-for="(match, index) in matches"
      :key="index"
      :player1="match.player1"
      :player2="match.player2"
    />
  </div>
</template>

<script setup lang="ts">
import TheMatch from './TheMatch.vue'

defineProps({
  matches: Array,
})
</script>

<style scoped>
.round {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
