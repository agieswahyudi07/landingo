<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingHeader = ref(null);
const pricingContainer = ref(null);

const discountCalculation = (price, discount) => {
  const discounted = price - price * (discount / 100);
  return Math.round(discounted);
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

const common_features = ref([
    { icon: 'mdi:circle-small', text: 'Website SSL (Aman & Terenkripsi)' },
    { icon: 'mdi:circle-small', text: 'Penulisan Konten Website' },
    { icon: 'mdi:circle-small', text: 'Akses Statistik Kunjungan Website' },
    { icon: 'mdi:circle-small', text: 'Integrasi Google Maps' },
    { icon: 'mdi:circle-small', text: 'Integrasi Sosial Media' },
    { icon: 'mdi:circle-small', text: 'Tombol WhatsApp' }
]);

const package_list = ref([
    {
        name:'LANDINGO LITE',
        realPrice: 3000000,
        discount: 50,
        price: 1500000,
        renewalPrice: 800000,
        billingCycle: 'Per Tahun',
        description:'Untuk kamu yang baru mulai online dan butuh halaman rapi yang bikin bisnis terlihat profesional - tanpa ribet.',
        tag: { status: true, desc: 'Paling Hemat' },
        quickMessage: 'Halo! Saya tertarik dengan paket LANDINGO LITE. Bisa minta informasi lebih detail?',
        popular: false,
        list:[
            { icon:'mdi:monitor', text:'1 Halaman Website' },
            { icon:'mdi:server', text:'Gratis Domain & Hosting' },
            { icon:'mdi:wrench', text:'Gratis Update Konten & Maintenance' },
            { icon:'mdi:cellphone', text:'Website Mobile Friendly & SEO Basic' },
            { icon:'mdi:lightbulb-on-outline', text:'Desain Modern & Sesuai Karakter Bisnis Kamu' },
        ]
    },
    {
        name:'LANDINGO PRO',
        realPrice: 10000000,
        discount: 55,
        price: 4500000,
        renewalPrice: 1500000,
        billingCycle: 'Per Tahun',
        description:'Untuk UMKM yang mau mulai beriklan dan butuh landing page yang stabil, cepat, dan lebih meyakinkan pembeli.',
        tag: { status: true, desc: 'Paling Laris' },
        quickMessage: 'Halo! Saya tertarik dengan paket LANDINGO PRO. Bisa minta informasi lebih detail?',
        popular: true,
        list:[
            { icon:'mdi:check-circle', text:'Semua di Paket LITE' },
            { icon:'mdi:monitor', text:'5 Halaman Website' },
            { icon:'mdi:email-outline', text:'Gratis 1 Akun Email Bisnis' },
            { icon:'mdi:auto-fix', text:'Desain Modern & Sesuai Karakter Bisnis Kamu' },
            { icon:'mdi:image-multiple-outline', text:'Halaman Produk, Layanan, Galeri, atau Portofolio' },
            { icon:'mdi:text-box-outline', text:'Fitur Tambahan seperti Form Kontak' },
        ]
    },
    {
        name:'LANDINGO FUNNEL',
        realPrice: 15000000,
        discount: 45,
        price: 8500000,
        renewalPrice: 2500000,
        billingCycle: 'Per Tahun',
        description:'Website super lengkap dengan struktur dan fitur lebih lengkap, eksklusif dan premium.',
        tag: { status: true, desc: 'Siap Scale!' },
        quickMessage: 'Halo! Saya tertarik dengan paket LANDINGO FUNNEL. Bisa minta informasi lebih detail?',
        popular: false,
        list:[
            { icon:'mdi:check-circle', text:'Semua di Paket PRO' },
            { icon:'mdi:monitor', text:'10 Halaman Website' },
            { icon:'mdi:email-outline', text:'Gratis 3 Akun Email Bisnis' },
            { icon:'mdi:diamond-stone', text:'Desain Lebih Eksklusif & Premium' },
            { icon:'mdi:puzzle-outline', text:'Fitur Tambahan seperti Booking, Katalog, atau Integrasi Lainnya' },
            { icon:'mdi:magnify', text:'Optimasi SEO Lebih Maksimal' },
            { icon:'mdi:headset', text:'Layanan Bantuan Prioritas' },
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

const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
let timerInterval = null;

const initCountdown = () => {
    // Buat timer evergreen 3 hari menggunakan localStorage
    let endTime = localStorage.getItem('landingo_promo_endtime');
    if (!endTime || new Date().getTime() > parseInt(endTime)) {
        endTime = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
        localStorage.setItem('landingo_promo_endtime', endTime);
    } else {
        endTime = parseInt(endTime);
    }

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
            clearInterval(timerInterval);
            return;
        }

        countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        countdown.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    };

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
};

onMounted(() => {
    initCountdown();
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
                <div class="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mx-auto">
                    <Icon icon="mdi:tag" class="text-blue-500" />
                    Harga Transparan, Tanpa Hidden Cost
                </div>
                <h2 class="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-gray-900">
                    {{ title }}
                </h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk domain, hosting, dan support teknis.
                </p>
                
                <!-- Promo Countdown Section -->
                <div class="inline-flex flex-col items-center mx-auto bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100 rounded-2xl px-6 sm:px-10 py-5 sm:py-6 shadow-sm">
                    <p class="text-sm sm:text-base font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <Icon icon="mdi:alarm" class="text-xl text-red-500 animate-pulse"/>
                        PROMO TERBATAS! DISKON BERAKHIR DALAM:
                    </p>
                    <div class="flex items-start gap-3 sm:gap-5 text-center">
                        <div class="flex flex-col items-center">
                            <div class="text-2xl sm:text-4xl font-black text-blue-700 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">
                                {{ String(countdown.days).padStart(2, '0') }}
                            </div>
                            <span class="text-[10px] sm:text-xs font-bold text-blue-400 mt-2 uppercase tracking-wider">Hari</span>
                        </div>
                        <span class="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">:</span>
                        <div class="flex flex-col items-center">
                            <div class="text-2xl sm:text-4xl font-black text-blue-700 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">
                                {{ String(countdown.hours).padStart(2, '0') }}
                            </div>
                            <span class="text-[10px] sm:text-xs font-bold text-blue-400 mt-2 uppercase tracking-wider">Jam</span>
                        </div>
                        <span class="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">:</span>
                        <div class="flex flex-col items-center">
                            <div class="text-2xl sm:text-4xl font-black text-blue-700 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">
                                {{ String(countdown.minutes).padStart(2, '0') }}
                            </div>
                            <span class="text-[10px] sm:text-xs font-bold text-blue-400 mt-2 uppercase tracking-wider">Menit</span>
                        </div>
                        <span class="text-2xl sm:text-3xl font-bold text-blue-300 mt-2 sm:mt-3">:</span>
                        <div class="flex flex-col items-center">
                            <div class="text-2xl sm:text-4xl font-black text-red-600 bg-white shadow-sm border border-blue-50 px-3 sm:px-4 py-2 sm:py-3 rounded-xl min-w-[3rem] sm:min-w-[4rem]">
                                {{ String(countdown.seconds).padStart(2, '0') }}
                            </div>
                            <span class="text-[10px] sm:text-xs font-bold text-red-400 mt-2 uppercase tracking-wider">Detik</span>
                        </div>
                    </div>
                </div>
            </div>
            <div ref="pricingContainer" class="flex flex-col lg:flex-row flex-nowrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto" style="perspective: 1200px;">
                <div class="w-full lg:w-1/3 pricing-card" v-for="(item, index) in package_list" :key="index" @mouseenter="onCardHover($event, item.popular)" @mouseleave="onCardLeave($event)">
                    <div
                        :class="[
                            'h-full rounded-2xl border-2 flex flex-col relative justify-between bg-white transition-all duration-300 shadow-lg overflow-hidden',
                            item.popular ? 'border-gray-200' : 'border-gray-200 hover:border-blue-300'
                        ]"
                    >
                    <!-- Purple gradient bar for Starter (popular) -->
                    <div v-if="item.popular" class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 z-20"></div>
                    
                    <!-- Tag badges for all cards -->
                    <span v-if="item.tag.status" 
                          :class="[
                              'absolute right-0 top-2 px-3 py-1.5 rounded-bl-xl z-30 text-xs font-semibold text-white whitespace-nowrap',
                              item.popular ? 'bg-gradient-to-r from-blue-600 to-sky-600' : (item.name === 'Professional' ? 'bg-blue-600' : 'bg-blue-500')
                          ]">
                        {{ item.tag.desc }}
                    </span>
                    
                    <!-- Content wrapper with padding -->
                    <div class="p-6 sm:p-8 flex flex-col h-full relative z-10">
                        <div class="pt-6 sm:pt-8 md:pt-10 mb-8 border-b border-gray-100 pb-8">
                            <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 pr-12">{{ item.name }}</h3>
                            <p class="text-sm text-gray-500 leading-relaxed mb-6 h-12">{{ item.description }}</p>
                            
                            <!-- Price Display Clean Style -->
                            <div class="flex flex-col">
                                <div v-if="item.discount > 0" class="mb-1">
                                    <span class="text-base font-medium text-gray-400 line-through">{{ formatRupiah(item.realPrice) }}</span>
                                </div>
                                <div class="flex items-center flex-wrap gap-2 sm:gap-3 mb-2">
                                    <span class="text-3xl sm:text-4xl text-blue-500 font-extrabold leading-none">{{ formatRupiah(item.price) }}</span>
                                    <span v-if="item.discount > 0" class="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-bold text-blue-600">
                                        Diskon {{ item.discount }}%
                                    </span>
                                </div>
                                <div v-if="item.renewalPrice" class="mt-2 inline-flex items-center self-start gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 border-dashed rounded-md text-xs sm:text-sm text-gray-500">
                                    <Icon icon="mdi:calendar-sync" class="text-gray-400 text-sm"/>
                                    <span>Renewal: <strong class="font-semibold text-gray-700">{{ formatRupiah(item.renewalPrice) }}</strong>/thn</span>
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex-grow mb-8">
                            <ul class="space-y-3 sm:space-y-4 mb-6">
                                <li class="flex items-start text-gray-900 font-medium" v-for="(list, idx) in item.list" :key="idx">
                                    <span class="mr-3 mt-0.5 flex-shrink-0">
                                        <Icon :icon="list.icon" class="text-blue-500 text-xl"/>
                                    </span>
                                    <span class="text-sm leading-relaxed">{{ list.text }}</span>
                                </li>
                            </ul>

                            <!-- Bagian Fitur Standar / Lihat Selengkapnya -->
                            <details class="group border-t border-gray-200 pt-4">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-gray-600 hover:text-blue-600 outline-none select-none [&::-webkit-details-marker]:hidden">
                                    <span>Lihat Selengkapnya</span>
                                    <span class="transition group-open:rotate-180">
                                        <Icon icon="mdi:chevron-down" class="text-lg" />
                                    </span>
                                </summary>
                                <ul class="space-y-3 mt-4">
                                    <li class="flex items-start text-gray-500" v-for="(feature, fIdx) in common_features" :key="'cf-'+fIdx">
                                        <span class="mr-3 mt-0.5 flex-shrink-0">
                                            <Icon :icon="feature.icon" class="text-gray-400 text-lg"/>
                                        </span>
                                        <span class="text-sm leading-relaxed">{{ feature.text }}</span>
                                    </li>
                                </ul>
                            </details>
                        </div>
                        
                        <div class="mt-auto">
                            <n-button 
                                :type="item.popular ? 'primary' : 'default'"
                                size="large" 
                                :color="item.popular ? '#2563EB' : undefined"
                                :class="[
                                    'w-full justify-center font-semibold transition-all duration-300 text-sm sm:text-base py-6 rounded-xl',
                                    item.popular ? 'shadow-md hover:shadow-lg' : 'border-2 border-gray-300 hover:border-blue-500 bg-white text-gray-700 hover:text-blue-600'
                                ]"
                                @click="redirectToWhatsApp(item.quickMessage)"
                            >
                                <div class="flex flex-row items-center justify-center">
                                    <span>Pilih Paket Ini</span>
                                    <Icon icon="mdi:arrow-right" class="ml-2 text-lg"/>
                                </div>
                            </n-button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <!-- Trust Note -->
            <div class="mt-12 text-center">
                <p class="text-sm text-gray-500">
                    <Icon icon="mdi:shield-check" class="inline text-green-500 mr-2"/>
                    Semua paket termasuk setup lengkap. Harga transparan, tidak ada biaya tersembunyi.
                </p>
                <p class="text-xs text-gray-400 mt-2">
                    *Domain .com gratis untuk tahun pertama. Hosting renewal wajib diperpanjang setiap tahun.
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