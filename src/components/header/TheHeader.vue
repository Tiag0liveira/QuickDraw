<template>
  <div class="cards-info">
    <h2>{{ title }}</h2>
    <div class="cards-nav" v-if="navigable">
      <i class="fa-solid fa-angle-left" aria-hidden="true"></i>
      <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    navigable?: boolean
  }>(),
  {},
)
</script>

<style scoped>
.cards-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cards-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
}

.cards-nav i {
  color: var(--scroll-color);
  cursor: pointer;
}
</style>
