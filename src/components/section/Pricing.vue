<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const discountCalculation = (price, discount) => {
  const discounted = price - price * (discount / 100);
  return discounted;
};

const formatRupiah = (amount) => {
  return amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

const redirectToWhatsApp = (message) => {
  const phoneNumber = "6281398257238";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

const title = "Pilih Paket Sesuai Kebutuhanmu";

const package_list = ref([
    {
        name:'Basic',
        realPrice: 1599000,
        discount: 45,
        price: discountCalculation(1599000,45),
        customPrice: 899000,
        description:'Untuk pemilik bisnis pemula yang ingin terlihat profesional dan bisa langsung mulai jualan',
        tag: {
            status: true, 
            desc: 'Termurah - Waktu Terbatas' 
        },
        quickMessage: 'Halo, saya tertarik dengan paket Basic Landing Page. Bisa minta informasi lebih lanjut?',
        list:[
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'1 halaman landing page modern dan profesional',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Desain responsive (mobile-first, clean, trustable)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Shared Hosting (6 bulan)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'gratis domain (.com)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'1 Email Bisnis',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'handle ~1.000 pengunjung',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'1 GB STORAGE',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'CTA langsung ke WhatsApp',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Website kamu aman & dipercaya Google – Gratis Sertifikat SSL seumur hidup!',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Support teknis 15 hari pertama',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Gratis 1x revisi minor',
            },
        ]
    },
    {
        name:'Pro',
        realPrice: 3299000,
        discount: 15,
        price: discountCalculation(3299000,15),
        customPrice: 2999000,
        description:'Cocok untuk yang sudah mulai beriklan, ingin tampil meyakinkan dan capture data pembeli.',
        tag: {
            status: true,
            desc: 'Penawaran Terbaik'
        },
        quickMessage: 'Halo, saya tertarik dengan paket Pro Landing Page. Bisa minta informasi lebih lanjut?',
        list:[
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Semua fitur BASIC, plus:',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'1-3 halaman landing page',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Content Management System',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Hosting (1 Tahun)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Handle ~10.000 pengunjung',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'10 GB STORAGE',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'CTA langsung ke WhatsApp',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'2 Email Bisnis',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Performance optimized (lighthouse >90)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Basic SEO setup (meta title + desc)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Support teknis 30 hari pertama',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'3x revisi minor',
            },
        ]
    },
    {
        name:'Smart Funnel',
        realPrice: 4999000,
        discount: 20,
        price: discountCalculation(4999000,20),
        customPrice: 3999000,
        description:'Untuk brand lokal yang ingin otomatisasi penjualan & leads funnel langsung ke WhatsApp',
        tag: {
            status: true,
            desc: 'Siap Scale Up !'
        },
        quickMessage: 'Halo, saya tertarik dengan paket Smart Funnel. Bisa minta informasi lebih lanjut?',
        list:[
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Semua fitur PRO, plus:',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'1-5 halaman landing page',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Interactive Design (Animate on Scroll, Parallax, dll.)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Hosting (1 Tahun)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Bisa menangani ~25.000 pengunjung',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'25 GB STORAGE',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'3 Email Bisnis',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Speed Optimization',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Auto-responder via WA Gateway / Email',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Countdown timer / upsell popup (opsional)',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'Support teknis 60 hari pertama',
            },
            {
                icon:'mdi:checkbox-marked-circle-outline',
                text:'3x revisi minor',
            },
        ]
    },
]);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#pricing",
      start: "top 80%",
      once: true,
    },
  });

  tl.from("#pricing h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  tl.from("#pricing .pricing-card", {
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
  }, "-=0.5");
});

</script>

<template>
    <section id="pricing" class="relative min-h-screen text-gray-600 body-font overflow-hidden bg-[url(/assets/contour_line.svg)] bg-cover bg-center">
        <div class="absolute inset-0 bg-white/35 sm:bg-white/5 backdrop-blur-sm z-0"></div>
        <div class="container px-5 py-24 mx-auto z-10">
            <div class="flex flex-col text-center w-full mb-20">
            <h2 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 z-10">{{ title }}</h2>
            </div>
            <div class="flex flex-wrap -m-4 justify-center lg:gap-10">
                <div class=" p-4 xl:w-1/4 md:w-1/2 w-full pricing-card" v-for="(item, index) in package_list" :key="index">
                    <div   
                        :class="[
                            'h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden justify-between bg-white',
                            item.tag.status ? 'border-indigo-500' : ''
                        ]"
                    >
                    <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl" v-if="item.tag.status">{{ item.tag.desc }}</span>
                    <div class="">
                        <h3 class="text-xl tracking-widest title-font mb-1 font-medium">{{ item.name }}</h3>
                        <h4 class="text-3xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 gap-2">
                            <span v-if="item.customPrice" class="font-bold text-indigo-600">{{ formatRupiah(item.customPrice) }}</span>
                            <span v-else class="font-bold text-indigo-600">{{ formatRupiah(item.price) }}</span>
                            <span v-if="item.discount > 0" class="text-lg text-gray-400 line-through">{{ formatRupiah(item.realPrice) }}</span>
                        </h4>
                    </div>
                    <div class=" justify-self-start">
                        <p class="flex items-center text-gray-600 mb-2" v-for="(list, index) in item.list" :key="index">
                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center text-green-500 rounded-full flex-shrink-0">
                                <Icon :icon="list.icon" width="48"/>
                            </span>{{ list.text }}
                        </p>
                    </div>
                    <div class="flex flex-col">
                        <n-button type="info" size="large" color="#5356FF" class="justify-self-end" @click="redirectToWhatsApp(item.quickMessage)">
                            <div class="flex flex-row ">
                                <p>Pilih Paket</p>
                                <div class=" ml-1">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </n-button>
                        <p class="text-xs text-gray-500 mt-3">{{ item.description }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
