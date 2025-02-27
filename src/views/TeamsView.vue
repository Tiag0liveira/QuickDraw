<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="37.5" />
    <div class="main">
      <TheHeader title="Teams" :navigable="true" />

      <CardsBox>
        <TournamentFormatCard
          name="teams"
          v-for="tournamentTeam in tournamentTeams"
          :key="tournamentTeam.title"
          :title="tournamentTeam.title"
          :imageSrc="tournamentTeam.imageSrc"
          :description="tournamentTeam.description"
          :disabled="tournamentTeam.disabled"
          :checked="tournamentTeam.checked"
          @click="tournamentTeam.disabled ? null : check(tournamentTeam)"
        />
      </CardsBox>

      <RandomOptions
        v-if="showRandom"
        text="Randomly distributes selections or teams among the participants"
      />
    </div>
  </main>
  <TheFooter showBack="/size" showNext="/league" />
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

const tournamentTeams = ref([
  {
    title: 'Only One Championship',
    imageSrc: '../../images/page3/only_one_championship.png',
    description: 'Only teams from the chosen championship.',
    checked: true,
    disabled: false,
    showOptions: false,
  },
  {
    title: 'Only One League',
    imageSrc: '../../images/page3/only_one_league.png',
    description: 'Only teams from the chosen league.',
    disabled: false,
    showOptions: false,
  },
  {
    title: 'Only Teams',
    imageSrc: '../../images/page3/only_teams.png',
    description: 'All the teams from all leagues.',
    disabled: false,
    showOptions: true,
  },
  {
    title: 'Only Selections',
    imageSrc: '../../images/page3/only_selections.png',
    description: 'All selections.',
    disabled: false,
    showOptions: true,
  },
])

const showRandom = ref(false)

function check(tournamentTeams: { title: string; showOptions: boolean }) {
  store.setTeams(tournamentTeams.title)
  if (tournamentTeams.showOptions) {
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
