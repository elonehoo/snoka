<script lang="ts" setup>
import { FileIcon } from '@zhuowenli/vue-feather-icons'
import { defineProps } from 'vue'
import StatusIcon from './StatusIcon.vue'
const props = defineProps({
  file: Object,
})
</script>

<template>
  <router-link
    :to="{
      name: 'run-test-file',
      params: {
        slug: props.file?.slug,
      },
    }"
    class="px-3 flex items-center hover:bg-gray-50 dark:hover:bg-gray-900 space-x-2 h-8"
  >
    <StatusIcon
      :status="props.file?.status"
      :icon="FileIcon"
      class="w-5 h-5"
    />
    <span
      class="flex-1 truncate py-1"
      :class="{
        'path opacity-60': props.file?.status === 'skipped',
      }"
    >
      {{ props.file?.testFile.relativePath }}
    </span>
    <span
      v-if="props.file?.duration != null"
      class="flex-none text-gray-300 dark:text-gray-700"
    >
      {{ props.file?.duration }}ms
    </span>
  </router-link>
</template>

<style scoped>
.router-link-active {
  @apply bg-purple-50 text-purple-800 dark:bg-purple-900 dark:text-purple-200;
  .path {
    @apply opacity-100;
  }
}
</style>
