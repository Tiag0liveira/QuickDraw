<template>
  <label class="card-label">
    <input type="radio" name="tournament" class="card-radio" :disabled="disabled" :checked="checked" />
    <div class="card">
      <h3>{{ title }}</h3>
      <img :src="computedImageSrc" :alt="title" />
      <span>{{ description }}</span>
    </div>
  </label>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
  checked: {
    type: Boolean,
    required: false,
  },
})

const computedImageSrc = computed(() => `../../public/images/svg/${props.imageSrc}`)
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
