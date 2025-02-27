<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="7.5" />
    <div class="main">
      <TheHeader title="Tournament Format" :navigable="true" />

      <CardsBox>
        <TournamentFormatCard
          name="format"
          v-for="tournamentFormat in tournamentFormats"
          :key="tournamentFormat.title"
          :title="tournamentFormat.title"
          :imageSrc="tournamentFormat.imageSrc"
          :description="tournamentFormat.description"
          :disabled="tournamentFormat.disabled"
          :checked="tournamentFormat.checked"
          @click="tournamentFormat.disabled ? null : check(tournamentFormat)"
        />
      </CardsBox>

      <RandomOptions v-if="showRandom" text="Include a match for 3rd place" />
    </div>
  </main>
  <TheFooter showNext="/size" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBracketStore } from '@/stores/useBracketStore'
import TheNavbar from '../components/nav/TheNavbar.vue'
import ProgressBar from '../components/UI/ProgressBar.vue'
import TheHeader from '../components/header/TheHeader.vue'
import CardsBox from '../components/cards/CardsBox.vue'
import TournamentFormatCard from '../components/cards/TournamentFormatCard.vue'
import RandomOptions from '../components/UI/RandomOptions.vue'
import TheFooter from '../components/foooter/TheFooter.vue'

const store = useBracketStore()
const router = useRouter()

const tournamentFormats = ref([
  {
    title: 'Single Elimination',
    imageSrc: '../../images/svg/single_elimination.svg',
    description: 'The loser of each match will be immediately eliminated from the tournament.',
    checked: true,
    showOptions: true,
  },
  {
    title: 'Double Elimination',
    imageSrc: '../../images/svg/double_elimination.svg',
    description: 'A participant gets eliminated upon having lost two games or matches.',
    disabled: true,
    showOptions: false,
  },
  {
    title: 'Round Robin',
    imageSrc: '../../images/svg/round_robin.svg',
    description: 'Each participant meets all other participants in turn.',
    disabled: true,
    showOptions: false,
  },
  {
    title: 'Swiss',
    imageSrc: '../../images/svg/swiss.svg',
    description:
      'Participants are paired to ensure that each competitor plays opponents with a similar running score, but not the same opponent more than once.',
    disabled: true,
    showOptions: false,
  },
  {
    title: 'Free-for-all',
    imageSrc: '../../images/svg/free_for_all.svg',
    description:
      'Several participants are grouped in one match and the winners will advance to the next round.',
    disabled: true,
    showOptions: false,
  },
])

const showRandom = ref(true)

function check(tournamentFormat: { title: string; showOptions: boolean }) {
  store.setFormat(tournamentFormat.title)
  if (tournamentFormat.showOptions) {
    showRandom.value = true
  } else {
    showRandom.value = false
  }
}
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
