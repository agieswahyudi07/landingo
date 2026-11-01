<script setup>
defineProps({ name: { type: String, required: true }, size: { type: String, default: '1em' } });
const icons = {
  'arrow-up-right': ['M7 17 17 7', 'M7 7h10v10'], 'arrow-right': ['M5 12h14', 'm13 6 6 6-6 6'],
  message: ['M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5Z'],
  shield: ['M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z', 'M8.5 12 11 14.5 15.5 10'], check: ['M20 6 9 17l-5-5'], 'chevron-down': ['m6 9 6 6 6-6']
};
</script>
<template><svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path v-for="path in (icons[name] || icons.check)" :key="path" :d="path" /></svg></template>
