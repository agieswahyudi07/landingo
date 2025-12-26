<template>
  <div class="design-thumbnail-wrapper">
    <div 
      ref="thumbnailContainer" 
      class="thumbnail-container"
      :style="{ 
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${containerWidth}px`,
        height: `${containerHeight}px`
      }"
    >
      <Suspense>
        <template #default>
          <component v-if="previewComponent" :is="previewComponent" />
        </template>
        <template #fallback>
          <div class="loading-placeholder">
            <Icon icon="mdi:loading" class="animate-spin text-gray-400" />
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  componentName: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 300
  }
});

const thumbnailContainer = ref(null);
const previewComponent = ref(null);
const scale = ref(0.25); // Scale down to 25% for thumbnail
const containerWidth = ref(1600); // Base width for desktop design
const containerHeight = ref(900); // Base height for desktop design

// Load all preview components eagerly/lazily
const modules = import.meta.glob('@/components/previews/*.vue');

const loadComponent = async () => {
  // Reset component first to ensure clean state
  previewComponent.value = null;
  
  if (!props.componentName) return;

  try {
    // Find the matching module key
    const moduleKey = Object.keys(modules).find(path => 
      path.includes(`/${props.componentName}.vue`)
    );

    if (moduleKey) {
      const componentModule = await modules[moduleKey]();
      previewComponent.value = componentModule.default;
      
      // Calculate scale based on thumbnail size
      // Most landing pages are designed for ~1920px width
      const baseWidth = 1920;
      const baseHeight = 1080;
      
      const scaleX = props.width / baseWidth;
      const scaleY = props.height / baseHeight;
      scale.value = Math.min(scaleX, scaleY) * 0.8; // Add some padding
      
      containerWidth.value = props.width / scale.value;
      containerHeight.value = props.height / scale.value;
    } else {
      console.warn(`Preview component not found: ${props.componentName}`);
    }
  } catch (error) {
    console.error('Error loading preview component:', error);
    previewComponent.value = null;
  }
};

// Watch for componentName changes
watch(() => props.componentName, () => {
  loadComponent();
}, { immediate: false });

onMounted(() => {
  loadComponent();
});

onUnmounted(() => {
  // Cleanup: reset component to ensure proper unmounting
  previewComponent.value = null;
});
</script>

<style scoped>
.design-thumbnail-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
}

.thumbnail-container {
  position: relative;
  pointer-events: none;
  user-select: none;
}

.loading-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
}

/* Disable all interactions in thumbnail */
.thumbnail-container :deep(*) {
  pointer-events: none !important;
  cursor: default !important;
}

/* Optimize rendering for thumbnail */
.thumbnail-container :deep(img),
.thumbnail-container :deep(video),
.thumbnail-container :deep(iframe) {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Hide scrollbars */
.thumbnail-container :deep(*) {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.thumbnail-container :deep(*)::-webkit-scrollbar {
  display: none;
}

/* Reduce animations for better performance */
.thumbnail-container :deep(*) {
  animation-duration: 0s !important;
  animation-delay: 0s !important;
  transition-duration: 0s !important;
}
</style>

