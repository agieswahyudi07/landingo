<template>
  <section class="py-24 bg-white">
    <div class="container px-5 mx-auto">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
          <Icon icon="mdi:star" class="text-yellow-500" />
          {{ badge || 'Fitur Utama' }}
        </div>
        <h2 class="sm:text-4xl text-3xl font-extrabold text-center text-gray-900 mb-4">
          {{ title }}
        </h2>
        <p v-if="description" class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
        >
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
            <Icon :icon="feature.icon || 'mdi:check-circle'" class="text-2xl text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    required: true
  }
});
</script>

