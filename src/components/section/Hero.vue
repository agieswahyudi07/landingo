<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const heroTitle = ref(null);
const heroDesc = ref(null);
const heroButtons = ref(null);
const heroImage = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(heroTitle.value, { y: -60, opacity: 0, duration: 0.8 })
    .from(heroDesc.value, { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
    .from(heroButtons.value, { y: 20, opacity: 0, duration: 0.6, stagger: 0.15 }, "-=0.3")
    .from(heroImage.value, { x: 60, opacity: 0, duration: 0.9 }, "-=0.5");
});

const redirectToWhatsApp = () => {
  const phoneNumber = '6281398257238'; 
  const defaultMessage = 'Halo, saya tertarik dengan jasa pembuatan landing page/website untuk bisnis saya. Bisa minta informasi lebih lanjut?';
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
    <section class="relative min-h-screen flex flex-row gap-5 items-center justify-center bg-[url(/assets/hero.svg)] bg-cover bg-right md:bg-center" id="hero">
        <div class="absolute inset-0 bg-white/35 sm:bg-white/1 backdrop-blur-sm z-0"></div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center xl:px-20 z-10" >
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 ref="heroTitle" class="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-black uppercase">Landing Page Siap Pakai, 
                <br class="hidden lg:inline-block">Untuk UMKM & Brand Lokal !
            </h1>
            <p ref="heroDesc" class="mb-8 leading-relaxed">Bangun kepercayaan dan convert penjualan lewat landing page profesional yang cepat, ringan, dan mobile-friendly.</p>
            <div ref="heroButtons" class="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6">
                <n-button type="info" size="large" color="#5356FF" round><span class=" mx-1 text-lg uppercase">promo launching <span class="font-semibold capitalize">Rp 899.000</span></span></n-button>
                <n-button type="info" size="large" ghost round @click="redirectToWhatsApp" >Konsultasi Gratis <Icon icon="mdi:whatsapp" class=" text-2xl ml-1"/></n-button>
            </div>
            </div>
            <div ref="heroImage" class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden sm:inline-block">
                <img class=" object-cover object-center rounded" alt="hero" src="/assets/images/digital-marketing.webp">
            </div>
        </div>
    </section>
</template>