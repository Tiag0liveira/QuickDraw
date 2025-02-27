<template>
  <div class="match">
    <p>{{ player1 }}</p>
    <p>vs</p>
    <p>{{ player2 }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  player1: String,
  player2: String,
})
</script>

<style scoped>
.match {
  background-color: var(--navbar-color);
  color: var(--gray-color);
  padding: 10px;
  width: 150px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s,
    transform 0.3s;
  min-height: 99px;
  border: 2px solid rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.match:hover {
  background-color: var(--navbar-color);
  transform: scale(1.05);
}
.match:active {
  transform: scale(1);
}
.match p {
  min-height: 25px;
}
</style>
