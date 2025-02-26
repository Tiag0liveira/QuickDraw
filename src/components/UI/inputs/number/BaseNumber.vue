<template>
  <div class="number-participants">
    <button id="decrease" @click="decrease" :disabled="participantInput <= min">-</button>
    <input
      type="number"
      id="participantInput"
      v-model.number="participantInput"
      :min="min"
      :max="max"
      @input="validateInput"
    />
    <button id="increase" @click="increase" :disabled="participantInput >= max">+</button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
  dec: {
    type: Number,
    required: true,
  },
  inc: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 1,
  },
  startAt: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    default: 100,
  },
})

const participantInput = ref(props.startAt)

function decrease() {
  const newValue = participantInput.value - props.dec
  if (newValue >= props.min) participantInput.value = newValue
}

function increase() {
  const newValue = Number(participantInput.value) + Number(props.inc)
  if (newValue <= props.max) participantInput.value = newValue
}

function validateInput() {
  if (isNaN(participantInput.value)) {
    participantInput.value = props.min
  } else {
    participantInput.value = Math.min(props.max, Math.max(props.min, participantInput.value))
  }
}
</script>

<style scoped>
.number-participants {
  background-color: #444444;
  display: flex;
  border-radius: 10px;
  height: 32px;
  width: fit-content;
}

#decrease,
#increase {
  background-color: #666;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #cccccc;
  height: 32px;
  width: 48px;
  cursor: pointer;
}

#decrease:hover,
#increase:hover {
  outline: 1px solid #2ed573;
}

#decrease:disabled,
#increase:disabled {
  background-color: #555555;
  color: #cccccc;
  cursor: default;
}

#decrease:disabled,
:hover,
#increase:disabled,
:hover {
  outline: none;
}

#participantInput {
  background-color: transparent;
  outline: none;
  border: none;
  color: #cccccc;
  text-align: center;
  height: 32px;
  width: 80px;
}

#participantInput::-webkit-outer-spin-button,
#participantInput::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
