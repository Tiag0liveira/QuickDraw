<template>
  <div class="div-colors">
    <label v-for="(color, index) in colors" :key="index">
      <input
        type="radio"
        name="colors"
        class="color-radio"
        :value="color"
        :checked="store.color === color"
        @change="store.setColor(color)"
      />
      <div :style="{ backgroundColor: color }"></div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useBracketStore } from '@/stores/useBracketStore'

const store = useBracketStore()

const colors = [
  'var(--gray-color)',
  'var(--background-color)',
  'var(--main-color)',
  'var(--blue-color)',
  'var(--red-color)',
  'var(--yellow-color)',
]
</script>

<style scoped>
.color-radio {
  display: none;
}

.color-radio:checked + div {
  outline: 2px solid var(--main-color);
}
.div-colors {
  background: var(--navbar-color);
  border-radius: 10px;
  padding: 12px;
  width: fit-content;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.div-colors label div {
  width: 32px;
  height: 32px;
  border-radius: 100%;
  cursor: pointer;
}
</style>
