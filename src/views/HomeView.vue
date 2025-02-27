<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="7.5" />
    <div class="main">
      <TheHeader :title="i18n.global.t('TournamentFormat')" :navigable="true" />

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

      <RandomOptions v-if="showRandom" :text="i18n.global.t('ThirdPlaceMatch')" />
    </div>
  </main>
  <TheFooter showNext="/size" />
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

const tournamentFormats = ref([
  {
    title: i18n.global.t('SingleElimination'),
    imageSrc: '../../images/svg/single_elimination.svg',
    description: i18n.global.t('SingleEliminationDesc'),
    checked: true,
    showOptions: true,
  },
  {
    title: i18n.global.t('DoubleElimination'),
    imageSrc: '../../images/svg/double_elimination.svg',
    description: i18n.global.t('DoubleEliminationDesc'),
    disabled: true,
    showOptions: false,
  },
  {
    title: i18n.global.t('RoundRobin'),
    imageSrc: '../../images/svg/round_robin.svg',
    description: i18n.global.t('RoundRobinDesc'),
    disabled: true,
    showOptions: false,
  },
  {
    title: i18n.global.t('Swiss'),
    imageSrc: '../../images/svg/swiss.svg',
    description: i18n.global.t('SwissDesc'),
    disabled: true,
    showOptions: false,
  },
  {
    title: i18n.global.t('FreeForAll'),
    imageSrc: '../../images/svg/free_for_all.svg',
    description: i18n.global.t('FreeForAllDesc'),
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
