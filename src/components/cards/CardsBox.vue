<template>
  <div class="cards-box">
    <div class="cards" :class="smallCards">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  small: {
    type: Boolean,
  },
})

const smallCards = computed(() => (props.small ? 'small' : ''))
</script>

<style scoped>
.cards-box {
  overflow: hidden;
  padding-right: 1px;
}
.cards {
  height: 318px;
  padding: 4px;
  display: flex;
  gap: 40px;
  transform: translateX(0px);
}
.cards.small {
  height: auto;
}
</style>
