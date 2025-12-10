<template>
  <div id="app">
    <!-- Hide Header Landingo untuk preview pages -->
    <Header v-if="!isPreviewPage"/>
    <router-view/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/section/Header.vue'

const route = useRoute();

// Hide header Landingo untuk preview pages
const isPreviewPage = computed(() => {
  return route.path.startsWith('/preview/');
});
</script>
