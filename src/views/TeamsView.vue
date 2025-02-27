<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="37.5" />
    <div class="main">
      <TheHeader :title="i18n.global.t('Teams')" :navigable="true" />

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
        :text="i18n.global.t('RandomTeams')"
      />
    </div>
  </main>
  <TheFooter showBack="/size" showNext="/league" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBracketStore } from '@/stores/useBracketStore'
import { useI18n } from 'vue-i18n'
import i18n from '@/plugins/i18n'
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
    title: i18n.global.t('OnlyOneChampionship'),
    imageSrc: '../../images/page3/only_one_championship.png',
    description: i18n.global.t('OnlyOneChampionshipDesc'),
    checked: true,
    disabled: false,
    showOptions: false,
  },
  {
    title: i18n.global.t('OnlyOneLeague'),
    imageSrc: '../../images/page3/only_one_league.png',
    description: i18n.global.t('OnlyOneLeagueDesc'),
    disabled: false,
    showOptions: false,
  },
  {
    title: i18n.global.t('OnlyTeams'),
    imageSrc: '../../images/page3/only_teams.png',
    description: i18n.global.t('OnlyTeamsDesc'),
    disabled: false,
    showOptions: true,
  },
  {
    title: i18n.global.t('OnlySelections'),
    imageSrc: '../../images/page3/only_selections.png',
    description: i18n.global.t('OnlySelectionsDesc'),
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
