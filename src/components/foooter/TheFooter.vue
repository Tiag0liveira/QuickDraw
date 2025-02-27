<template>
  <footer>
    <div class="page-nav">
      <BaseButton v-if="showBack" :text="i18n.global.t('BackBtn')" classe="back" :goTo="showBack" />
      <div></div>
      <BaseButton v-if="showNext" :text="i18n.global.t('NextBtn')" classe="next" :goTo="showNext" />
      <BaseButton v-if="showDownload" :text="i18n.global.t('Download')" classe="download" @click="download" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import i18n from '@/plugins/i18n'
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
