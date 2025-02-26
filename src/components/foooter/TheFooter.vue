<template>
  <footer>
    <div class="page-nav">
      <BaseButton v-if="showBack" text="Back" classe="back" :goTo="showBack" />
      <div></div>
      <BaseButton v-if="showNext" text="Next" classe="next" :goTo="showNext" />
      <BaseButton v-if="showDownload" text="Download" classe="download" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import BaseButton from '../UI/buttons/BaseButton.vue'

const props = defineProps({
  showBack: {
    type: String,
  },
  showNext: {
    type: String,
  },
  showDownload: {
    type: Boolean,
  },
})
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  padding: 0 8%;
  margin: 20px 0;
  width: 100%;
}
.page-nav {
  display: flex;
  justify-content: space-between;
  height: 44px;
}
</style>
