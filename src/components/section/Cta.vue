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
  const phoneNumber = '6281398257238'; 
  const defaultMessage = 'Halo, saya tertarik dengan jasa pembuatan landing page/website untuk bisnis saya. Bisa minta informasi lebih lanjut?';
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
    id="cta" z
    class="relative min-h-screen flex flex-col text-gray-600 body-font justify-center bg-[url(/assets/abstract_paper.webp)] bg-cover bg-center"
  >
    <div class="absolute inset-0 bg-white/35 sm:bg-white/5 backdrop-blur-md z-0"></div>
    <div class="relative z-10 container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full max-w-4xl mx-auto">
        
        <h2 ref="ctaTitle" class="sm:text-5xl text-3xl font-extrabold title-font mb-4">
          Siap Naikan Level Penjualanmu?
        </h2>

        <p ref="ctaParagraph" class="lg:w-2/3 mx-auto font-extrabold leading-relaxed text-base">
          Dari landing page yang professional hingga website custom yang fungsional, kami siap membantu UMKM dan brand lokal untuk tumbuh lebih cepat di dunia digital.
        </p>

        <div ref="ctaButtonContainer" class="mt-10">
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
            Konsultasi Gratis via WhatsApp
            <Icon icon="mdi:whatsapp" width="24" class="ml-3 cta-icon"></Icon>
          </n-button>
        </div>
      </div>
    </div>
  </section>
</template>