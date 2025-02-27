<template>
  <textarea name="" id="" :value="modelValue" @input="onInput"></textarea>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, required: true },
  placeholder: { type: String, required: false },
})

const emit = defineEmits(['update:modelValue'])

function onInput(event: Event) {
  const value = (event.target as HTMLTextAreaElement).value
  emit('update:modelValue', value)
}
</script>

<style scoped>
textarea {
  background-color: var(--navbar-color);
  width: 500px;
  height: 130px;
  border-radius: 6px;
  padding: 20px;
  color: var(--gray-color);
  border: none;
  resize: none;
  padding-right: 8px;
  margin-top: 12px;
}

textarea:hover,
textarea:focus-visible {
  outline: 1px solid var(--main-color);
}

textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: var(--scroll-color);
}

textarea::-webkit-scrollbar-track {
  border-radius: 50px;
  background-color: transparent;
}
</style>
