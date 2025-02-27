<template>
  <div id="bracketContainer" class="bracket">
    <TheRound
      v-if="firstRoundMatches.length > 0"
      :bracketSize="numberOfParticipants"
      :matches="firstRoundMatches"
      :style="{ height: roundHeight + 'px' }"
    />
    <TheRound
      v-if="secondRoundMatches.length > 0"
      :bracketSize="numberOfParticipants"
      :matches="secondRoundMatches"
      :style="{ height: roundHeight + 'px' }"
    />
    <TheRound
      v-if="thirdRoundMatches.length > 0"
      :bracketSize="numberOfParticipants"
      :matches="thirdRoundMatches"
      :style="{ height: roundHeight + 'px' }"
    />
    <TheRound
      v-if="finalMatch.length > 0"
      :bracketSize="numberOfParticipants"
      :matches="finalMatch"
      :style="{ height: roundHeight + 'px' }"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import TheRound from './TheRound.vue'

const props = defineProps({
  bracketSize: {
    type: [Number, Array] as PropType<number | string[]>,
    required: true,
  },
})

let numberOfParticipants: number

if (typeof props.bracketSize === 'number') {
  numberOfParticipants = props.bracketSize
} else if (Array.isArray(props.bracketSize)) {
  numberOfParticipants = props.bracketSize.length
} else {
  numberOfParticipants = 0
}

const participants = Array.isArray(props.bracketSize)
  ? props.bracketSize
  : Array.from({ length: numberOfParticipants }, (_, index) => `Player ${index + 1}`)

const totalParticipants = Math.pow(2, Math.ceil(Math.log2(numberOfParticipants)))
const byesNeeded = totalParticipants - numberOfParticipants

const allParticipants = [...participants, ...Array(byesNeeded).fill('')]

const getRoundMatches = (round: number, participants: string[]) => {
  const matchesCount = Math.floor(participants.length / 2)
  const matchups = []

  for (let i = 0; i < matchesCount; i++) {
    const player1 = participants[i * 2]
    const player2 = participants[i * 2 + 1]
    matchups.push({ player1, player2 })
  }

  return matchups
}

const firstRoundMatches = getRoundMatches(1, allParticipants)
const secondRoundMatches = getRoundMatches(
  2,
  firstRoundMatches.map((match) => match.player1).filter((player) => player !== 'Bye'),
)
const thirdRoundMatches = getRoundMatches(
  3,
  secondRoundMatches.map((match) => match.player1).filter((player) => player !== 'Bye'),
)
const finalMatch = getRoundMatches(
  4,
  thirdRoundMatches.map((match) => match.player1).filter((player) => player !== 'Bye'),
)

let roundHeight = 0
if (numberOfParticipants == 2) {
  roundHeight = 99
} else if (numberOfParticipants > 2 && numberOfParticipants <= 4) {
  roundHeight = 218
} else if (numberOfParticipants > 4 && numberOfParticipants <= 8) {
  roundHeight = 456
} else if (numberOfParticipants > 8 && numberOfParticipants <= 16) {
  roundHeight = 932
} else if (numberOfParticipants > 16 && numberOfParticipants <= 32) {
  roundHeight = 1884
}
</script>

<style scoped>
#bracketContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  position: absolute;
}
.bracket {
  display: flex;
  justify-content: space-around;
  gap: 40px;
}
</style>
