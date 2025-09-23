<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerContainer = ref(null)
const listContainer = ref(null)

const list = ref([
  { icon: 'mdi:palette-outline', text: 'Desain simpel, cepat dibuat (2-5 hari)' },
  { icon: 'mdi:cellphone-link', text: 'Mobile-friendly dan siap iklan' },
  { icon: 'mdi:whatsapp', text: 'Leads masuk langsung ke WhatsApp' },
  { icon: 'mdi:domain', text: 'Tanpa repot domain & hosting (kami bantu)' },
  { icon: 'mdi:search', text: 'Siap SEO basic untuk tampil di Google' },
  { icon: 'mdi:account-tie', text: 'Tampil Professional di hadapan client' }
])

const onCardEnter = (e) => {
    const card = e.currentTarget
    const cardContent = card.querySelector('div')

    const { clientX, clientY } = e
    const { top, left, width, height } = card.getBoundingClientRect()

    const x = (clientX - left - width / 2) / 15
    const y = (clientY - top - height / 2) / 15

    gsap.to(cardContent, {
        duration: 0.8,
        ease: 'power3.out',
        scale: 1.05,
        y: -10,
        rotationX: -y,
        rotationY: x, 
        boxShadow: '0px 15px 30px -5px rgba(0,0,0,0.2)',
    })
}

const onCardLeave = (e) => {
    const cardContent = e.currentTarget.querySelector('div')
    gsap.to(cardContent, {
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        scale: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)',
    })
}

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#value-proposition",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });

    tl.from(headerContainer.value.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
    })

    .from(listContainer.value.querySelectorAll('.list-value'), {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15 
    }, "-=0.5");
})
</script>

<template>
  <section
    id="value-proposition"
    class="relative min-h-screen flex flex-row gap-5 items-center justify-center bg-[url(/assets/rect_light.webp)] bg-cover bg-center"
  >
    <div class="container px-5 py-24 mx-auto relative z-10">
      <div class="text-center mb-20" ref="headerContainer">
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
          ref="listContainer"
          class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
          style="perspective: 1000px;">
        <div
          class="p-2 sm:w-1/2 w-full list-value"
          v-for="(item, index) in list"
          :key="index"
          @mouseenter="onCardEnter"
          @mouseleave="onCardLeave"
        >
          <div
            class="bg-gray-100 rounded flex p-4 h-full items-center shadow-md transition-shadow duration-300"
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