<template>
  <label class="card-label">
    <input type="radio" :name="name" class="card-radio" :disabled="disabled" :checked="checked" />
    <div class="card" :class="smallCards">
      <h3 v-if="title">{{ title }}</h3>
      <img v-if="imageSrc" :src="computedImageSrc" :alt="title" />
      <span v-if="description">{{ description }}</span>
    </div>
  </label>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  small: {
    type: Boolean,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
  description: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  checked: {
    type: Boolean,
  },
})

const computedImageSrc = computed(() => `../../public/images/svg/${props.imageSrc}`)
const smallCards = computed(() => (props.small ? 'small' : ''))
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
  background-color: #444444;
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
.card-radio:checked + .card {
  outline: 1px solid #2ed573;
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
  background-color: #555555;
}

.card span::-webkit-scrollbar-track {
  border-radius: 50px;
  background-color: transparent;
}
</style>
