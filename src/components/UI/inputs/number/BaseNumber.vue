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

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    step: number
    min?: number
    startAt: number
    max?: number
  }>(),
  {
    min: 1,
    max: 100,
  },
)

const emit = defineEmits(['update:modelValue'])

const participantInput = ref(props.startAt)

watch(participantInput, (newValue) => {
  emit('update:modelValue', newValue)
})

function decrease() {
  const newValue = participantInput.value - props.step
  if (newValue >= props.min) participantInput.value = newValue
}

function increase() {
  const newValue = Number(participantInput.value) + Number(props.step)
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
  background-color: var(--navbar-color);
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
  color: var(--gray-color);
  height: 32px;
  width: 48px;
  cursor: pointer;
}

#decrease:hover,
#increase:hover {
  outline: 1px solid var(--main-color);
}

#decrease:disabled,
#increase:disabled {
  background-color: var(--scroll-color);
  color: var(--gray-color);
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
  color: var(--gray-color);
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
