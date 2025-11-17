<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingHeader = ref(null);
const pricingContainer = ref(null);

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
  const phoneNumber = "6285183077289";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

const title = "Pilih Paket yang Tepat untuk Bisnis Anda";
const package_list = ref([
    {
        name:'Starter',
        realPrice: 1999000,
        discount: 50,
        price: discountCalculation(1999000,50),
        customPrice: 999000,
        description:'Perfect untuk bisnis baru yang ingin mulai online dengan cepat dan profesional',
        tag: { status: true, desc: 'Paling Populer' },
        quickMessage: 'Halo! Saya tertarik dengan paket Starter. Bisa minta informasi lebih detail?',
        popular: true,
        list:[
            { icon:'mdi:check-circle', text:'1 halaman landing page modern & profesional' },
            { icon:'mdi:check-circle', text:'Desain responsive (mobile-first, clean, trustable)' },
            { icon:'mdi:check-circle', text:'Shared Hosting (6 bulan gratis)' },
            { icon:'mdi:check-circle', text:'Domain .com gratis (tahun pertama)' },
            { icon:'mdi:check-circle', text:'1 Email Bisnis (@yourdomain.com)' },
            { icon:'mdi:check-circle', text:'Kapasitas hingga 1.000 pengunjung/bulan' },
            { icon:'mdi:check-circle', text:'1 GB Storage' },
            { icon:'mdi:check-circle', text:'WhatsApp CTA langsung' },
            { icon:'mdi:check-circle', text:'SSL Certificate gratis (lifetime)' },
            { icon:'mdi:check-circle', text:'Support teknis 15 hari pertama' },
            { icon:'mdi:check-circle', text:'1x revisi minor gratis' },
        ]
    },
    {
        name:'Professional',
        realPrice: 3999000,
        discount: 25,
        price: discountCalculation(3999000,25),
        customPrice: 2999000,
        description:'Ideal untuk bisnis yang sudah berjalan dan ingin scale up dengan iklan digital',
        tag: { status: true, desc: 'Value Terbaik' },
        quickMessage: 'Halo! Saya tertarik dengan paket Professional. Bisa minta informasi lebih detail?',
        popular: false,
        list:[
            { icon:'mdi:check-circle', text:'Semua fitur Starter, plus:' },
            { icon:'mdi:check-circle', text:'1-3 halaman landing page' },
            { icon:'mdi:check-circle', text:'Content Management System (CMS)' },
            { icon:'mdi:check-circle', text:'Hosting premium (1 tahun)' },
            { icon:'mdi:check-circle', text:'Kapasitas hingga 10.000 pengunjung/bulan' },
            { icon:'mdi:check-circle', text:'10 GB Storage' },
            { icon:'mdi:check-circle', text:'2 Email Bisnis' },
            { icon:'mdi:check-circle', text:'Performance optimized (Lighthouse >90)' },
            { icon:'mdi:check-circle', text:'SEO setup lengkap (meta tags, sitemap)' },
            { icon:'mdi:check-circle', text:'Support teknis 30 hari pertama' },
            { icon:'mdi:check-circle', text:'3x revisi minor gratis' },
        ]
    },
    {
        name:'Enterprise',
        realPrice: 5999000,
        discount: 33,
        price: discountCalculation(5999000,33),
        customPrice: 3999000,
        description:'Solusi lengkap untuk brand yang ingin maksimalkan konversi dan otomatisasi',
        tag: { status: true, desc: 'Siap Scale!' },
        quickMessage: 'Halo! Saya tertarik dengan paket Enterprise. Bisa minta informasi lebih detail?',
        popular: false,
        list:[
            { icon:'mdi:check-circle', text:'Semua fitur Professional, plus:' },
            { icon:'mdi:check-circle', text:'1-5 halaman landing page' },
            { icon:'mdi:check-circle', text:'Interactive Design (animations, parallax)' },
            { icon:'mdi:check-circle', text:'Hosting premium (1 tahun)' },
            { icon:'mdi:check-circle', text:'Kapasitas hingga 25.000 pengunjung/bulan' },
            { icon:'mdi:check-circle', text:'25 GB Storage' },
            { icon:'mdi:check-circle', text:'3 Email Bisnis' },
            { icon:'mdi:check-circle', text:'Advanced Speed Optimization' },
            { icon:'mdi:check-circle', text:'Auto-responder (WA Gateway/Email)' },
            { icon:'mdi:check-circle', text:'Countdown timer & upsell popup' },
            { icon:'mdi:check-circle', text:'Support teknis 60 hari pertama' },
            { icon:'mdi:check-circle', text:'Unlimited revisi minor' },
        ]
    },
]);

const onCardHover = (e, isFeatured) => {
    const card = e.currentTarget;
    const innerCard = card.querySelector('div');
    const shineElement = document.createElement('div');
    shineElement.className = 'shine-effect';
    innerCard.appendChild(shineElement);

    const scaleValue = isFeatured ? 1.05 : 1.03;

    gsap.to(card, {
        duration: 0.5,
        ease: 'power2.out',
        scale: scaleValue,
        y: -10,
        boxShadow: '0px 15px 30px -10px rgba(0,0,0,0.15)',
    });

    gsap.fromTo(shineElement,
        { left: '-100px', top: '0', width: '70px' },
        {
            duration: 0.8,
            left: 'calc(100% + 100px)',
            ease: 'power2.out'
        }
    );
};

const onCardLeave = (e) => {
    const card = e.currentTarget;
    const innerCard = card.querySelector('div');
    const shineElement = innerCard.querySelector('.shine-effect');
    if (shineElement) {
        innerCard.removeChild(shineElement);
    }

    gsap.to(card, {
        duration: 0.6,
        ease: 'power2.out',
        scale: 1,
        y: 0,
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
    });
};

