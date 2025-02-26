<template>
  <TheNavbar />
  <main>
    <ProgressBar :progress="60" />
    <div class="main">
      <TheHeader title="Tournament Name" />
      <BaseText placeholder="Enter the name here" />

      <div class="color-info">
        <TheHeader title="Tournament Color" />
        <BaseColorPicker />
      </div>
    </div>
  </main>
  <TheFooter showBack="/league" showNext="/bracket" />
</template>

<script setup lang="ts">
import TheNavbar from '../components/nav/TheNavbar.vue'
import ProgressBar from '../components/UI/ProgressBar.vue'
import TheHeader from '../components/header/TheHeader.vue'
import BaseText from '../components/UI/inputs/text/BaseText.vue'
import BaseColorPicker from '../components/UI/colorPicker/BaseColorPicker.vue'
import TheFooter from '../components/foooter/TheFooter.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main {
  padding: 0 8%;
  height: calc(100vh - 222px);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}
.color-info {
  margin-top: 32px;
}
</style>
