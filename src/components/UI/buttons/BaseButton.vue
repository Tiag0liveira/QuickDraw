<template>
  <router-link v-if="goTo" :to="goTo">
    <button :class="classe">
      <p>{{ text }}</p>
    </button>
  </router-link>
  <button v-else :class="classe">
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    goTo?: string
    classe: string
    text: string
  }>(),
  {},
)
</script>

<style scoped>
.back,
.next,
.download {
  height: 44px;
  border-radius: 10px;
  padding: 5px 30px;
  cursor: pointer;
  font-size: 20px;
  color: var(--background-color);
  border: none;
  transition: all ease 0.5s;
}

.back {
  background-color: var(--navbar-color);
}
.next,
.download {
  background-color: var(--main-color);
}

.back p {
  color: var(--gray-color);
}
.next p,
.download p {
  color: var(--background-color);
}

.back:hover {
  outline: 1px solid var(--navbar-color);
  border: 1px solid var(--background-color);
}
.next:hover,
.download:hover {
  outline: 1px solid var(--main-color);
  border: 1px solid var(--background-color);
}
</style>
