<template>
  <TheNavbar></TheNavbar>
  <main>
    <div>
      <h2>Tournament Format</h2>
      <div class="cards-nav">
        <i class="fa-solid fa-angle-left" aria-hidden="true" style="color: #555555"></i>
        <i class="fa-solid fa-angle-right" aria-hidden="true" style="color: #555555"></i>
      </div>
    </div>

    <div class="cards-box">
      <div class="cards" style="transform: translateX(0px)">
        <TournamentFormatCard
          v-for="tournamentFormat in tournamentFormats"
          :key="tournamentFormat.title"
          :title="tournamentFormat.title"
          :imageSrc="tournamentFormat.imageSrc"
          :description="tournamentFormat.description"
          :disabled="tournamentFormat.disabled"
          :checked="tournamentFormat.checked"
        />
      </div>
    </div>

    <RandomOptions text="Include a match for 3rd place" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheNavbar from '../components/nav/TheNavbar.vue'
import TournamentFormatCard from '../components/cards/TournamentFormatCard.vue'
import RandomOptions from '../components/UI/RandomOptions.vue'

const tournamentFormats = ref([
  {
    title: 'Single Elimination',
    imageSrc: 'single_elimination.svg',
    description: 'The loser of each match will be immediately eliminated from the tournament.',
    disabled: false,
    checked: true,
  },
  {
    title: 'Double Elimination',
    imageSrc: 'double_elimination.svg',
    description: 'A participant gets eliminated upon having lost two games or matches.',
    disabled: true,
  },
  {
    title: 'Round Robin',
    imageSrc: 'round_robin.svg',
    description: 'Each participant meets all other participants in turn.',
    disabled: true,
  },
  {
    title: 'Swiss',
    imageSrc: 'swiss.svg',
    description:
      'Participants are paired to ensure that each competitor plays opponents with a similar running score, but not the same opponent more than once.',
    disabled: true,
  },
  {
    title: 'Free-for-all',
    imageSrc: 'free_for_all.svg',
    description:
      'Several participants are grouped in one match and the winners will advance to the next round.',
    disabled: true,
  },
])
</script>

<style scoped>
main {
  padding: 0 8%;
  height: calc(100vh - 222px);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}
.cards-box {
  overflow: hidden;
  padding-right: 1px;
}
.cards {
  height: 318px;
  padding: 4px;
  display: flex;
  gap: 40px;
}
</style>
