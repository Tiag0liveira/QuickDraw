<template>
  <div class="random-options">
    <SwitchButton></SwitchButton>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SwitchButton from './buttons/SwitchButton.vue'
import { useBracketStore } from '@/stores/useBracketStore'

const store = useBracketStore()

const props = defineProps<{ text: string }>()

const thirdPlace = ref(false)

watch(thirdPlace, (newValue) => {
  store.setThirdPlace(newValue)
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
