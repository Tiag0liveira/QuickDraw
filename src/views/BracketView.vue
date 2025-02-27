<template>
  <TheNavbar />
  <main ref="captureMain">
    <img
      src=""
      alt=""
      id="bracketImage"
      crossorigin="anonymous"
      class="background-bracket hidden"
    />
    <h1 id="txt-tournament-name" :style="{ color: bracketStore.color }">
      {{ bracketStore.name }}
    </h1>
    <TheSingleElimination
      :bracketSize="bracketStore.participants"
      :borderColor="bracketStore.color"
    />
  </main>
  <TheFooter :showBack="'/name'" :showDownload="true" @download="captureAndDownload" />
</template>

<script setup lang="ts">
import { useBracketStore } from '@/stores/useBracketStore'
import TheNavbar from '../components/nav/TheNavbar.vue'
import TheSingleElimination from '@/components/brackets/TheSingleElimination.vue'
import TheFooter from '../components/foooter/TheFooter.vue'

const bracketStore = useBracketStore()

function captureAndDownload() {
  console.log('download bracket')
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.background-bracket {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
}
.hidden {
  display: none;
}
#txt-tournament-name {
  text-align: center;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  color: #ccc;
}
</style>
