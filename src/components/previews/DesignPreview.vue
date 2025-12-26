<template>
  <Suspense>
    <template #default>
      <component v-if="previewComponent" :is="previewComponent" />
      <div v-else class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <Icon icon="mdi:alert-circle" class="text-6xl text-gray-400 mb-4 mx-auto" />
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Design tidak ditemukan</h2>
          <p class="text-gray-600 mb-4">Design yang Anda cari tidak tersedia atau preview belum tersedia.</p>
          <a href="/gallery" class="text-indigo-600 hover:text-indigo-700 font-semibold">
            Kembali ke Gallery
          </a>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <Icon icon="mdi:loading" class="text-6xl text-indigo-500 mb-4 mx-auto animate-spin" />
          <p class="text-gray-600">Memuat preview...</p>
        </div>
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { designs } from '@/data/designs';
import { Icon } from '@iconify/vue';

const props = defineProps({
  designId: {
    type: String,
    required: true
  }
});

const designId = props.designId;

// Find design by slug/id
const design = computed(() => {
  return designs.find(d => d.slug === designId || d.id === designId);
});

// Map design to preview component
const previewComponent = computed(() => {
  if (!design.value) return null;
  
  const componentMap = {
    'ecommerce-modern': () => import('@/components/previews/EcommerceModern.vue'),
    'service-business': () => import('@/components/previews/ServiceBusiness.vue'),
    'product-launch': () => import('@/components/previews/ProductLaunch.vue'),
    'online-course': () => import('@/components/previews/OnlineCourse.vue'),
    'healthcare': () => import('@/components/previews/Healthcare.vue'),
    'restaurant': () => import('@/components/previews/Restaurant.vue'),
    'fashion-store': () => import('@/components/previews/FashionStore.vue'),
    'consulting': () => import('@/components/previews/Consulting.vue'),
    'tech-product': () => import('@/components/previews/TechProduct.vue'),
    'tech-product-v2': () => import('@/components/previews/TechProductV2.vue'),
  };
  
  const componentLoader = componentMap[design.value.slug] || componentMap[design.value.id];
  if (componentLoader) {
    return defineAsyncComponent(componentLoader);
  }
  return null;
});
</script>


