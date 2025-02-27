<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="22.5" />
    <div class="main">
      <TheHeader :title="i18n.global.t('TournamentSize')" />

      <CardsBox small>
        <TournamentFormatCard
          small
          name="size"
          :description="i18n.global.t('ParticipantsByName')"
          @click="toggleParticipants"
          :checked="showParticipants"
        />
        <TournamentFormatCard
          small
          name="size"
          :description="i18n.global.t('ParticipantsByNumber')"
          @click="toggleNumOfParticipants"
        />
      </CardsBox>

      <div class="textarea-info" v-if="showParticipants">
        <TheHeader :title="i18n.global.t('Participants')" />
        <p>{{ i18n.global.t('NamePerLine') }}</p>
        <BaseTextarea
          :placeholder="i18n.global.t('TextareaPlaceholder')"
          v-model="participantsText"
          @input="updateParticipants"
        />
        <RandomOptions :text="i18n.global.t('RandomizeNames')" />
      </div>

      <div class="number-info" v-if="showNumOfParticipants">
        <TheHeader :title="i18n.global.t('NumberOfParticipants')" />
        <BaseNumber
          :step="1"
          :min="2"
          :startAt="participantsCount"
          :max="32"
          v-model="participantsCount"
          @input="updateParticipants"
        />
      </div>
    </div>
  </main>
  <TheFooter showBack="/" showNext="/teams" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBracketStore } from '@/stores/useBracketStore'
import { useI18n } from 'vue-i18n'
import i18n from '@/plugins/i18n'
import TheNavbar from '../components/nav/TheNavbar.vue'
import ProgressBar from '../components/UI/ProgressBar.vue'
import TheHeader from '../components/header/TheHeader.vue'
import CardsBox from '../components/cards/CardsBox.vue'
import TournamentFormatCard from '../components/cards/TournamentFormatCard.vue'
import BaseTextarea from '../components/UI/textarea/BaseTextarea.vue'
import RandomOptions from '../components/UI/RandomOptions.vue'
import BaseNumber from '../components/UI/inputs/number/BaseNumber.vue'
import TheFooter from '../components/foooter/TheFooter.vue'

const store = useBracketStore()

const showParticipants = ref(true)
const showNumOfParticipants = ref(false)

const participantsText = ref(
  store.participants && Array.isArray(store.participants) ? store.participants.join('\n') : '',
)
const participantsCount = ref(
  store.participants && !Array.isArray(store.participants) ? store.participants : 2,
)

watch(participantsText, (newText) => {
  const participantArray = newText
    .split('\n')
    .map((name) => name.trim())
    .filter((name) => name !== '')
  store.setParticipants(participantArray)
})

watch(participantsCount, (newCount) => {
  store.setParticipants(newCount)
})

function toggleParticipants() {
  showParticipants.value = true
  showNumOfParticipants.value = false
}

function toggleNumOfParticipants() {
  showParticipants.value = false
  showNumOfParticipants.value = true
}

function updateParticipants() {
  if (showParticipants.value) {
    const participantArray = participantsText.value
      .split('\n')
      .map((name) => name.trim())
      .filter((name) => name !== '')
    store.setParticipants(participantArray)
  } else if (showNumOfParticipants.value) {
    store.setParticipants(participantsCount.value)
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
.number-info,
.textarea-info {
  margin-top: 32px;
}
</style>
