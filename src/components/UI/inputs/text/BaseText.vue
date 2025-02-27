<template>
  <input
    autocomplete="off"
    :type="pass ? 'password' : 'text'"
    id="tournament-name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
defineProps({
  modelValue: String,
  placeholder: String,
  pass: Boolean,
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
#tournament-name {
  background-color: var(--navbar-color);
  color: var(--gray-color);
  border: none;
  padding: 10px;
  display: flex;
  border-radius: 10px;
  height: 50px;
  width: 300px;
}

#tournament-name:hover,
#tournament-name:focus-visible {
  outline: 1px solid var(--main-color);
}
</style>
