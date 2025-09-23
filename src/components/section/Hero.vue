<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroTitle = ref(null);
const heroDesc = ref(null);
const heroButtons = ref(null);
const heroImage = ref(null);
const isDesktop = ref(false)

const handleMouseMove = (event) => {
    if (!isDesktop.value) return; 

    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) - 0.5;
    const y = (clientY / window.innerHeight) - 0.5;

    gsap.to(heroTitle.value, { 
        x: x * -50,
        y: y * -25, 
        rotationZ: x * -1.5,
        duration: 1.5, 
        ease: "power3.out" 
    });
    
    gsap.to(heroDesc.value, { 
        x: x * 25, 
        y: y * 12, 
        duration: 1.6, 
        ease: "power3.out" 
    });

    gsap.to(heroButtons.value, { 
        x: x * 30, 
        y: y * 18, 
        duration: 1.7, 
        ease: "power3.out" 
    });

    if (heroImage.value) {
        gsap.to(heroImage.value, { 
            x: x * 40, 
            y: y * -20,
            rotationY: x * 8,
            duration: 1.8, 
            ease: "power3.out" 
        });
    }
};


onMounted(() => {
    isDesktop.value = window.innerWidth >= 640

    const tl = gsap.timeline({ 
        defaults: { ease: "power3.out" },
        delay: 0.2
    });

    tl.from(heroTitle.value, { y: -50, opacity: 0, duration: 1 })
      .from(heroDesc.value, { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
      .from(heroButtons.value, { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.5")
      .from(heroImage.value, { x: 80, opacity: 0, duration: 1.1 }, "-=0.7");

    window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
    window.removeMouseMove('mousemove', handleMouseMove);
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
    <section class="relative min-h-screen flex flex-row gap-5 items-center justify-center bg-[url(/assets/hero.webp)] bg-cover bg-right md:bg-center" id="hero">
        <div class="absolute inset-0 bg-white/35 sm:bg-white/1 backdrop-blur-md z-0"></div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center xl:px-20 z-10" >
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 ref="heroTitle" class="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-black uppercase">Landing Page Siap Pakai, 
                <br class="hidden lg:inline-block">Untuk UMKM & Brand Lokal !
            </h1>
            <p ref="heroDesc" class="mb-8 leading-relaxed">Bangun kepercayaan dan convert penjualan lewat landing page profesional yang cepat, ringan, dan mobile-friendly.</p>
            <div ref="heroButtons" class="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6">
                <n-button type="info" size="large" color="#5356FF" round><span class=" mx-1 text-lg uppercase">promo launching <span class="font-semibold capitalize">Rp 999.000</span></span></n-button>
                <n-button type="info" size="large" ghost round @click="redirectToWhatsApp" aria-label="Konsultasi gratis via WhatsApp untuk pembuatan landing page" >Konsultasi Gratis <Icon icon="mdi:whatsapp" class=" text-2xl ml-1"/></n-button>
            </div>
            </div>
            <div ref="heroImage" v-if="isDesktop" class=" hidden sm:inline-block">
                <img class="object-cover object-center rounded max-w-[400px] xl:max-w-[500px] ring-1 ring-primary shadow-2xl" fetchpriority="high" alt="Ilustrasi pertumbuhan bisnis UMKM dengan landing page profesional Landingo" loading="eager" width="720" height="600" decoding="async" src="/public/assets/images/business-growth.webp">
            </div>
        </div>
    </section>
</template>