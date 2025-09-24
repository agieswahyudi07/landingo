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
    class="relative min-h-screen flex flex-col text-gray-100 body-font justify-center bg-primary bg-center"
  >
    <div class="custom-shape-divider-top-1758725921">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
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

<style setup>
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