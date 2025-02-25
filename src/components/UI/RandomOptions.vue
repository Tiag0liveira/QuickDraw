<template>
  <div class="random-options">
    <SwitchButton></SwitchButton>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import SwitchButton from './buttons/SwitchButton.vue'

import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.random-options {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
