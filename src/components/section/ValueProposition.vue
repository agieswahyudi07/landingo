<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const list = ref([
  {
    icon: 'mdi:palette-outline',
    text: 'Desain simpel, cepat dibuat (2-5 hari)'
  },
  {
    icon: 'mdi:cellphone-link',
    text: 'Mobile-friendly dan siap iklan'
  },
  {
    icon: 'mdi:whatsapp',
    text: 'Leads masuk langsung ke WhatsApp'
  },
  {
    icon: 'mdi:domain',
    text: 'Tanpa repot domain & hosting (kami bantu)'
  },
  {
    icon: 'mdi:search',
    text: 'Siap SEO basic untuk tampil di Google'
  },
  {
    icon: 'mdi:account-tie',
    text: 'Tampil Professional di hadapan client'
  }
])

onMounted(() => {
  gsap.from("#value-proposition h1, #value-proposition p", {
    scrollTrigger: {
      trigger: "#value-proposition",
      start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  })

  gsap.from("#value-proposition .list-value", {
    scrollTrigger: {
      trigger: "#value-proposition",
      start: "top 70%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.15
  })
})
</script>

<template>
  <section
    id="value-proposition"
    class="relative min-h-screen flex flex-row gap-5 items-center justify-center bg-[url(/assets/rect_light.svg)] bg-cover bg-center"
  >
    <div class="container px-5 py-24 mx-auto relative z-10">
      <div class="text-center mb-20">
        <h2
          class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-100 mb-4"
        >
          Kenapa Bisnismu Butuh Landingo ?
        </h2>
        <p
          class="text-base text-gray-100 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
        >
          UMKM & brand lokal kini bisa punya landing page profesional tanpa ribet
          dan tanpa mahal.
        </p>
      </div>
      <div
        class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
      >
        <div
          class="p-2 sm:w-1/2 w-full list-value"
          v-for="(item, index) in list"
          :key="index"
        >
          <div
            class="bg-gray-100 rounded flex p-4 h-full items-center"
          >
            <Icon
              :icon="item.icon"
              class="text-gray-600 w-6 h-6 flex-shrink-0 mr-4"
            />
            <span class="title-font font-medium">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
