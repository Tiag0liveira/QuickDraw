<template>
  <div class="progress-bar">
    <div class="bar"></div>
    <div class="bar completed" :style="{ width: progress + '%' }"></div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(7.5) }">1</div>
      <p class="step-name">{{ i18n.global.t('Format') }}</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(22.5) }">2</div>
      <p class="step-name">{{ i18n.global.t('Size') }}</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(37.5) }">3</div>
      <p class="step-name">{{ i18n.global.t('Teams') }}</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(52.5) }">4</div>
      <p class="step-name">{{ i18n.global.t('League') }}</p>
    </div>
    <div class="step-info">
      <div class="step" :class="{ active: isStepActive(60) }">5</div>
      <p class="step-name">{{ i18n.global.t('Name') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import i18n from '@/plugins/i18n'

const props = withDefaults(
  defineProps<{
    progress: number
  }>(),
  {},
)

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
  background-color: var(--navbar-color);
  position: absolute;
  margin-top: 8px;
  border-radius: 50px;
}

.bar.completed {
  width: 20%;
  background-color: var(--main-color);
}

.step-info {
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.step {
  background-color: var(--navbar-color);
  color: var(--gray-color);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step.completed,
.step.active {
  background-color: var(--main-color);
  color: var(--background-color);
}

.step-name {
  position: absolute;
  color: var(--gray-color);
  margin-top: 24px;
}
</style>
