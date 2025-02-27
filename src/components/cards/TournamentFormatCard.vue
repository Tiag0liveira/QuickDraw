<template>
  <label class="card-label">
    <input type="radio" :name="name" class="card-radio" :disabled="disabled" :checked="checked" />
    <div class="card" :class="[smallCards, selectionCards]">
      <h3 v-if="title">{{ title }}</h3>
      <img v-if="imageSrc" :src="imageSrc" :alt="title" />
      <span v-if="description">{{ description }}</span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    small?: boolean
    selections?: boolean
    name?: string
    title?: string
    imageSrc?: string
    description?: string
    disabled?: boolean
    checked?: boolean
  }>(),
  {},
)

const smallCards = computed(() => (props.small ? 'small' : null))
const selectionCards = computed(() => (props.selections ? 'selections' : null))
</script>

<style scoped>
.card-radio {
  display: none;
}
.card-radio:disabled + .card {
  filter: brightness(0.5);
  cursor: default;
}
.card {
  background-color: var(--navbar-color);
  width: 240px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  cursor: pointer;
  transition: all ease 0.2s;
  height: 310px;
}
.card.small {
  width: auto;
  height: auto;
}
.card.selections {
  height: 220px;
}
.card-radio:checked + .card {
  outline: 1px solid var(--main-color);
}
.card h3 {
  align-self: center;
  user-select: none;
}
.card img {
  align-self: center;
  width: 200px;
  max-height: 112px;
  margin: 12px 0;
  object-fit: contain;
}
.card span {
  overflow: auto;
  padding-right: 8px;
  user-select: none;
}
.card span::-webkit-scrollbar {
  width: 4px;
}

.card span::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: var(--scroll-color);
}

.card span::-webkit-scrollbar-track {
  border-radius: 50px;
  background-color: transparent;
}
</style>
