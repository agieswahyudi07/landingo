<template>
  <Hero />
  <Suspense>
    <template #default>
      <LazySections v-if="hydrated" />
    </template>
    <template #fallback>
      <div class="text-center p-6 text-gray-400">Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import Hero from '@/components/section/Hero.vue'
import { ref, onMounted, defineAsyncComponent } from 'vue'

// Async import untuk ValueProposition, Pricing, dll
const LazySections = defineAsyncComponent(() => import('./LazySections.vue'))

const hydrated = ref(false)
onMounted(() => {
  hydrated.value = true
})
</script>
