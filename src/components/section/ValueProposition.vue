<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerContainer = ref(null)
const listContainer = ref(null)

const list = ref([
  { 
    icon: 'mdi:rocket-launch', 
    title: 'Launch Cepat',
    text: 'Landing page siap online dalam 2-5 hari kerja. Tidak perlu menunggu berminggu-minggu untuk mulai jualan.',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: 'mdi:cellphone-link', 
    title: 'Mobile-First',
    text: 'Optimized untuk semua device. 70%+ traffic dari mobile, landing page Anda akan tampil sempurna di smartphone.',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: 'mdi:whatsapp', 
    title: 'WhatsApp Ready',
    text: 'Leads langsung masuk ke WhatsApp Anda. Tidak ada form yang ribet, customer langsung chat dan closing lebih cepat.',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    icon: 'mdi:shield-check', 
    title: 'All-In-One',
    text: 'Domain, hosting, SSL certificate, dan email bisnis sudah termasuk. Tidak perlu repot setup sendiri.',
    color: 'from-indigo-500 to-blue-500'
  },
  { 
    icon: 'mdi:google', 
    title: 'SEO Optimized',
    text: 'Siap tampil di Google Search. Struktur yang SEO-friendly membantu bisnis Anda ditemukan calon customer.',
    color: 'from-orange-500 to-red-500'
  },
  { 
    icon: 'mdi:trending-up', 
    title: 'Tingkatkan Kredibilitas',
    text: 'Tampil profesional meningkatkan kepercayaan customer. Brand Anda terlihat lebih established dan terpercaya.',
    color: 'from-violet-500 to-purple-500'
  },
  { 
    icon: 'mdi:autorenew', 
    title: 'Renewal Terjangkau',
    text: 'Sistem renewal transparan dengan harga tetap. Tidak ada kenaikan harga, layanan berkelanjutan dengan biaya yang terjangkau.',
    color: 'from-teal-500 to-cyan-500'
  }
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
    class="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white py-24"
  >
    <div class="container px-5 mx-auto relative z-10">
      <div class="text-center mb-16" ref="headerContainer">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
          <Icon icon="mdi:star" class="text-yellow-500" />
          Mengapa Memilih Landingo?
        </div>
        <h2
          class="sm:text-4xl text-3xl font-extrabold text-center title-font text-gray-900 mb-4"
        >
          Semua yang Dibutuhkan untuk
          <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Sukses Online</span>
        </h2>
        <p
          class="text-lg text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"
        >
          Solusi lengkap untuk UMKM yang ingin berkembang di era digital. Dari desain profesional hingga optimasi performa, semuanya sudah kami handle.
        </p>
      </div>
        <div
          ref="listContainer"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          style="perspective: 1000px;">
        <div
          class="list-value"
          v-for="(item, index) in list"
          :key="index"
          @mouseenter="onCardEnter"
          @mouseleave="onCardLeave"
        >
          <div
            class="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
          >
            <div :class="`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`">
              <Icon
                :icon="item.icon"
                class="text-white w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>