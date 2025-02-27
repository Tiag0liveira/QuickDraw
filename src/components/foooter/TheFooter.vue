<template>
  <footer>
    <div class="page-nav">
      <BaseButton v-if="showBack" text="Back" classe="back" :goTo="showBack" />
      <div></div>
      <BaseButton v-if="showNext" text="Next" classe="next" :goTo="showNext" />
      <BaseButton v-if="showDownload" text="Download" classe="download" @click="download" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import BaseButton from '../UI/buttons/BaseButton.vue'

const emit = defineEmits<{
  (event: 'download'): void
}>()

const props = withDefaults(
  defineProps<{
    showBack?: string
    showNext?: string
    showDownload?: boolean
  }>(),
  {},
)

const download = () => {
  emit('download')
}
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
