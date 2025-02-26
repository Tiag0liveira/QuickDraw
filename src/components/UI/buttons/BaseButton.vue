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

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  goTo: {
    type: String,
  },
  classe: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
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
  color: #1f1f1f;
  border: none;
  transition: all ease 0.5s;
}

.back {
  background-color: #444444;
}
.next,
.download {
  background-color: #2ed573;
}

.back p {
  color: #cccccc;
}
.next p,
.download p {
  color: #1f1f1f;
}

.back:hover {
  outline: 1px solid #444444;
  border: 1px solid #1f1f1f;
}
.next:hover,
.download:hover {
  outline: 1px solid #2ed573;
  border: 1px solid #1f1f1f;
}
</style>
