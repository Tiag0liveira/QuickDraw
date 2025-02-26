<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="52.5" />
    <div class="main">
      <TheHeader title="League" :navigable="true" />

      <CardsBox small>
        <TournamentFormatCard
          selections
          name="teams"
          v-for="tournamentLeague in tournamentLeagues"
          :key="tournamentLeague.title"
          :title="tournamentLeague.title"
          :imageSrc="tournamentLeague.imageSrc"
          :disabled="tournamentLeague.disabled"
          :checked="tournamentLeague.checked"
        />
      </CardsBox>

      <RandomOptions text="Randomly choose a league" />
    </div>
  </main>
  <TheFooter showBack="/teams" showNext="/name" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheNavbar from '../components/nav/TheNavbar.vue'
import ProgressBar from '../components/UI/ProgressBar.vue'
import TheHeader from '../components/header/TheHeader.vue'
import CardsBox from '../components/cards/CardsBox.vue'
import TournamentFormatCard from '../components/cards/TournamentFormatCard.vue'
import RandomOptions from '../components/UI/RandomOptions.vue'
import TheFooter from '../components/foooter/TheFooter.vue'

const tournamentLeagues = ref([
  {
    title: 'UEFA Champions League',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    checked: true,
    disabled: false,
    showOptions: false,
  },
  {
    title: 'UEFA Europa League',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: false,
  },
  {
    title: 'UEFA Super Cup',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: true,
  },
  {
    title: 'CONMEBOL Libertadores',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: true,
  },
  {
    title: 'UEFA Women`s Champions League',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: true,
  },
  {
    title: 'FA Cup',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: true,
  },
  {
    title: 'Coppa Italia',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: true,
  },
  {
    title: 'DFB-Pokal',
    imageSrc: '../../public/images/page3/only_one_championship.png',
    disabled: false,
    showOptions: true,
  },
])
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  padding: 0 8%;
  height: calc(100vh - 222px);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}
</style>
