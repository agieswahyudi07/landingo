<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroTitle = ref(null);
const heroDesc = ref(null);
const heroButtons = ref(null);
const heroImage = ref(null);
const isDesktop = ref(false);
let throttledMouseMoveHandler = null;

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

    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
        const tl = gsap.timeline({ 
            defaults: { ease: "power3.out" },
            delay: 0.2
        });

        if (heroTitle.value) {
            tl.from(heroTitle.value, { y: -50, opacity: 0, duration: 1, willChange: "transform, opacity" })
        }
        if (heroDesc.value) {
            tl.from(heroDesc.value, { y: 30, opacity: 0, duration: 0.9, willChange: "transform, opacity" }, "-=0.6")
        }
        if (heroButtons.value) {
            tl.from(heroButtons.value, { y: 20, opacity: 0, duration: 0.8, stagger: 0.2, willChange: "transform, opacity" }, "-=0.5")
        }
        if (heroImage.value) {
            tl.from(heroImage.value, { x: 80, opacity: 0, duration: 1.1, willChange: "transform, opacity" }, "-=0.7")
        }
    });

    // Throttle mousemove for better performance
    let ticking = false;
    throttledMouseMoveHandler = (e) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleMouseMove(e);
                ticking = false;
            });
            ticking = true;
        }
    };
    
    window.addEventListener('mousemove', throttledMouseMoveHandler, { passive: true });
});

onUnmounted(() => {
    if (throttledMouseMoveHandler) {
        window.removeEventListener('mousemove', throttledMouseMoveHandler);
    }
});

const redirectToWhatsApp = () => {
  const phoneNumber = '6285183077289'; 
  const defaultMessage = 'Halo! Saya tertarik dengan layanan landing page profesional Landingo. Bisa minta informasi lebih detail tentang paket dan prosesnya?';
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
    <main class="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero" role="main">
        <!-- Modern gradient background -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-0"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(83,86,255,0.1),transparent_50%)] z-0"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)] z-0"></div>
        
        <!-- Animated background elements -->
        <div class="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center xl:px-20 z-10 relative">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
                    <span class="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                    Promo Launching Terbatas
                </div>
                
                <!-- Main Headline -->
                <h1 ref="heroTitle" class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-gray-900 font-extrabold leading-tight">
                    <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Landing Page Profesional
                    </span>
                    <br class="hidden lg:inline-block">
                    <span class="text-gray-900">untuk Bisnismu</span>
                </h1>
                
                <!-- Subheadline -->
                <p ref="heroDesc" class="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl">
                    Transformasi bisnis UMKM Anda dengan landing page yang <strong class="text-gray-900">mengkonversi visitor menjadi customer</strong>. Desain modern, loading cepat, dan siap untuk iklan digital.
                </p>
                
                <!-- Trust indicators -->
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8 text-sm text-gray-600">
                    <div class="flex items-center gap-2">
                        <Icon icon="mdi:check-circle" class="text-green-500 text-xl" />
                        <span>Mobile-First Design</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <Icon icon="mdi:check-circle" class="text-green-500 text-xl" />
                        <span>SEO Optimized</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <Icon icon="mdi:check-circle" class="text-green-500 text-xl" />
                        <span>WhatsApp Integration</span>
                    </div>
                </div>
                
                <!-- CTA Buttons -->
                <div ref="heroButtons" class="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <n-button 
                        type="primary" 
                        size="large" 
                        color="#5356FF" 
                        round
                        class="px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        @click="redirectToWhatsApp"
                    >
                        <span class="flex items-center gap-2">
                            Mulai dari <span class="text-2xl font-bold">Rp 999rb</span>
                        </span>
                    </n-button>
                    <n-button 
                        type="default" 
                        size="large" 
                        round
                        class="px-8 py-6 text-base font-semibold border-2 border-gray-300 hover:border-indigo-500 transition-all duration-300"
                        @click="redirectToWhatsApp"
                    >
                        <Icon icon="mdi:whatsapp" class="text-xl mr-2 text-green-500" />
                        Konsultasi Gratis
                    </n-button>
                </div>
                
                <!-- Social proof -->
                <!-- <p class="mt-8 text-sm text-gray-500">
                    <span class="font-semibold text-gray-700">100+</span> UMKM sudah mempercayai Landingo
                </p> -->
            </div>
            
            <!-- Hero Image -->
            <div ref="heroImage" v-if="isDesktop" class="hidden lg:inline-block lg:w-1/2">
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
                    <img 
                        class="relative object-cover object-center rounded-3xl max-w-[500px] xl:max-w-[600px] shadow-2xl transform hover:scale-105 transition-transform duration-500" 
                        fetchpriority="high" 
                        alt="Ilustrasi pertumbuhan bisnis UMKM dengan landing page profesional Landingo - Transformasi digital untuk bisnis lokal" 
                        loading="eager" 
                        width="720" 
                        height="600" 
                        decoding="sync" 
                        src="/assets/images/business-growth.webp"
                        sizes="(max-width: 1024px) 0px, 600px"
                    >
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>