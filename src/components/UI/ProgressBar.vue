<template>
  <div class="progress-bar">
    <div class="bar"></div>
    <div class="bar completed" :style="{ width: progress + '%' }"></div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(7.5) }">1</div>
      <p class="step-name">Format</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(22.5) }">2</div>
      <p class="step-name">Size</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(37.5) }">3</div>
      <p class="step-name">Teams</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(52.5) }">4</div>
      <p class="step-name">League</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(60) }">5</div>
      <p class="step-name">Name</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  progress: {
    type: Number,
    required: true,
  },
})

function isStepActive(stepValue: number) {
  return props.progress >= stepValue
}
</script>

<style scoped>
.progress-bar {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}

.bar {
  width: 60%;
  height: 8px;
  background-color: #444444;
  position: absolute;
  margin-top: 8px;
  border-radius: 50px;
}

.bar.completed {
  width: 20%;
  background-color: #2ed573;
}

.step-info {
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.step {
  background-color: #444444;
  color: #cccccc;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step.completed,
.step.active {
  background-color: #2ed573;
  color: #1f1f1f;
}

.step-name {
  position: absolute;
  color: #cccccc;
  margin-top: 24px;
}
</style>
