<template>
  <div class="design-thumbnail-wrapper" ref="wrapperRef">
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
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  componentName: {
    type: String,
    required: true
  },
  // We keep width and height props for backward compatibility, 
  // but they won't strictly dictate the CSS anymore if the wrapper resizes.
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 300
  }
});

const wrapperRef = ref(null);
const thumbnailContainer = ref(null);
const previewComponent = ref(null);
const scale = ref(0.25); 
const containerWidth = ref(1920); 
const containerHeight = ref(2000); // Make height tall enough so it covers the thumbnail wrapper fully before overflow hidden

const modules = import.meta.glob('@/components/previews/*.vue');
let resizeObserver = null;

const updateScale = () => {
  if (!wrapperRef.value) return;
  const { clientWidth } = wrapperRef.value;
  // Always scale to fit the exact width of the wrapper layout
  if (clientWidth > 0) {
    scale.value = clientWidth / containerWidth.value;
  }
};

const loadComponent = async () => {
  previewComponent.value = null;
  if (!props.componentName) return;

  try {
    const moduleKey = Object.keys(modules).find(path => 
      path.includes(`/${props.componentName}.vue`)
    );

    if (moduleKey) {
      const componentModule = await modules[moduleKey]();
      previewComponent.value = componentModule.default;
      
      nextTick(() => {
        updateScale();
      });
    } else {
      console.warn(`Preview component not found: ${props.componentName}`);
    }
  } catch (error) {
    console.error('Error loading preview component:', error);
    previewComponent.value = null;
  }
};

watch(() => props.componentName, () => {
  loadComponent();
}, { immediate: false });

onMounted(() => {
  loadComponent();
  
  resizeObserver = new ResizeObserver(() => {
    updateScale();
  });
  
  if (wrapperRef.value) {
    resizeObserver.observe(wrapperRef.value);
  }
});

onUnmounted(() => {
  previewComponent.value = null;
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
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

