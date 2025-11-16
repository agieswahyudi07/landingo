<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ctaTitle = ref(null);
const ctaParagraph = ref(null);
const ctaButtonContainer = ref(null);
const ctaButton = ref(null);

let pulseTween = null;

const buttonColor = "#25D366";

const redirectToWhatsApp = () => {
  const phoneNumber = '6285183077289'; 
  const defaultMessage = 'Halo! Saya siap untuk upgrade bisnis saya dengan landing page profesional dari Landingo. Bisa kita diskusikan lebih detail?';
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

const createPulseAnimation = () => {
  if (!ctaButton.value || !ctaButton.value.$el) return;
  const buttonElement = ctaButton.value.$el;

  pulseTween = gsap.to(buttonElement, {
    scale: 1.05,
    boxShadow: '0 0 15px rgba(37, 211, 102, 0.5)', 
    duration: 1.2,
    ease: 'sine.inOut', 
    repeat: -1,
    yoyo: true,
  });
};

const onButtonEnter = () => {
  if (pulseTween) pulseTween.pause();

  const buttonElement = ctaButton.value.$el;
  const icon = buttonElement.querySelector('.cta-icon');
  
  gsap.to(buttonElement, {
    scale: 1.1,
    y: -4,
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    duration: 0.3,
    ease: 'power2.out'
  });
  gsap.to(icon, { rotate: 10, duration: 0.3, ease: 'power2.out' });
};

const onButtonLeave = () => {
  const buttonElement = ctaButton.value.$el;
  const icon = buttonElement.querySelector('.cta-icon');

  const leaveTl = gsap.timeline({
    onComplete: () => {
      gsap.set(buttonElement, { clearProps: "transform, boxShadow" }); 
      if (pulseTween) pulseTween.invalidate().play();
    }
  });

  leaveTl.to(buttonElement, {
    scale: 1,
    y: 0,
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
    duration: 0.4,
    ease: 'power2.out'
  }, 0);
  
  leaveTl.to(icon, { 
    rotate: 0, 
    duration: 0.3, 
    ease: 'power2.out' 
  }, 0);
};

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cta",
      start: "top 80%",
    },
  });

  tl.from(ctaTitle.value, { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
  .from(ctaParagraph.value, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.7")
  .from(ctaButtonContainer.value, { opacity: 0, scale: 0.8, duration: 0.9, ease: "elastic.out(1, 0.5)" }, "-=0.5")
  .call(createPulseAnimation, [], ">-0.5");
});
</script>

<template>
  <section 
    id="cta"
    class="relative min-h-screen flex flex-col text-white body-font justify-center overflow-hidden"
  >
    <!-- Modern gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 z-0"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] z-0"></div>
    
    <!-- Animated background elements -->
    <div class="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
    
    <!-- Wave divider -->
    <div class="custom-shape-divider-top-1758725921">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
    
    <div class="relative z-10 container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full max-w-4xl mx-auto">
        
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mx-auto">
          <Icon icon="mdi:rocket-launch" class="text-yellow-300" />
          Mulai Hari Ini, Online Besok
        </div>
        
        <h2 ref="ctaTitle" class="sm:text-5xl text-4xl font-extrabold title-font mb-6 leading-tight">
          Siap Transformasi Bisnis Anda?
        </h2>

        <p ref="ctaParagraph" class="lg:w-3/4 mx-auto text-lg leading-relaxed text-white/90 mb-4">
          Jangan biarkan kompetitor mendahului Anda. Landing page profesional adalah investasi pertama untuk sukses online. 
          <strong class="text-white">Mulai dari Rp 999rb</strong>, bisnis Anda bisa tampil profesional dan mulai jualan online.
        </p>
        
        <!-- Benefits list -->
        <div class="flex flex-wrap justify-center gap-6 mb-10 text-sm text-white/80">
          <div class="flex items-center gap-2">
            <Icon icon="mdi:check-circle" class="text-green-300 text-xl" />
            <span>Konsultasi Gratis</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon="mdi:check-circle" class="text-green-300 text-xl" />
            <span>Setup Lengkap</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon icon="mdi:check-circle" class="text-green-300 text-xl" />
            <span>Support Terpercaya</span>
          </div>
        </div>

        <div ref="ctaButtonContainer" class="mt-6">
          <n-button 
            ref="ctaButton"
            class="cta-button"
            size="large" 
            @click="redirectToWhatsApp"
            @mouseenter="onButtonEnter"
            @mouseleave="onButtonLeave"
            strong
            :color="buttonColor"
            round
            aria-label="Konsultasi gratis via WhatsApp untuk pembuatan landing page"
          >
            <span class="flex items-center gap-2 px-4">
              <span class="text-lg font-semibold">Konsultasi Gratis via WhatsApp</span>
              <Icon icon="mdi:whatsapp" width="24" class="cta-icon"></Icon>
            </span>
          </n-button>
          <p class="mt-4 text-sm text-white/70">
            Respon cepat dalam 1 jam kerja • Tanpa komitmen
          </p>
        </div>
      </div>
    </div>
  </section>
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

.custom-shape-divider-top-1758725921 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1758725921 svg {
    position: relative;
    display: block;
    width: calc(103% + 1.3px);
    height: 254px;
}

.custom-shape-divider-top-1758725921 .shape-fill {
    fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1758725921 svg {
        width: calc(176% + 1.3px);
        height: 500px;
    }
}
</style>