onMounted(() => {
    gsap.from(pricingHeader.value.children, {
        scrollTrigger: {
            trigger: pricingHeader.value,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2
    });

    const cards = gsap.utils.toArray('.pricing-card');
    cards.forEach(card => {
        gsap.from(card, {
            autoAlpha: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    });
});
</script>

<template>
    <section id="pricing" class="relative min-h-screen text-gray-600 body-font overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24">
        <div class="container px-5 mx-auto">
            <div ref="pricingHeader" class="flex flex-col text-center w-full mb-16">
                <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mx-auto">
                    <Icon icon="mdi:tag" class="text-indigo-500" />
                    Harga Transparan, Tanpa Hidden Cost
                </div>
                <h2 class="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-gray-900">
                    {{ title }}
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Mulai dari yang sederhana hingga solusi lengkap. Semua paket sudah termasuk domain, hosting, dan support.
                </p>
            </div>
            <div ref="pricingContainer" class="flex flex-col md:flex-row flex-nowrap -m-4 justify-center gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto" style="perspective: 1200px;">
                <div class="p-3 sm:p-4 w-full md:w-1/3 pricing-card" v-for="(item, index) in package_list" :key="index" @mouseenter="onCardHover($event, item.popular)" @mouseleave="onCardLeave($event)">
                    <div
                        :class="[
                            'h-full rounded-2xl border-2 flex flex-col relative justify-between bg-white transition-all duration-300 shadow-lg overflow-hidden',
                            item.popular ? 'border-gray-200' : 'border-gray-200 hover:border-indigo-300'
                        ]"
                    >
                    <!-- Purple gradient bar for Starter (popular) -->
                    <div v-if="item.popular" class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-30"></div>
                    
                    <!-- Tag badges for all cards -->
                    <span v-if="item.tag.status" 
                          :class="[
                              'absolute right-0 top-0 px-3 py-1.5 rounded-bl-xl z-30 text-xs font-semibold text-white',
                              item.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : (item.name === 'Professional' ? 'bg-indigo-600' : 'bg-blue-500')
                          ]">
                        {{ item.tag.desc }}
                    </span>
                    
                    <!-- Content wrapper with padding -->
                    <div class="p-4 sm:p-6 md:p-8 flex flex-col h-full relative z-10">
                        <div>
                            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{{ item.name }}</h3>
                            <div class="mb-4 sm:mb-6">
                                <!-- Discount Badge -->
                                <div v-if="item.discount > 0" class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 mb-2 sm:mb-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200">
                                    <Icon icon="mdi:tag" class="text-green-600 text-xs sm:text-sm"/>
                                    <span class="text-xs font-bold text-green-700">DISKON {{ item.discount }}%</span>
                                </div>
                                
                                <!-- Price Display -->
                                <div class="mb-2 sm:mb-3">
                                    <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                                        <span v-if="item.customPrice" class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-none">{{ formatRupiah(item.customPrice) }}</span>
                                        <span v-else class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-none">{{ formatRupiah(item.price) }}</span>
                                    </div>
                                    <div v-if="item.discount > 0" class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                        <span class="text-base sm:text-lg text-gray-400 line-through">{{ formatRupiah(item.realPrice) }}</span>
                                        <span class="text-xs text-gray-500">Harga Normal</span>
                                    </div>
                                </div>
                                
                                <!-- Savings Amount -->
                                <div v-if="item.discount > 0" class="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-green-50 border border-green-200">
                                    <Icon icon="mdi:wallet" class="text-green-600 text-base sm:text-lg flex-shrink-0"/>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-xs text-gray-600">Anda Hemat</p>
                                        <p class="text-sm sm:text-base font-bold text-green-700 truncate">
                                            {{ formatRupiah(item.realPrice - (item.customPrice || item.price)) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex-grow mb-4 sm:mb-6">
                            <ul class="space-y-2 sm:space-y-3">
                                <li class="flex items-start text-gray-700" v-for="(list, idx) in item.list" :key="idx">
                                    <span class="mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                                        <Icon :icon="list.icon" class="text-green-500 text-lg sm:text-xl"/>
                                    </span>
                                    <span class="text-xs sm:text-sm leading-relaxed">{{ list.text }}</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="flex flex-col mt-auto pt-4 sm:pt-6 border-t border-gray-100">
                        <n-button 
                            :type="item.popular ? 'primary' : 'default'"
                            size="large" 
                            :color="item.popular ? '#5356FF' : undefined"
                            :class="[
                                'w-full justify-center font-semibold transition-all duration-300 text-sm sm:text-base',
                                item.popular ? 'shadow-md hover:shadow-lg' : 'border-2 border-gray-300 hover:border-indigo-500 bg-white text-gray-700 hover:text-indigo-600'
                            ]"
                            @click="redirectToWhatsApp(item.quickMessage)"
                        >
                            <div class="flex flex-row items-center justify-center">
                                <span>Pilih Paket Ini</span>
                                <Icon icon="mdi:arrow-right" class="ml-2 text-base sm:text-lg"/>
                            </div>
                        </n-button>
                        <p class="text-xs text-gray-500 mt-3 sm:mt-4 text-center leading-relaxed">{{ item.description }}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <!-- Trust Note -->
            <div class="mt-12 text-center">
                <p class="text-sm text-gray-500">
                    <Icon icon="mdi:shield-check" class="inline text-green-500 mr-2"/>
                    Semua paket termasuk setup lengkap. Tidak ada biaya tersembunyi.
                </p>
            </div>
        </div>
    </section>
</template>

<style>
.shine-effect {
  position: absolute;
  top: 0;
  left: -100px;
  width: 70px;
  height: 100%;
  background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
  transform: skewX(-25deg);
  pointer-events: none;
  z-index: 15;
}
</style>