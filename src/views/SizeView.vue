<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="22.5" />
    <div class="main">
      <TheHeader title="Bracket Size" />

      <CardsBox small>
        <TournamentFormatCard
          small
          name="size"
          description="Use the number of participants provided below"
          @click="toggleParticipants"
          :checked="true"
        />
        <TournamentFormatCard
          small
          name="size"
          description="Use the number of participants provided below"
          @click="toggleNumOfParticipants"
        />
      </CardsBox>

      <div class="textarea-info" v-if="showParticipants">
        <TheHeader title="Participants" />
        <p>One name per line</p>
        <BaseTextarea placeholder="Enter participants here" />
        <RandomOptions text="Randomize names" />
      </div>

      <div class="number-info" v-if="showNumOfParticipants">
        <TheHeader title="Number of Participants" />
        <BaseNumber :dec="1" :inc="1" :min="2" :startAt="2" :max="32" />
      </div>
    </div>
  </main>
  <TheFooter showBack="/" showNext="/teams" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheNavbar from '../components/nav/TheNavbar.vue'
import ProgressBar from '../components/UI/ProgressBar.vue'
import TheHeader from '../components/header/TheHeader.vue'
import CardsBox from '../components/cards/CardsBox.vue'
import TournamentFormatCard from '../components/cards/TournamentFormatCard.vue'
import BaseTextarea from '../components/UI/textarea/BaseTextarea.vue'
import RandomOptions from '../components/UI/RandomOptions.vue'
import BaseNumber from '../components/UI/inputs/number/BaseNumber.vue'
import TheFooter from '../components/foooter/TheFooter.vue'

const showParticipants = ref(true)
const showNumOfParticipants = ref(false)

// Toggle functions
function toggleParticipants() {
  showParticipants.value = true
  showNumOfParticipants.value = false
}

function toggleNumOfParticipants() {
  showParticipants.value = false
  showNumOfParticipants.value = true
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
